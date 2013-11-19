(function($) {

  $.AnnotationLayerRegionController = function(options) {
    jQuery.extend(true, this, {
    }, options);


    this.create();
  };

  $.AnnotationLayerRegionController.prototype = {

    create: function() {
      // console.log("annotation region controller created");
    },

    append: function(item) {
      this.element.append(item);
    },

    render: function() {

    },

    show: function() {
      this.element.fadeIn();
    },

    hide: function() {
      this.element.fadeOut();
    }


  };

}(Mirador));
