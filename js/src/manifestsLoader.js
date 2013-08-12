(function($) {

  $.ManifestsLoader = function(config) {
    return this.getManifestsData(config);
  };


  $.ManifestsLoader.prototype = {

    getManifestsData: function(config) {
      var _this = this,
          manifests = {},
          loadingOrder = [],
          arrDfds = [];

      jQuery.each(config.data, function(index, collection) {
        if (_this.hasWidgets(collection)) {
          loadingOrder.unshift(index);
        } else {
          loadingOrder.push(index);
        }
      });


      jQuery.each(loadingOrder, function(index, order) {
        var manifestId = 'manifest-' + (+new Date()),
            collection = config.data[order],
            dfd = jQuery.Deferred(),
            manifest;

        if (!jQuery.isEmptyObject(collection)) {

          manifest = new $.Manifest(collection.manifestUri, dfd);
          arrDfds.push(dfd);

          dfd.done(function(loaded) {
            if (loaded) {
              manifests[manifestId] = {
                uri:        $.trimString(collection.manifestUri),
                metadata:   manifest.metadata,
                sequences:  manifest.sequences
              };

              if (_this.hasWidgets(collection)) {
                $.viewer.renderWidgetsForCollection(collection);
              }

              $.viewer.addStatusBarMessage('left', 'Loaded ' + collection.manifestUri, 600);
            }
          });
        }

      });

      jQuery.when.apply(null, arrDfds).done(function() {
        $.viewer.updateLoadWindowContent();
        $.viewer.addStatusBarMessage('left', 'Loaded ' + $.viewer.numManifestsLoaded + ' of ' + (arrDfds.length) + ' manifests to viewer', 1000, true);
      });

      return manifests;
    },


    hasWidgets: function(collection) {
      return (
        typeof collection.widgets !== 'undefined' &&
        collection.widgets &&
        !jQuery.isEmptyObject(collection.widgets) &&
        collection.widgets.length > 0
      );
    }

  };

}(Mirador));