(function($) {

  $.ImageView = function(options) {

    jQuery.extend(this, {
      currentImg:       null,
      currentImgIndex:  0,
      element:          null,
      height:           500,
      imagesList:       [],
      leading:          false,
      locked:           false,
      navToolbarCls:    'mirador-image-view-nav-toolbar',
      openAt:           null,
      osd:              null,
      osdCls:           'mirador-osd',
      osdToolbarCls:    'mirador-osd-toolbar',
      parent:           null,
      scale:            null,
      statusbarCls:     'mirador-image-view-statusbar',
      units:            "mm",
      unitsLong:        "Millimetres",
      width:            400
    }, options);


    if (this.openAt != null) {
      this.currentImgIndex = this.getImageIndexByTitle(this.openAt);
    }

    this.currentImg = this.imagesList[this.currentImgIndex];
  };


  $.ImageView.prototype = {

    render: function() {
      this.createOpenSeadragonInstance();
      this.addToolbarNav();
      this.addStatusbarNav();
      this.attachWindowEvents();
    },

    createOpenSeadragonInstance: function() {
      var infoJsonUrl = $.getIiifUri(this.currentImg.imageUrl) + '/info.json',
      osdId = 'mirador-osd-' + (+new Date()),
      osdToolBarId = osdId + '-toolbar',
      elemOsd,
      _this = this;

      this.element.find('.' + this.osdCls).remove();

      this.addOpenSeadragonToolBar(osdToolBarId);

      elemOsd =
        jQuery('<div/>')
      .addClass(this.osdCls)
      .attr('id', osdId)
      .appendTo(this.element);

      this.osd = $.OpenSeadragon({
        'id':           elemOsd.attr('id'),
        'toolbar':      osdToolBarId,
        'tileSources':  $.getJsonFromUrl(infoJsonUrl, false)
      });

      this.osd.addHandler('open', function(){
        _this.addScale();
        _this.attachOsdEvents();
      });

      this.parent.element.dialog('option', 'title', this.getTitle());

      // hide browser based full-screen icon
      this.parent.toolbar.element.find('.' + this.osdToolbarCls + ' button:last-child').hide();
    },


    addOpenSeadragonToolBar: function(id) {
      var osdToolbar =
        jQuery('<div/>')
      .addClass(this.osdToolbarCls)
      .attr('id', id);

      this.parent.toolbar.element.find('.' + this.osdToolbarCls).remove();
      this.parent.toolbar.append(osdToolbar);
    },


    addToolbarNav: function() {
      this.parent.toolbar.append($.Templates.imageView.navToolbar({
        navToolbarCls: this.navToolbarCls
      }));

      this.attachNavEvents();
    },


    addStatusbarNav: function() {
      this.parent.statusbar.append($.Templates.imageView.statusbar({
        statusbarCls: this.statusbarCls
      }));

      this.attachStatusbarEvents();
    },


    addScale: function() {
      this.scale = new $.WidgetScale({
        parent: this,
        showScale: true
      });
    },


    getImageIndexByTitle: function(title) {
      var _this = this,
          imgIndex = 0;

      jQuery.each(this.imagesList, function(index, img) {
        if ($.trimString(img.title) === $.trimString(title)) {
          imgIndex = index;
        }
      });

      return imgIndex;
    },


    getTitle: function() {
      var titles = [];

      titles.push(
        $.getViewLabel(this.parent.type) + ' : ' +
        $.getTitlePrefix(this.parent.metadataDetails)
      );

      if (this.currentImg.title) {
        titles.push(this.currentImg.title);
      }

      return titles.join(" / ");
    },

    setHeight: function(h) {
      this.height = h;
    },

    setWidth: function(w) {
      this.width = w;
    },

    next: function() {
      var next = this.currentImgIndex + 1,
      infoJsonUrl;

      if (next < this.imagesList.length) {
        this.currentImgIndex = next;
        this.currentImg = this.imagesList[next];

        this.createOpenSeadragonInstance();
      }
    },

    prev: function() {
      var prev = this.currentImgIndex - 1,
      infoJsonUrl;

      if (prev >= 0) {
        this.currentImgIndex = prev;
        this.currentImg = this.imagesList[prev];

        this.createOpenSeadragonInstance();
      }
    },

    attachWindowEvents: function() {
      var _this = this;

      this.parent.element.on({
        // It is necessary to know which view to use as
        // the "leader" for event broadcasting in order to
        // prevent an infinite loop. This is accomplished by
        // tracking mouse position for now until OSD integrates
        // events that don't broadcast events.
        mouseenter: function() {
          _this.leading = true;
        },
        mouseleave: function(){
          _this.leading = false;
        }
      });

      this.parent.element.dialog({
        resize: function(event, ui) {
          _this.osd.viewport.ensureVisible();
        }
      });

      this.parent.element.bind('dialogextendmaximize dialogextendrestore', function(event, ui) {
        _this.osd.viewport.ensureVisible();
      });
    },

    attachOsdEvents: function() {
      var _this = this;
      var newWidth = null;

      this.osd.addHandler('zoom', function() { _this.broadcast(); });
      this.osd.addHandler('pan', function() { _this.broadcast(); });
    },

    attachNavEvents: function() {
      var navToolbar = this.parent.toolbar.element.find('.' + this.navToolbarCls),
      selectorMetadataView    = '.mirador-icon-metadata-view',
      selectorScrollView      = '.mirador-icon-scroll-view',
      selectorThumbnailsView  = '.mirador-icon-thumbnails-view',
      selectorNext            = '.mirador-icon-next',
      selectorPrevious        = '.mirador-icon-previous',
      _this = this;

      navToolbar.on('click', selectorPrevious, function() {
        _this.prev();
      });

      navToolbar.on('click', selectorNext, function() {
        _this.next();
      });

      navToolbar.on('click', selectorMetadataView, function() {
        $.viewer.loadMetadataView(_this.manifestId);
      });

      navToolbar.on('click', selectorScrollView, function() {
        $.viewer.loadScrollView(_this.manifestId);
      });

      navToolbar.on('click', selectorThumbnailsView, function() {
        $.viewer.loadThumbnailsView(_this.manifestId);
      });

    },


    attachStatusbarEvents: function() {

      var statusbar = this.parent.statusbar.element.find('.' + this.statusbarCls),
      lockCls = '.mirador-icon-lock',
      dimensionCls = '.mirador-image-view-physical-dimensions',
      unitCls = '.units',
      _this = this;

      statusbar.on('click', lockCls, function() {
        if (_this.locked) {
          _this.unlock();
        } else _this.lock();

      });

      statusbar.on('keypress paste keyup', dimensionCls, function(e) { _this.dimensionChange(e); });

      statusbar.on('input', unitCls, function() { _this.unitChange(); });

    },

    // Event Handlers
    broadcast: function() {

      this.scale.render();

      if (this.locked === true && this.leading === true) {
        $.viewer.lockController.broadcast(this.parent.id);
      }
    },

    // In the current design, don't need specific event data sent to controller.
    // All events on the canvas call the same function.
    // panCanvas: function() {

    //     this.scale.render();
    //     // if you are a leader, broadcast to controller.
    //     // if not, do nothing.

    //     if (this.leading) {
    //         $.LockController.panAll();
    //     }
    // },

    lock: function() {
      this.locked = true;
      this.parent.element.parent().addClass('locked');
      $.viewer.lockController.addLockedView(this.parent.viewObj);

      // Check if there is already a lock entry.
      // If so, remove from the lock list.
      // unbind a call to the lock controller to the canvas for pan and zoom events.

    },

    unlock: function() {
      this.locked = false;
      this.parent.element.parent().removeClass('locked');
      $.viewer.lockController.removeLockedView(this.parent.id);
    },

    dimensionChange: function(e) {
      // e.target.value = e.target.value.replace(/[^0-9\.]/g,'');
      var valid = (/[0-9]|\./.test(String.fromCharCode(e.keyCode)) && !e.shiftKey);
      // check if the value of the number is an integer 1-9
      // if not, declare invalid
      console.log(e.type + ' ' + valid);
      console.log(e);
      console.log("keyCode:" + " " + e.keyCode);
      if (!valid) {
        e.preventDefault();
      }

      // check if keystroke is "enter"
      // if so, exit or deselect the box
      if ((e.keyCode || e.which) === 13) {
        e.target.blur();
      }

      var width = this.parent.statusbar.element.find('.x').val(),
      height = this.parent.statusbar.element.find('.y').val(),
      aspectRatio = this.parent.viewObj.currentImg.aspectRatio,
      unitCls = '.units';

      this.setWidth(width);
      this.setHeight(height);
      this.scale.render();

    },

    unitChange: function() {
      // console.log('units updated');
    }

  };


}(Mirador));
