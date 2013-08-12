
window.DiscoveryUI = window.DiscoveryUI || function(config) {
  DiscoveryUI.manifests = new DiscoveryUI.ManifestsLoader(config);
  DiscoveryUI.viewer    = new DiscoveryUI.Viewer(config);
};


// DiscoveryUI: Viewer
// ----------------------------------------------------------------------------

(function($) {

  $.Viewer = function(config) {
    jQuery.extend(true, this, {
      elDiscovery:  null,
      elViewer:     null,
      selections:   {},
      viewerJson: {
        id: 'viewer',
        data: []
      }
    }, config);

    this.elDiscovery = this.elDiscovery || jQuery('#' + this.discoveryId);
    this.elViewer    = this.elViewer || jQuery('#' + this.viewerId);


    this.renderButtonsPanel();
    this.renderListing();
    this.attachEvents();
  };

  $.Viewer.prototype = {

    renderButtonsPanel: function() {
      this.elDiscovery.append($.Templates.buttonsPanel({}));
    },


    renderListing: function() {
      var _this = this;

      jQuery.each($.manifests, function(id, manifest) {
        manifest.id = id;
        _this.elDiscovery.append($.Templates.collectionListing(manifest));
      });
    },


    attachEvents: function() {
      var _this = this;

      jQuery('.d-collection input[type="checkbox"]').on('click', function(event) {
        var target = jQuery(event.target),
            data = target.data();

        if (target.is(':checked')) {
          _this.addToSelectionsList(data);
        } else {
          _this.removeFromSelectionsList(data);
        }
      });


      jQuery('.load-selections').on('click', function(event) {
        _this.buildViewerJson();

        if (!jQuery.isEmptyObject(_this.viewerJson.data)) {
          _this.elViewer.width(jQuery(window).width());
          _this.elViewer.height(jQuery(window).height());

          _this.elDiscovery.hide();
          _this.elViewer.show();

          ElCamino(_this.viewerJson);
        } else {
          alert('No selections were made to load the viewer');
        }
      });

      jQuery('.clear-selections').on('click', function(event) {
        jQuery('.d-collection input[type="checkbox"]').prop('checked', false);
      });
    },


    addToSelectionsList: function(data) {
      var id = data.id,
          view = data.view,
          title = data.title || null;

      if (typeof this.selections[id] === 'undefined') {
        this.selections[id] = {};
      }

      if (typeof this.selections[id][view] === 'undefined') {
        this.selections[id][view] = {};
      }

      if (title) {
        this.selections[id][view][title] = {};
      }

    },


    removeFromSelectionsList: function(data) {
      if (typeof data.title !== 'undefined') {
        delete this.selections[data.id][data.view][data.title];
      } else {
        delete this.selections[data.id][data.view];
      }
    },


    buildViewerJson: function() {
      var _this = this;

      jQuery.each(this.selections, function(id, views) {
        var widgets = [],
            manifestUri = $.manifests[id].manifestUri,
            collectionTitle = $.manifests[id].metadata.label;

        jQuery.each(views, function(view, list) {
          if (view !== 'imageView') {
            widgets.push({ 'type': view });
          } else {
            jQuery.each(list, function(openAt, obj) {
              widgets.push({
                'type': view,
                'openAt': openAt
              });
            })
          }
        });

        _this.viewerJson.data.push({
          'manifestUri': manifestUri,
          'title': collectionTitle,
          'widgets': widgets
        });

      });
    },



  };

}(DiscoveryUI));


// DiscoveryUI: Templates
// ----------------------------------------------------------------------------

