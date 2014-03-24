window.Mirador = window.Mirador || function(config) {

  if (Mirador.DEFAULT_SETTINGS.workspaceAutoSave) {

    // retrieve any saved settings or configuration options from
    // the localstorage database, merging them with the current
    // settings and configuration.
    //
    // acts as a "guard" function in the initialisation process.
    Mirador.settingsLoader = new Mirador.SettingsLoader(config);

    config = Mirador.settingsLoader.config;
  }

  // Render viewer using loaded manifests data
  Mirador.viewer = new Mirador.Viewer(config);

  // Fetch manifest, parse and render widgets from config
  Mirador.manifests = new Mirador.ManifestsLoader(config);
};

(function($) {

  /**
   * Default values for settings
   */
  $.DEFAULT_SETTINGS = {

    'workspaceAutoSave': true,

    'showNoImageChoiceOption': true,

    'initialLayout': 'stackAll3Columns',

    'availableViews': {
      'imageView': {
        'label': 'Image View'
      },

      'scrollView': {
        'label': 'Scroll View'
      },

      'thumbnailsView': {
        'label': 'Thumbnails View'
      },

      'metadataView': {
        'label': 'Metadata View'
      },

      'openLayersAnnotoriusView': {
        'label': 'Annotate View'
      }
    },

    'maxWidgetsLimit': 10,

    // main (top) menu
    'mainMenu': {
      'height': 25,
      'width': '100%'
    },

    // status bar
    'statusBar': {
      'show': true,
      'height': 25,
      'width': '100%'
    },

    // scale
    'scale': {
      'height': 60,
      'maxWidth': 230
    },

    // widget
    'widget': {
      'height': 400,
      'width': 400
    },

    // widget toolbar
    'widgetToolbar': {
      'height': 25
    },

    // widget status bar
    'widgetStatusBar': {
      'height': 26
    },

    // image view
    'imageView': {
      'height': 400,
      'width': 350,
      'annotationsList': {
        'display': true,
        'width': 200
      }
    },

    // scroll view
    'scrollView': {
      'height': 400,
      'imageLabelHeight': 25,
      'toolbarHeight': 25,
      'width': 600
    },

    // thumbnails view
    'thumbnailsView': {
      'height': 400,
      'thumbsMaxHeight': 150,
      'thumbsMinHeight': 50,
      'thumbsDefaultZoom': 0.5,
      'width': 600
    },

    // metadata view
    'metadataView': {
      'height': 400,
      'width': 600
    },

    // metadata view
    'openLayersAnnotoriusView': {
      'appId': 'lQ9BqPkPRVJR4Qbe652BapTP2JVDNzS0G2k6GCWW', // Parse.com app id
      'jsKey': 'VbYdon3U70Wi8aht9Y8Z2eRk3FmOsO2n1lQhx1vV', // Parse.com js_key
      'height': 400,
      'width': 600,
      'maxSize': 2500, // max longest side to load in open layers
      'maxZoomLevel': 4
    },

    // parameters of saving system
    'saveController': {
      'saveInterval': 8000 // number of milliseconds between automatic saves.
    },

    // linked image views configuration
    'lockController' : {
      'lockProfile' : 'lazyZoom',
      'notifyMaxMin' : false
    }
  };


  $.isValidView = function(view) {
    return (typeof $.DEFAULT_SETTINGS.availableViews.view === 'undefined');
  };


  $.inArrayToBoolean = function(index) {
    return index === -1 ? false : true;
  };


  $.castToArray = function(obj) {
    return (typeof obj === 'string') ? [obj] : obj;
  };


  // Removes duplicates from an array.
  $.getUniques = function(arr) {
    var temp = {},
    unique = [];

    for (var i = 0; i < arr.length; i++) {
      temp[arr[i]] = true;
    }

    for (var k in temp) {
      unique.push(k);
    }

    return unique;
  };


  $.getTitlePrefix = function(details) {
    var prefixes = [];

    if (details && details.label) {
      prefixes.push(details.label);
    }

    return prefixes.join(' / ');
  };


  $.trimString = function(str) {
    return str.replace(/^\s+|\s+$/g, '');
  };


  $.trimStringBy = function(str, length) {
    if (str.length > length) {
      str = str.substr(0, length) + '...';
    }

    return str;
  };


  // Base code from https://github.com/padolsey/prettyprint.js. Modified to fit Mirador needs
  $.stringifyObject = function(obj, nestingMargin) {
    var type = typeof obj,
        str,
        first = true,
        increment = 15,
        delimiter = '<br/>';

    if (obj instanceof RegExp) {
      return '/' + obj.source + '/';
    }

    if (typeof nestingMargin === 'undefined') {
      nestingMargin = 0;
    }

    if (obj instanceof Array) {
      str = '[ ';

      jQuery.each(obj, function (i, item) {
        str += (i === 0 ? '' : ', ') + $.stringifyObject(item, nestingMargin + increment);
      });

      return str + ' ]';
    }

    if (typeof obj === 'object') {
      str = '<div style="margin-left:' +  nestingMargin + 'px">';

      for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
          str += (first ? '' : delimiter) + i + ': ' + $.stringifyObject(obj[i], nestingMargin + increment);
          first = false;
        }
      }

      return str + '</div>';
    }


    return obj.toString();
  };


  $.getJsonFromUrl = function(url, async) {
    var json;

    jQuery.ajax({
      url: url,
      dataType: 'json',
      async: async || false,

      success: function(data) {
        json = data;
      },

      error: function(xhr, status, error) {
        console.error(xhr, status, error);
      }
    });

    return json;
  };


  $.getViewLabel = function(type) {
    var view = $.DEFAULT_SETTINGS.availableViews[type];

    return (view && view.label) ? view.label : type;
  };


  $.extractLabelFromAttribute = function(attr) {
    var label = attr;

    label = label.replace(/^@/, '');
    label = label.replace(/([A-Z])/g, ' $1');
    label = label.replace(/\s{2,}/g, ' ');
    label = label.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });

    return label;
  };


  $.toString = function(obj, delimiter) {
    var str = '',
    joint = delimiter || ' ';

    if (jQuery.type(obj) === 'string') {
      str = obj;
    }

    if (jQuery.isArray(obj)) {
      str = obj.join(joint);
    }

    return str;
  };


  /* --------------------------------------------------------------------------
     Methods related to manifest data
     -------------------------------------------------------------------------- */

  $.getManifestIdByUri = function(uri) {
    var id;

    id = jQuery.map($.manifests, function(manifest, manifestId) {
      if (uri === manifest.uri) {
        return manifestId;
      }
    });

    return id[0] || id;
  };


  $.getMetadataByManifestId = function(manifestId) {
    return $.manifests[manifestId].metadata;
  };


  $.getImagesListByManifestId = function(manifestId) {
    return $.manifests[manifestId].sequences[0].imagesList;
  };


  $.getCollectionTitle = function(metadata) {
    return metadata.details.label || '';
  };


  $.getImageTitlesAndIds = function(images) {
    var data = [];

    jQuery.each(images, function(index, image) {
      data.push({
        'title': image.title,
        'id': image.id
      });
    });

    return data;
  };


  $.genUUID = function() {
    var idNum = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16|0, v = c == 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
    });

    return "uuid-" + idNum;
  };


  $.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;

    if (typeof options !== 'undefined') {
      options = {};
    }

    var later = function() {
      previous = options.leading === false ? 0 : new Date();
      timeout = null;
      result = func.apply(context, args);
    };
    return function() {
      var now = new Date();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0) {
        clearTimeout(timeout);
        timeout = null;
        previous = now;
        result = func.apply(context, args);
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };


  $.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;
    return function() {
      context = this;
      args = arguments;
      timestamp = new Date();
      var later = function() {
        var last = (new Date()) - timestamp;
        if (last < wait) {
          timeout = setTimeout(later, wait - last);
        } else {
          timeout = null;
          if (!immediate) result = func.apply(context, args);
        }
      };
      var callNow = immediate && !timeout;
      if (!timeout) {
        timeout = setTimeout(later, wait);
      }
      if (callNow) result = func.apply(context, args);
      return result;
    };
  };

  $.parseRegion  = function(url) {
    url = new URI(url);
    var regionString = url.hash();
    regionArray = regionString.split('=')[1].split(',');
    return regionArray;
  };

  $.getOsdFrame = function(region, currentImg) {
    var imgWidth = currentImg.width,
    imgHeight = currentImg.height,
    canvasWidth = currentImg.canvasWidth,
    canvasHeight = currentImg.canvasHeight,
    widthNormaliser = imgWidth/canvasWidth,
    heightNormaliser = imgHeight/canvasHeight,
    rectX = (region[0]*widthNormaliser)/imgWidth,
    rectY = (region[1]*heightNormaliser)/imgWidth,
    rectW = (region[2]*widthNormaliser)/imgWidth,
    rectH = (region[3]*heightNormaliser)/imgWidth;

    var osdFrame = new OpenSeadragon.Rect(rectX,rectY,rectW,rectH);

    return osdFrame;
  };

}(Mirador));


