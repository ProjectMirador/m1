(function($){

  $.Manifest = function(manifestUri, dfd) {

    jQuery.extend(true, this, {
      uri:        manifestUri,
      jsonLd:     null,
      sequences:  [],

      metadata: {
        about:    {},
        details:  {},
        rights:   {},
        links:    {}
      }
    });

    this.loadManifestDataFromURI(dfd);
  };


  $.Manifest.prototype = {

    loadManifestDataFromURI: function(dfd) {
      var _this = this;

      jQuery.ajax({
        url: _this.uri,
        dataType: 'json',
        async: true,

        success: function(jsonLd) {
          _this.jsonLd = jsonLd;

          _this.sequences = _this.parseSequences();
          _this.parseMetadata();

          ++$.viewer.numManifestsLoaded;
          dfd.resolve(true);
        },

        error: function() {
          console.log('Failed loading ' + _this.uri);
          dfd.resolve(false);
        }
      });

      delete this.jsonLd; // clear memory
    },


    parseSequences: function() {
      var _this = this,
          sequences = [];

      jQuery.each(this.jsonLd.sequences, function(index, sequence) {
        if (sequence['@type'] === 'sc:Sequence') {
          sequences.push({
            id: sequence['@id'],
            imagesList: _this.getImagesList(sequence)
          });
        }
      });

      return sequences;
    },


    getImagesList: function(sequence) {
      var _this = this,
          imagesList = [];

      jQuery.each(sequence.canvases, function(index, canvas) {
        if (canvas['@type'] === 'sc:Canvas') {

          jQuery.each(canvas.resources, function(index, resource) {
            if (resource.motivation === 'sc:painting') {
              imagesList.push({
                id:       resource.resource['@id'] || resource['@id'],
                title:    resource.resource.label || resource.label || canvas.label || '',
                height:   resource.resource.height || resource.height || 0,
                width:    resource.resource.width || resource.width || 0,
                aspectRatio: ( resource.resource.width || resource.width || 0 ) / ( resource.resource.height || resource.height || 0 ),
                imageUrl: resource.resource.service['@id'].replace(/\/$/, ''),
                canvasId: resource.on
              });
            }
          });

        }
      });

      return imagesList;
    },


    parseMetadata: function() {
      this.parseMetadataAbout();
      this.parseMetadataDetails();
      this.parseMetadataRights();
      this.parseMetadataLinks();
    },


    parseMetadataAbout: function() {
      this.metadata.about = {
        '@context': this.jsonLd['@context'] || '',
        '@id':      this.jsonLd['@id'] || ''
      };
    },


    parseMetadataDetails: function() {
      this.metadata.details = {
        'label':        this.jsonLd.label || '',
        'agent':        this.jsonLd.agent || '',
        'location':     this.jsonLd.location || '',
        'date':         this.jsonLd.date || '',
        'description':  this.jsonLd.description || ''
      };
    },


    parseMetadataRights: function() {
      this.metadata.rights = {
        'license':      this.jsonLd.license || '',
        'attribution':  this.jsonLd.attribution || ''
      };
    },


    parseMetadataLinks: function() {
      this.metadata.links = {
        'service':  this.jsonLd.service || '',
        'seeAlso':  this.jsonLd.seeAlso || '',
        'within':   this.jsonLd.within || ''
      };
    }

  };

}(Mirador));
