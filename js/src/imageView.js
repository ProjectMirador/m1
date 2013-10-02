(function($) {

  $.ImageView = function(options) {

    jQuery.extend(this, {
      currentImg:       null,
      currentImgIndex:  0,
      element:          null,
      elemChoice:       null,
      height:           500,
      width:            400,
      units:            "mm",
      unitsLong:        "Millimetres",
      imagesList:       [],
      leading:          false,
      locked:           false,
      navToolbarCls:    'mirador-image-view-nav-toolbar',
      openAt:           null,
      zoomLevel:        null,
      osd:              null,
      osdBounds:        null,
      osdCls:           'mirador-osd',
      osdToolbarCls:    'mirador-osd-toolbar',
      parent:           null,
      scale:            null,
      selectedChoice:   '',
      statusbarCls:     'mirador-image-view-statusbar'
    }, options);


    if (this.openAt != null) {
      this.currentImgIndex = this.getImageIndexByTitle(this.openAt);
    }

    this.currentImg = this.imagesList[this.currentImgIndex];
  };


  $.ImageView.prototype = {

    render: function() {
      this.addToolbarNav();
      this.createOpenSeadragonInstance(this.currentImg.imageUrl);
      this.addStatusbarNav();
      this.attachWindowEvents();
    },


    createOpenSeadragonInstance: function(imageUrl, osdBounds) {
      var infoJsonUrl = $.Iiif.getUri(imageUrl) + '/info.json',
          osdId = 'mirador-osd-' + $.genUUID(),
          osdToolBarId = osdId + '-toolbar',
          infoJson,
          elemOsd,
          _this = this;

      this.element.find('.' + this.osdCls).remove();
      this.addOpenSeadragonToolBar(osdToolBarId);

      infoJson = $.getJsonFromUrl(infoJsonUrl, false);

      elemOsd =
        jQuery('<div/>')
          .addClass(this.osdCls)
          .attr('id', osdId)
          .appendTo(this.element);

      this.osd = $.OpenSeadragon({
        'id':           elemOsd.attr('id'),
        'toolbar':      osdToolBarId,
        'tileSources':  $.Iiif.prepJsonForOsd(infoJson)
      });

      this.osd.addHandler('open', function(){
        _this.addScale();
        _this.attachOsdEvents();
        _this.zoomLevel = _this.osd.viewport.getZoom();

        if (typeof osdBounds != 'undefined') {
          _this.osd.viewport.fitBounds(osdBounds);
        }
      });


      this.parent.element.dialog('option', 'title', this.getTitle());

      // hide browser based full-screen icon
      this.parent.toolbar.element.find('.' + this.osdToolbarCls + ' button:last-child').hide();

      this.clearChoices();

      if (this.currentImg.choices.length > 0) {
        this.renderChoices();
      }
    },


    addOpenSeadragonToolBar: function(id) {
      var osdToolbar =
        jQuery('<div/>')
      .addClass(this.osdToolbarCls)
      .attr('id', id);

      this.parent.toolbar.element.find('.' + this.osdToolbarCls).remove();
      this.parent.toolbar.append(osdToolbar);
    },


    renderChoices: function() {
      var _this = this,
          choicesInfo = [];

      choicesInfo.push({
        label: this.currentImg.choiceLabel,
        imageUrl: this.currentImg.imageUrl
      })

      jQuery.each(this.currentImg.choices, function(index, choice) {
        choicesInfo.push({
          label: choice.choiceLabel,
          imageUrl: choice.imageUrl
        });
      });

      this.elemChoice.show();
      this.selectedChoice = this.currentImg.choiceLabel;

      this.elemChoice.tooltipster({
        arrow: true,
        content: $.Templates.imageView.imageChoices({ choicesInfo: choicesInfo }),
        functionReady: function() { _this.addImageChoiceEvents(); },
        interactive: true,
        position: 'bottom',
        theme: '.tooltipster-mirador'
      });

      this.addImageChoiceEvents();
    },


    addImageChoiceEvents: function() {
      var _this = this,
          elemOptionChoices = jQuery(document).find('.mirador-image-view-choices');

      // elemOptionChoices.css('max-height', this.parent.getHeight() + 'px');

      elemOptionChoices.find('li a').each(function(index) {
        jQuery(this).removeClass('mirador-image-view-choice-selected');

        if (jQuery(this).data('choice') === _this.selectedChoice) {
          jQuery(this).addClass('mirador-image-view-choice-selected');
        }
      });


      elemOptionChoices.on('click', 'li a', function(event) {
        var selectedChoice = jQuery(event.target),
            dfd = jQuery.Deferred();

        _this.storeCurrentOsdBounds(dfd);

        dfd.done(function() {
          _this.createOpenSeadragonInstance(selectedChoice.data('image-url'), _this.osdBounds);
        });

        _this.selectedChoice = selectedChoice.data('choice');

        elemOptionChoices.find('li a').removeClass('mirador-image-view-choice-selected');
        selectedChoice.addClass('mirador-image-view-choice-selected');
      });

    },


    clearChoices: function() {
      this.elemChoice.hide();
    },


    storeCurrentOsdBounds: function(dfd) {
      this.osdBounds = this.parent.viewObj.osd.viewport.getBounds();
      dfd.resolve();
    },


    addToolbarNav: function() {
      this.parent.toolbar.append($.Templates.imageView.navToolbar({
        navToolbarCls: this.navToolbarCls
      }));

      this.elemChoice = this.parent.toolbar.element.find('.' + this.navToolbarCls + ' .mirador-icon-choices');
      this.elemChoice.hide();

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

        this.createOpenSeadragonInstance(this.currentImg.imageUrl);
      }
    },


    prev: function() {
      var prev = this.currentImgIndex - 1,
          infoJsonUrl;

      if (prev >= 0) {
        this.currentImgIndex = prev;
        this.currentImg = this.imagesList[prev];

        this.createOpenSeadragonInstance(this.currentImg.imageUrl);
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
      var _this = this,
          newWidth = null;

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
        } else {
          _this.lock();
        }
      });

      statusbar.on('keypress paste keyup', dimensionCls, function(e) { _this.dimensionChange(e); });

      statusbar.on('input', unitCls, function() { _this.unitChange(); });

    },

    // Event Handlers
    broadcast: function() {
      this.scale.render();
      this.zoomLevel = this.osd.viewport.getZoom();

      // This if statement detects if the view is both locked and
      // is a "leader" (the mouse is currently hovered over it
      // or it has focus). See lines ~185, attachWindowEvents()
      // for this logic.

      if (this.locked === true && this.leading === true) {
        $.viewer.lockController.broadcast(this.parent.id);
      }
    },

    reachedExtent : function (minmax) {
      console.log('reached: '+minmax);
    },

    lock: function() {
      this.locked = true;
      this.parent.element.parent().addClass('locked');
      $.viewer.lockController.addLockedView(this.parent.viewObj);
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
