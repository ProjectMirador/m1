(function($) {

  $.MainMenuLoadWindow = function(options) {

    jQuery.extend(true, this, {
      element:                null,
      width:                  300,
      loadWindowCls:          'mirador-load-window',
      mainMenuCls:            'mirador-main-menu',
      collectionsListingCls:  'listing-collections',
      parent:                 null
    }, options);

    this.element  = this.element || jQuery('<div/>');

    this.render();
    this.attachEvents();
  };


  $.MainMenuLoadWindow.prototype = {

    render: function() {

      this.element
        .addClass(this.loadWindowCls)
        .append($.loadWindowContent || '')
        .width(this.width)
        .appendTo(this.parent.element)
        .dialog({
          dialogClass: 'mirador-viewer-dialog-no-title-bar'
        });

      this.element
        .dialog('option', 'position', {
          my: "center top",
          at: "right bottom+10",
          of: jQuery('.' + this.mainMenuCls + ' .load-window')
        });
    },


    destroy: function() {
      this.element.dialog('destroy');
      this.element.remove();
      this.parent.loadWindow = null;
    },


    // load window event handlers
    attachEvents: function() {
      var selectorSelect          = '.' + this.collectionsListingCls + ' select',
          selectorUl              = '.' + this.collectionsListingCls + ' ul',
          selectorScrollView      = '.' + this.collectionsListingCls + ' a.mirador-icon-scroll-view',
          selectorMetadataView    = '.' + this.collectionsListingCls + ' a.mirador-icon-metadata-view',
          selectorThumbnailsView  = '.' + this.collectionsListingCls + ' a.mirador-icon-thumbnails-view',
          _this                   = this;

      // attach onChange event handler for collections select list
      this.element.on('change', selectorSelect, function() {
        var manifestId = jQuery(this).val().replace(/^select-/, '');

        jQuery(selectorUl).hide();
        jQuery(selectorUl + '.ul-' + manifestId).show();
      });

      // attach click event handler for images in the list
      this.element.on('click', selectorUl, function(event) {
        var target = event.target;

        if (/^image-manifest-\d+/.test(target.className)) {
          var manifestId = target.className.replace(/^image-/, ''),
              openAt = target.text;

          $.viewer.loadImageView(manifestId, openAt);
          _this.destroy();
        }
      });

      // attach click event for thumbnails view icon
      this.element.on('click', selectorThumbnailsView, function() {
        var manifestId = jQuery(selectorSelect).val().replace(/^select-/, '');

        $.viewer.loadThumbnailsView(manifestId);
        _this.destroy();
      });

      // attach click event for scroll view icon
      this.element.on('click', selectorScrollView, function() {
        var manifestId = jQuery(selectorSelect).val().replace(/^select-/, '');

        $.viewer.loadScrollView(manifestId);
        _this.destroy();
      });

      // attach click event for metadata view icon
      this.element.on('click', selectorMetadataView, function() {
        var manifestId = jQuery(selectorSelect).val().replace(/^select-/, '');

        $.viewer.loadMetadataView(manifestId);
        _this.destroy();
      });
    }


  };



}(Mirador));