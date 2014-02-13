(function($) {

  $.ScrollView = function(options) {
    jQuery.extend(this, {
      element:              null,
      imagesList:           [],
      currentImg:           null,
      frameCls:             'scroll-view-frame',
      imageItemCls:         'item',
      parent:               null,
      imagesFrame:          null,
      tplData:              {},
      toolbarHeight:        $.DEFAULT_SETTINGS.scrollView.toolbarHeight,
      imageLabelHeight:     $.DEFAULT_SETTINGS.scrollView.imageLabelHeight,
      maxItemHeight:        0,
      navToolbarCls:        'mirador-scroll-view-nav-toolbar'
    }, options);
  };


  $.ScrollView.prototype = {

    render: function() {
      this.element.html('');
      this.setProperties();
      this.loadContent();
      this.attachEvents();
    },


    setProperties: function() {
      var _this = this,
          attrs = [];

      jQuery.each(this.imagesList, function(index, image) {
        var domId = _this.parent.element.attr('id') + '-item-' + index;

        attrs[domId] = {};
        attrs[domId].aspectRatio = (image.width / image.height).toFixed(2);
        attrs[domId].infoJsonUrl = $.Iiif.getUri(image.imageUrl) + '/info.json';
        attrs[domId].imageUrl    = image.imageUrl;
      });

      this.imagesList.attrs = attrs;
    },


    appendImagesFrame: function() {
      this.imagesFrame = jQuery($.Templates.scrollView.imagesFrame({
        frameCls: this.frameCls
      }));

      this.element.append(this.imagesFrame);
    },


    generateTemplateData: function() {
      var _this  = this,
          images = [];

      jQuery.each(this.imagesList, function(index, image) {
        var domId = _this.parent.element.attr('id') + '-item-' + index;

        images.push({
          id:    domId,
          title: image.title
        });
      });

      return ({
        'toolbarHeight': this.toolbarHeight,
        'images': images
      });
    },


    addToolbarNav: function() {
      this.parent.toolbar.append($.Templates.scrollView.navToolbar({
        navToolbarCls: this.navToolbarCls
      }));
    },


    getMaxItemHeight: function() {
      var padding = 0,
          scrollHeight = 5;

      padding += parseInt(this.imagesFrame.css('padding-top'), 10);
      padding += parseInt(this.imagesFrame.css('padding-bottom'), 10);

      return this.imagesFrame.height() - padding;
    },


    loadContent: function() {
      this.appendImagesFrame();
      this.addToolbarNav();

      this.imagesFrame.append($.Templates.scrollView.listImages(this.generateTemplateData()));

      this.setFrameAndItemsDimensions();
      this.loadImagesInViewPort();
    },


    setFrameAndItemsDimensions: function() {
      var _this = this,
          selectorImageItem = '.' + this.imageItemCls,
          itemHeight        = this.getMaxItemHeight(),
          imageHeight       = itemHeight - (this.toolbarHeight + this.imageLabelHeight);
          totalItemWidth    = 0;

      this.imagesFrame.find(selectorImageItem).each(function(index) {
        var domId           = _this.parent.element.attr('id') + '-item-' + index,
            itemWidth       = Math.round(_this.imagesList.attrs[domId].aspectRatio * imageHeight),
            elImageInstance = jQuery(this).find('.image-instance');

        jQuery(this).width(itemWidth).height(itemHeight);

        elImageInstance.height(imageHeight);

        totalItemWidth += jQuery(this).outerWidth(true);
      });

      this.imagesFrame.width(totalItemWidth + 15);
    },


    loadImagesInViewPort: function() {
      var _this = this,
          selectorImageItem = this.element.find('.' + this.frameCls + ' .' + this.imageItemCls),
          viewportWidth     = jQuery(this.element).width();

      jQuery(selectorImageItem).each(function(index) {
        var elImageItem     = jQuery(this),
            domId           = elImageItem.attr('id'),
            elImageInstance = elImageItem.find('.image-instance'),
            elStaticThumb   = elImageItem.find('.static-thumb'),
            elEnableZoom    = elImageItem.find('.enable-zoom'),
            isInViewport    = _this.isItemInViewport(viewportWidth, elImageItem),
            imgSrc, imageUrl;

        elImageInstance.find('.openseadragon-container').remove();
        elImageItem.find('.toolbar form').remove();

        elEnableZoom
          .unbind()
          .show()
          .click(function() {
            _this.showOsdContent(domId, elStaticThumb, elEnableZoom);
          });

       elStaticThumb.height('100%').width('100%').show();

        if (isInViewport) {
          imageUrl = _this.imagesList.attrs[domId].imageUrl;
          imgSrc   = $.Iiif.getUriWithHeight(imageUrl, jQuery(elImageInstance).height());

          elStaticThumb.attr('src', imgSrc);
        }

      });

    },


    showOsdContent: function(domId, elStaticThumb, elEnableZoom) {
      var infoJson;

      elEnableZoom.hide();
      elStaticThumb.hide();

      infoJson = $.getJsonFromUrl(this.imagesList.attrs[domId].infoJsonUrl, false);

      $.OpenSeadragon({
        'id':           domId + '-osd',
        'toolbar':      domId + '-osd-toolbar',
        'tileSources':  $.Iiif.prepJsonForOsd(infoJson)
      });

      // hide browser based full-screen icon
      jQuery('#' + domId + '-osd-toolbar button:last-child').hide();
    },


    isItemInViewport: function(viewportWidth, item) {
      var position = item.position().left + item.width();

      return (position > 0 && item.position().left < viewportWidth);
    },


    attachEvents: function() {
      this.attachWindowEvents();
      this.attachNavEvents();
      this.attachKeyboardScrollingEvents();
    },


    attachWindowEvents: function() {
      var _this = this;

      this.parent.element.dialog({
        resizeStop: function(event, ui) {
          _this.setFrameAndItemsDimensions();
          _this.loadImagesInViewPort();
        }
      });

      this.parent.element.on('dialogresizestop dialogextendmaximize dialogextendrestore', function(event, ui) {
        _this.setFrameAndItemsDimensions();
        _this.loadImagesInViewPort();
      });

    },


    attachKeyboardScrollingEvents: function() {
      var _this = this,
          duration = 300,
          leftArrowKey = 37,
          rightArrowKey = 39,
          elScrollFrame = jQuery('#' + this.parent.id + ' .' + this.frameCls);

      // to detect if cursor is above this widget's scroll frame
      elScrollFrame.on('mouseenter', function() { elScrollFrame.data('hover', true); });
      elScrollFrame.on('mouseleave', function() { elScrollFrame.data('hover', false); });

      jQuery(document).on('keydown', function(event) {
        var scrollWidth = _this.element.width(),
            posLeft;

        if (elScrollFrame.data('hover')) {

          posLeft = _this.element.scrollLeft();

          if (event.keyCode === leftArrowKey) {
            _this.element.animate({ scrollLeft: posLeft - scrollWidth}, duration);
          }

          if (event.keyCode === rightArrowKey) {
            _this.element.animate({ scrollLeft: posLeft + scrollWidth}, duration);
          }
        }

      });
    },


    attachNavEvents: function() {
      var _this = this,
          navToolbar = this.parent.toolbar.element.find('.' + this.navToolbarCls),
          selectorMetadataView   = '.mirador-icon-metadata-view',
          selectorThumbnailsView = '.mirador-icon-thumbnails-view';

      this.element.scrollStop(function() {
        _this.loadImagesInViewPort();
      });

      navToolbar.on('click', selectorMetadataView, function() {
        $.viewer.loadView("metadataView", _this.manifestId);
      });

      navToolbar.on('click', selectorThumbnailsView, function() {
        $.viewer.loadView("thumbnailsView", _this.manifestId);
      });


    }

  };


}(Mirador));