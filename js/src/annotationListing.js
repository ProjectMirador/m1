(function($) {

  $.AnnotationListing = function(options) {
    jQuery.extend(true, this, {
      element:null,
      id: null,
      title: null,
      content: null
    }, options);


    this.create();
  };

  $.AnnotationListing.prototype = {

    create: function() {
      var _this = this, 
      templateData = {
        id: this.id,
        title: this.title,
        content: this.content
      };
      console.log("listing created");

      this.element = jQuery($,Templates.AnnotationListing(templateData));
      this.append();
    },

    append: function(item) {
      this.parent.listShell.append(this.element);
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
