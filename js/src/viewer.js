(function($) {

  $.Viewer = function(options) {

    jQuery.extend(true, this, {
      id:                     options.id,
      hash:                   options.id,
      data:                   null,
      element:                null,
      canvas:                 null,
      initialLayout:          $.DEFAULT_SETTINGS.initialLayout || 'cascade',
      layout:                 null,
      mainMenu:               null,
      numManifestsLoaded:     0,
      showStatusBar:          $.DEFAULT_SETTINGS.statusBar.show,
      statusBar:              null,
      widgets:                [],
      collectionsListingCls:  'mirador-listing-collections',
      mainMenuLoadWindowCls:  '.mirador-main-menu .load-window',
      workspaceAutoSave:      $.DEFAULT_SETTINGS.workspaceAutoSave,

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

      this.canvas.height(this.canvas.height() - this.mainMenu.element.outerHeight(true));

      // add status bar
      if (this.showStatusBar) {
        this.statusBar = new $.StatusBar({ appendTo: this.element });
        this.canvas.height(this.canvas.height() - this.statusBar.element.outerHeight(true));
      }

      // add layout configuration
      this.layout = new $.Layout();

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

        console.log(widget);

        if (widget && widget.id === id) {
          if (widget.type === 'imageView') {
            $.viewer.lockController.removeLockedView(widget.id);
            console.log(widget.type);
            console.log('removed image view');
          }
          $.viewer.widgets.splice(index, 1);
        }
      });
    },


    loadImageView: function(manifestId, openAt) {
      $.viewer.addWidget({
        height: $.DEFAULT_SETTINGS.imageView.height,
        manifestId: manifestId,
        openAt: openAt,
        type: 'imageView',
        width: $.DEFAULT_SETTINGS.imageView.width
      });
    },


    loadScrollView: function(manifestId) {
      $.viewer.addWidget({
        height: $.DEFAULT_SETTINGS.scrollView.height,
        manifestId: manifestId,
        type: 'scrollView',
        width: $.DEFAULT_SETTINGS.scrollView.width
      });
    },


    loadThumbnailsView: function(manifestId) {
      $.viewer.addWidget({
        height: $.DEFAULT_SETTINGS.thumbnailsView.height,
        manifestId: manifestId,
        type: 'thumbnailsView',
        width: $.DEFAULT_SETTINGS.thumbnailsView.width
      });
    },


    loadMetadataView: function(manifestId) {
      $.viewer.addWidget({
        height: $.DEFAULT_SETTINGS.metadataView.height,
        manifestId: manifestId,
        type: 'metadataView',
        width: $.DEFAULT_SETTINGS.metadataView.width
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
            imageTitles:      $.getImageTitles(manifest.sequences[0].imagesList)
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

      if (isNaN(delay)) {
        delay = 0;
      }

      if (hide && typeof hide !== 'boolean') {
        hide = true;
      }

      elTextFrame.text(content);

      if (hide) {
        setTimeout(function() { elTextFrame.fadeOut(); }, delay);
      }

    }

  };

}(Mirador));
