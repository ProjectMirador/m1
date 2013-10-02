(function($) {

  $.MainMenuLoadWindow = function(options) {

    jQuery.extend(true, this, {
      element:                null,
      width:                  300,
      collectionsListingCls:  'mirador-listing-collections'
    }, options);

    this.element  = this.element || jQuery('<div/>');

    this.attachEvents();
  };


  $.MainMenuLoadWindow.prototype = {

    // load window event handlers
    attachEvents: function() {
      var selectorSelect          = '.' + this.collectionsListingCls + ' select',
          selectorUl              = '.' + this.collectionsListingCls + ' ul',
          selectorScrollView      = '.' + this.collectionsListingCls + ' a.mirador-icon-scroll-view',
          selectorMetadataView    = '.' + this.collectionsListingCls + ' a.mirador-icon-metadata-view',
          selectorThumbnailsView  = '.' + this.collectionsListingCls + ' a.mirador-icon-thumbnails-view',
          _this                   = this;

      // attach onChange event handler for collections select list
      jQuery(document).on('change', selectorSelect, function() {
        var manifestId = jQuery(this).val().replace(/^select-/, '');

        jQuery(selectorUl).hide();
        jQuery(selectorUl + '.ul-' + manifestId).show();
      });

      // attach click event handler for images in the list
      jQuery(document).on('click', selectorUl, function(event) {
        var target = event.target;

        if (/^image-manifest-uuid-/.test(target.className)) {
          var manifestId = target.className.replace(/^image-/, ''),
              openAt = target.text;

          $.viewer.loadImageView(manifestId, openAt);
        }
      });

      // attach click event for thumbnails view icon
      jQuery(document).on('click', selectorThumbnailsView, function() {
        var manifestId = jQuery(selectorSelect).val().replace(/^select-/, '');

        $.viewer.loadThumbnailsView(manifestId);
      });

      // attach click event for scroll view icon
      jQuery(document).on('click', selectorScrollView, function() {
        var manifestId = jQuery(selectorSelect).val().replace(/^select-/, '');

        $.viewer.loadScrollView(manifestId);
      });

      // attach click event for metadata view icon
      jQuery(document).on('click', selectorMetadataView, function() {
        var manifestId = jQuery(selectorSelect).val().replace(/^select-/, '');

        $.viewer.loadMetadataView(manifestId);
      });
    }


  };



}(Mirador));
