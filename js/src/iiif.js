
(function($) {

  $.Iiif = {

    // Temporary method to create Stanford IIIF uri from Stanford stacks non-IIIF URI
    getUri: function(uri) {
      var iiifUri = uri,
      match = /http?:\/\/stacks.stanford.edu\/image\/(\w+\/\S+)/i.exec(uri);

      if (match && match.length === 2) {
        iiifUri = 'https://stacks.stanford.edu/image/iiif/' + encodeURIComponent(match[1]);
      }

      return iiifUri;
    },


    getUriWithHeight: function(uri, height) {
      return this.getUri(uri) + '/full/,' + height + '/0/native.jpg';
    },


    prepJsonForOsd: function(json) {
      var newScaleFactors = [],
          regex;

      if (!json.hasOwnProperty('image_host') && json.hasOwnProperty('@id')) {
        json.image_host = json['@id'];
      }

      if (json.hasOwnProperty('identifier')) {
        regex = new RegExp('/?' + json.identifier + '/?', 'i');

        json.image_host = json.image_host.replace(regex, '');
      }

      if (json.hasOwnProperty('scale_factors') && jQuery.isArray(json.scale_factors)) {
        for (var i = 0; i < json.scale_factors.length; i++) {
          newScaleFactors.push(i);
        }

        json.scale_factors = newScaleFactors;
      }

      return json;
    }

  };


}(Mirador));