(function($) {

  $.Templates = {
    buttonsPanel: Handlebars.compile([
      '<div class="buttonsPanel">',
        '<input class="clear-selections" type="button" value="Clear All Selections">',
        '<input class="load-selections" type="button" value="Compare/Load Selected Views in Viewer">',
      '</div>'
    ].join('')),

    collectionListing: Handlebars.compile([
      '<div class="d-collection">',
        '<div class="title-box">',
          '<span class="collection-name">{{id}}. {{metadata.label}}</span>',
          '<span class="repo-location {{university repoLocation}}">{{repoLocation}}</span> ',
        '</div>',
        '<div class="collection-widgets-box">',
          '<input type="checkbox" data-id="{{id}}" data-view="thumbnailsView"> Thumbnails view',
          '<input type="checkbox" data-id="{{id}}" data-view="scrollView"> Scroll view',
          '<input type="checkbox" data-id="{{id}}" data-view="metadataView"> Metadata view',
        '</div>',
        '<ul>',
          '{{#images}}',
            '<li>',
              '<img src="{{imageUrl}}/full/,50/0/native.jpg" title="{{trimTitlePrefix title}}"><br/>',
              '<input type="checkbox" data-id="{{../id}}" data-view="imageView" data-title="{{title}}">{{trimTitlePrefixAndLength title}}',
            '</li>',
          '{{/images}}',
        '</ul>',
      '</div>'
    ].join(''))
  }

  Handlebars.registerHelper('university', function(repoLocation) {
    if (repoLocation === 'Yale University') {
      return 'yale';
    }

    if (repoLocation === 'Stanford University') {
      return 'stanford';
    }
  });


  Handlebars.registerHelper('trimTitlePrefix', function(title) {
    title = title.replace(/^Beinecke MS \w+, \[?/, '');
    title = title.replace(/\]$/, '');

    return title;
  });


  Handlebars.registerHelper('trimTitlePrefixAndLength', function(title) {
    title = title.replace(/^Beinecke MS \w+, \[?/, '');
    title = title.replace(/\]$/, '');

    if (title && title.length > 10) {
      title = title.substr(0, 10) + '...';
    }

    return title;
  });

}(DiscoveryUI));



// DiscoveryUI: Manifests Loader
// ----------------------------------------------------------------------------

(function($) {

  $.ManifestsLoader = function(config) {
    return this.getManifests(config);
  };

  $.ManifestsLoader.prototype = {
    getManifests: function(config) {
      var manifests = {};

      jQuery.each(config.manifests, function(index, obj) {
        var manifest = new $.Manifest(obj.manifestUri),
            id = index + 1;

        manifest.data.manifestUri = obj.manifestUri;
        manifest.data.repoLocation = obj.repoLocation;

        manifests[id] = manifest.data;
      });

      return manifests;
    }
  };

}(DiscoveryUI));


// DiscoveryUI: Manifest
// ----------------------------------------------------------------------------

(function($) {

  $.Manifest = function(uri) {
    var _this = this;

    jQuery.extend(true, this, {
      data: {},
      jsonLd:   null
    });

    this.parseManifests(uri);
  };


  $.Manifest.prototype = {

    parseManifests: function(uri) {
      var _this = this;

      jQuery.ajax({
        url: uri,
        dataType: 'json',
        async: false,

        success: function(jsonLd) {
          var id = jsonLd['@id'];

          _this.jsonLd = jsonLd;
          _this.parseMetadata(id);
          _this.parseImgData(id);
        }
      });

      delete _this.jsonLd;
    },


    parseMetadata: function(id) {
      this.data = {
        metadata: {
          label:        this.jsonLd.label || '',
          location:     this.jsonLd.location || '',
          description:  this.jsonLd.description || ''
        }
      }
    },


    parseImgData: function(id) {
      var _this = this;

      _this.data.images = [];

      jQuery.each(_this.jsonLd.sequences, function(index, sequence) {
        if (sequence['@type'] === 'sc:Sequence') {
          jQuery.each(sequence.canvases, function(index, canvas) {
            if (canvas['@type'] === 'sc:Canvas') {
              jQuery.each(canvas.resources, function(index, resource) {
                if (resource.motivation === 'sc:painting') {
                  _this.data.images.push({
                    title:    resource.resource.label || resource.label || canvas.label || '',
                    imageUrl: resource.resource.service['@id'].replace(/\/$/, ''),
                  });
                }
              });
            }

          });
        }
      });
    }

  }

}(DiscoveryUI));
