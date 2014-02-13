(function($) {

  $.MetadataView = function(options) {

    jQuery.extend(this, {
      currentImg:           null,
      element:              null,
      parent:               null,
      metadata:             null,
      metadataListingCls:   'metadata-listing',
      navToolbarCls:        'mirador-metadata-view-nav-toolbar'
    }, options);

    this.metadata = $.getMetadataByManifestId(this.manifestId);
  };


  $.MetadataView.prototype = {

    render: function() {
      var _this = this,
          types = [ 'about', 'details', 'rights', 'links', 'metadata' ],
          tplData = {
            metadataListingCls: this.metadataListingCls
          };

      jQuery.each(types, function(index, type) {
        tplData[type] = [];

        // alert(type + ' ' + _this.metadata[type]);
        jQuery.each(_this.metadata[type], function(key, value) {
          if (typeof value === 'object') {
            value = $.stringifyObject(value);
          }

          if (typeof value === 'string' && value !== '') {
            tplData[type].push({
              label: $.extractLabelFromAttribute(key),
              value: _this.addLinksToUris(value)
            });

          }
        });
      });

      this.element.append($.Templates.metadataView.listTerms(tplData));

      this.addToolbarNav();
      this.attachEvents();
    },


    addToolbarNav: function() {
      this.parent.toolbar.append($.Templates.metadataView.navToolbar({
        navToolbarCls: this.navToolbarCls
      }));
    },


    attachEvents: function() {
      var navToolbar = this.parent.toolbar.element.find('.' + this.navToolbarCls),
          selectorScrollView     = '.mirador-icon-scroll-view',
          selectorThumbnailsView = '.mirador-icon-thumbnails-view',
          _this = this;

      navToolbar.on('click', selectorScrollView, function() {
        $.viewer.loadView("scrollView", _this.manifestId);
      });

      navToolbar.on('click', selectorThumbnailsView, function() {
        $.viewer.loadView("thumbnailsView", _this.manifestId);
      });
    },


    addLinksToUris: function(text) {
      // http://stackoverflow.com/questions/8188645/javascript-regex-to-match-a-url-in-a-field-of-text
      var regexUrl = /(http|ftp|https):\/\/[\w\-]+(\.[\w\-]+)+([\w.,@?\^=%&amp;:\/~+#\-]*[\w@?\^=%&amp;\/~+#\-])?/gi,
          textWithLinks = text,
          matches;

      if (typeof text === 'string') {
        matches = text.match(regexUrl);

        if (matches) {
          jQuery.each(matches, function(index, match) {
            textWithLinks = textWithLinks.replace(match, '<a href="' + match + '" target="_blank">' + match + '</a>');
          });
        }
      }

      return textWithLinks;
    }


  };


}(Mirador));