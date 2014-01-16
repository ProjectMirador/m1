describe('Mirador Main | mirador.js', function() {
  var $;

  beforeEach(function() {
    Mirador({
      id: 'abc',
      data: [
        { "manifestUri": "spec/data/Walters/bd183mz0176/manifest.json", "location": "Stanford University", "title": "MS 5", "widgets": [] }
      ]
    });

    $ = Mirador;
    console.log($);
  });


  // Tests for object initialization
  describe('Initialization', function() {

    it('should set "manifests" property', function() {
      expect(Mirador.manifests).toBeTruthy();
    });


    it('should set "viewer" property', function() {
      expect(Mirador.viewer).toBeTruthy();
    });

  });


  // Tests for utility methods
  describe('Utility methods', function() {

    beforeEach(function() {
      Mirador.DEFAULT_SETTINGS.availableViews = { 'xyzView': { 'label': 'Xyz View' } };
    });


    it('should validate a view from available views', function() {
      expect($.isValidView('newView')).toBeTruthy();
    });


    it('should convert inArray value to boolean', function() {
      expect($.inArrayToBoolean(1)).toBeTruthy();
      expect($.inArrayToBoolean(-1)).toBeFalsy();
    });


    it('should cast an object to array if string, or return the object', function() {
      expect($.castToArray('str')).toEqual(['str']);
      expect($.castToArray(['str'])).toEqual(['str']);
      expect($.castToArray({})).toEqual({});
    });


    it('should return an unique array from a given array', function() {
      expect($.getUniques(['a', 'b', 'b', 'a'])).toEqual(['a', 'b']);
    });


    it('should return a title prefix from a metadata object', function() {
      expect($.getTitlePrefix({ label: 'Collection 123' })).toEqual('Collection 123');
      expect($.getTitlePrefix({})).toEqual('');
    });


    it('should trim string by given length and add ellipsis', function() {
      expect($.trimStringBy('The painting is framed by illuminated borders', 25)).toEqual('The painting is framed by...');
      expect($.trimStringBy('The painting is framed', 25)).toEqual('The painting is framed');
    });


    it('should trim trailing whitespaces from a string', function() {
      expect($.trimString('  abc ')).toEqual('abc');
    });


    it('should return JSON data for a given URL via ajax call', function() {
      var data = { 'a': 'b' },
          error; // undefined

      spyOn(jQuery, 'ajax').andCallFake(function(params) {
        if (/success$/.test(params.url)) {
          params.success(data);
        } else {
          params.error(error);
        }
      });

      expect($.getJsonFromUrl('http://manifest/url/success', true)).toEqual(data);
      expect($.getJsonFromUrl('http://manifest/url/success', false)).toEqual(data);
      expect($.getJsonFromUrl('http://manifest/url/failed', false)).toEqual(error);
    });


    it('should return label for a given view name', function() {
      expect($.getViewLabel('xyzView')).toEqual('Xyz View');
      expect($.getViewLabel('unavailableView')).toEqual('unavailableView');
    });


    /*
    it('should return a Stanford IIIF URI given a Stanford stacks URI', function() {
      expect($.getIiifUri('http://stacks.stanford.edu/image/abc/def')).toEqual('https://stacks.stanford.edu/image/iiif/abc%2Fdef');
      expect($.getIiifUri('http://xyz.edu/image/abc')).toEqual('http://xyz.edu/image/abc');
    });


    it('should return a new IIIF URI given a height', function() {
      expect($.getIiifUriWithHeight('http://xyz.edu/image', 150)).toEqual('http://xyz.edu/image/full/,150/0/native.jpg');
    });
    */

    it('should extract label from a property attribute/key and titlecase it', function() {
      expect($.extractLabelFromAttribute('@id')).toEqual('Id');
      expect($.extractLabelFromAttribute('seeAlso')).toEqual('See Also');
    });


    it('should convert an array to string with delimiter (if array), or return string (if string)', function() {
      expect($.toString('str')).toEqual('str');
      expect($.toString(['a', 'b'])).toEqual('a b');
      expect($.toString(['a', 'b'], ' / ')).toEqual('a / b');
    });

  });


  // Tests for manifest data related methods
  describe('Manifest data related methods', function() {

    var imagesList = [{
      'id':     1,
      'title':  '1r',
      'height': 10,
      'width':  20
    }, {
      'id':     2,
      'title':  '1v',
      'height': 15,
      'width':  25
    }],

    imageTitlesAndIds = [{
      'id':     1,
      'title': '1r'
    }, {
      'id':     2,
      'title': '1v'
    }];

    beforeEach(function() {
      $.manifests = {
        "manifest-1234": {
          "uri":"http://xyz.edu/data/Manifest.json",
          "metadata": {
            "details": {
              'label': 'Collection 123'
            }
          },
          "sequences": [{
            "imagesList": imagesList
          }]
        }
      };
    });


    it('should return matching manifest for a given URI', function() {
      expect($.getManifestIdByUri('http://xyz.edu/data/Manifest.json')).toEqual('manifest-1234');
      expect($.getManifestIdByUri('http://xyz.edu/data/abc.json')).toEqual([]);
    });


    it('should return manifest metadata for a given manifest id', function() {
      expect($.getMetadataByManifestId('manifest-1234')).toEqual({ "details":{ 'label': 'Collection 123' } });
    });


    it('should return images list for given manifest id', function() {
      expect($.getImagesListByManifestId('manifest-1234')).toEqual(imagesList);
    });


    it('should return a collection title for a given metadata', function() {
      expect($.getCollectionTitle({ 'details': { 'label': 'abc' } })).toEqual('abc');
      expect($.getCollectionTitle({ 'details': { } })).toEqual('');
    });


    it('should return array of image titles and ids for a given images list', function() {
      expect($.getImageTitlesAndIds(imagesList)).toEqual(imageTitlesAndIds);
    });


  });

});
