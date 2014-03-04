(function($) {

  $.Viewer = function(options) {

    jQuery.extend(true, this, {
      id:                     options.id,
      hash:                   options.id,
      data:                   null,
      element:                null,
      canvas:                 null,
      initialLayout:          $.DEFAULT_SETTINGS.initialLayout || 'cascade',
      currentLayout:          null,
      layout:                 null,
      mainMenu:               null,
      numManifestsLoaded:     0,
      showStatusBar:          $.DEFAULT_SETTINGS.statusBar.show,
      statusBar:              null,
      widgets:                [],
      collectionsListingCls:  'mirador-listing-collections',
      mainMenuLoadWindowCls:  '.mirador-main-menu .load-window',
      workspaceAutoSave:      $.DEFAULT_SETTINGS.workspaceAutoSave,
      windowSize:             {},
      resizeRatio:            {},

      lastWidgetPosition: {
        x: 'left',
        y: 'top',
        offset: 0
      }

    }, $.DEFAULT_SETTINGS, options);

    this.element = this.element || jQuery('#' + this.id);

    if (this.data) {
      this.create();
    }

    // Add event coordinator, "lockController" to Mirador Namespace. This object
    // manages zoom events on imageView viewObjects. Must be loaded asynchronously to allow
    // viewport objects to finish being constructed from ajax requests.
    this.lockController = new $.LockController();

    if (this.workspaceAutoSave) {
      this.saveController = new $.SaveController();
    }
  };


  $.Viewer.prototype = {

    create: function() {
      // add main menu
      this.mainMenu = new $.MainMenu({ appendTo: this.element });

      // add viewer area
      this.canvas =
        jQuery('<div/>')
      .addClass('mirador-viewer')
      .appendTo(this.element);

      // add status bar
      if (this.showStatusBar) {
        this.statusBar = new $.StatusBar({ appendTo: this.element });
      }

      // add layout configuration
      this.layout = new $.Layout();

      this.alignViewerElements();
      this.attachEvents();
    },


    alignViewerElements: function() {
      this.canvas.height(this.element.height() - this.mainMenu.element.outerHeight(true));

      if (this.showStatusBar) {
        this.canvas.height(this.canvas.height() - this.statusBar.element.outerHeight(true));
      }
    },


    renderWidgetsForCollection: function(collection) {
      var _this = this;

      jQuery.each(collection.widgets, function(index, config) {
        if (!jQuery.isEmptyObject(config) && $.isValidView(config.type)) {
          config.manifestId = $.getManifestIdByUri(collection.manifestUri);
          _this.addWidget(config);
        }
      });

      if (typeof this.initialLayout !== 'undefined') {
        $.viewer.layout.applyLayout(this.initialLayout);
        this.currentLayout = this.initialLayout;
      }
    },


    addWidget: function(config) {
      jQuery.extend(true, config, {
        appendTo: this.canvas,
        id: 'mirador-widget-' + ($.genUUID()),
        position: {
          my: this.getWidgetPosition()
        }
      });

      this.widgets.push(new $.Widget(config));
    },


    removeWidget: function(id) {
      jQuery.each($.viewer.widgets, function(index, widget) {
        if (widget && widget.id === id) {
          if (widget.type === 'imageView') {
            $.viewer.lockController.removeLockedView(widget.id);
          }

          $.viewer.widgets.splice(index, 1);
        }
      });
    },

    findWidget: function(type, manifestId, imageId) {
      // filter this.widgets for matching widgets to enable basic
      // inter-widget-communication
      var matches = [];
      jQuery.each($.viewer.widgets, function(index, widget) {
        if (widget.type == type && widget.manifestId == manifestId) {
          if (!imageId || (this.imageId == imageId)) {
            matches.push(widget);
          }
        }
      });
      return matches;
    },

    loadView: function(type, manifestId, imageId, openAt) {
      $.viewer.addWidget({
        height:     $.DEFAULT_SETTINGS[type].height,
        manifestId: manifestId,
        openAt:     openAt,
        imageId:    imageId,
        type:       type,
        width:      $.DEFAULT_SETTINGS[type].width
      });
    },

    getWidgetPosition: function() {
      var offsetIncrement = 25,
      positionX = this.lastWidgetPosition.x + '+' + this.lastWidgetPosition.offset,
      positionY = this.lastWidgetPosition.y + '+' + this.lastWidgetPosition.offset;

      this.lastWidgetPosition.offset += offsetIncrement;

      return positionX + ' ' + positionY;
    },


    updateLoadWindowContent: function() {
      var tplData = {
        cssCls:  this.collectionsListingCls,
        collections: []
      },
      groupedList = this.arrangeCollectionsFromManifests(),
      locations = [];

      // sort by location name
      jQuery.each(groupedList, function(location, list) {
        locations.push(location);
      });

      jQuery.each(locations.sort(), function(index, location) {
        tplData.collections.push({
          location: location,
          list: groupedList[location]
        });
      });

      $.loadWindowContent = $.Templates.mainMenu.loadWindowContent(tplData);

      jQuery(this.mainMenuLoadWindowCls).tooltipster('update', $.loadWindowContent);
    },


    arrangeCollectionsFromManifests: function() {
      var groupedList = {};

      if (!jQuery.isEmptyObject($.manifests)) {
        jQuery.each($.manifests, function(manifestId, manifest) {
          var location = manifest.location;

          if (typeof groupedList[location] === 'undefined') {
            groupedList[location] = [];
          }

          groupedList[location].push({
            manifestId:       manifestId,
            collectionTitle:  $.trimStringBy($.getCollectionTitle(manifest.metadata), 60),
            imageData:        $.getImageTitlesAndIds(manifest.sequences[0].imagesList)
          });
        });
      }

      // sort by collection title
      jQuery.each(groupedList, function(location, list) {
        groupedList[location] = groupedList[location].sort(function(a, b) {
          return a.collectionTitle.localeCompare(b.collectionTitle);
        });
      });

      return groupedList;
    },


    addStatusBarMessage: function(position, content, delay, hide) {
      var elTextFrame = this.statusBar.element.find('.mirador-status-bar-msg-' + position);

      delay = isNaN(delay) ? 0 : delay;

      if (hide && typeof hide !== 'boolean') {
        hide = true;
      }

      elTextFrame.text(content);

      if (hide) {
        setTimeout(function() { elTextFrame.fadeOut(); }, delay);
      }
    },


    attachEvents: function() {
      var _this = this;

      jQuery(window).on('resizestart', function(event) {
        if (event.target == window) {
          _this.saveCurrentWindowSize();
        }
      });

      jQuery(window).on('resizestop', function(event) {
        if (event.target == window) {
          _this.resizeViewer();
        }
      });
    },


    resizeWidgets: function() {
      var _this = this;

      // Use current layout if in layout mode (i.e., no resized or dragged widgets)
      if (this.currentLayout !== null) {
        $.viewer.layout.applyLayout(this.currentLayout);

      // resize and re-position according to new window size
      } else {

        jQuery.each(this.widgets, function(index, widget) {
          var currentPosition = widget.getPosition(),
              x = currentPosition[0],
              y = currentPosition[1],
              newX,
              newY;

          newX = _this.resizeRatio.width * x;
          newY = _this.resizeRatio.height * y;

          if (_this.resizeRatio.width < 1) {
            widget.setPosition(newX, y);
            widget.setWidth(_this.resizeRatio.width * widget.getWidth());
          }

          if (_this.resizeRatio.height < 1) {
            widget.setPosition(x, newY);
            widget.setHeight(_this.resizeRatio.height * widget.getHeight());
          }

        });
      }

    },


    resizeViewer: function() {
      this.resizeRatio.width  = (jQuery(window).width() / this.windowSize.width).toFixed(2);
      this.resizeRatio.height = (jQuery(window).height() / this.windowSize.height).toFixed(2);

      this.alignViewerElements();
      this.resizeWidgets();
      this.saveCurrentWindowSize();
    },


    saveCurrentWindowSize: function() {
      this.windowSize.width  = jQuery(window).width();
      this.windowSize.height = jQuery(window).height();
    },


    saveCurrentLayout: function(layout) {
      this.currentLayout = layout;
    }

  };

}(Mirador));