/* --------------------------------------------------------------------------
   jQuery extensions
   -------------------------------------------------------------------------- */

// for scroll view
// source: http://stackoverflow.com/questions/14035083/jquery-bind-event-on-scroll-stops
jQuery.fn.scrollStop = function(callback) {
  $(this).scroll(function() {
    var self  = this,
    $this = $(self);

    if ($this.data('scrollTimeout')) {
      clearTimeout($this.data('scrollTimeout'));
    }

    $this.data('scrollTimeout', setTimeout(callback, 250, self));
  });
};


// for resize events
// source: https://github.com/f/jquery.resizestop
(function($) {
  var slice = Array.prototype.slice;

  // Special event definition
  $.extend($.event.special, {
    resizestop: {
      add: function(handle) {
        var handler = handle.handler;

        $(this).resize(function(e) {
          clearTimeout(handler._timer);
          e.type = 'resizestop';

          var _proxy = $.proxy(handler, this, e);
          handler._timer = setTimeout(_proxy, handle.data || 200);
        });
      }
    },

    resizestart: {
      add: function(handle) {
        var handler = handle.handler;

        $(this).on('resize', function(e) {
          clearTimeout(handler._timer);

          if (!handler._started) {
            e.type = 'resizestart';
            handler.apply(this, arguments);
            handler._started = true;
          }

          handler._timer = setTimeout($.proxy(function() {
            handler._started = false;
          }, this), handle.data || 300);
        });
      }
    }
  });

  // binding and currying the shortcuts.
  $.extend($.fn, {
    resizestop: function() {
      $(this).on.apply(this, ["resizestop"].concat(slice.call(arguments)));
    },
    resizestart: function() {
      $(this).on.apply(this, ["resizestart"].concat(slice.call(arguments)));
    }
  });
})(jQuery);
