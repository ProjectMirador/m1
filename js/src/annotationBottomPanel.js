(function($) {

  $.AnnotationBottomPanel = function(options) {
    jQuery.extend(true, this, {
    }, options);


    this.create();
  };

  $.AnnotationBottomPanel.prototype = {

    create: function() {
      // console.log("annotation Bottom Panel created");
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
