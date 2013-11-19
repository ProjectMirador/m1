(function($) {

  $.AnnotationListing = function(options) {
    jQuery.extend(true, this, {
      element:null
    }, options);


    this.create();
  };

  $.AnnotationListing.prototype = {

    create: function() {
      var _this = this; 
      
    },

    append: function(item) {
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
