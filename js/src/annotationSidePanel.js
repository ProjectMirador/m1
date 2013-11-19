(function($) {

  $.AnnotationLayerSidePanel = function(options) {
    jQuery.extend(true, this, {
      element: null,
      listShell: null,
      visible: true
    }, options);

    this.create();
  };

  $.AnnotationLayerSidePanel.prototype = {

    create: function() {
      // console.log("Side Panel Created");
      var templateData = {
        annotations: this.parent.get('annotations'),
        annotationCount: this.parent.get('annotations').length,
        imageAnnotationCount: this.parent.get('commentAnnotations'), // filtered
        textAnnotationCount: this.parent.get('textAnnotations') // filtered
      };

      // console.log("Annotation Listing Created");
      // console.log(templateData);
      this.element = jQuery($.Templates.imageView.annotationPanel(templateData));
      this.listShell = this.element.find('.annotationList');
      this.parent.parent.element.append(this.element);
      // console.log(this.listShell); 
    },

    append: function(item) {
    },

    render: function() {

    },

    show: function() {
      console.log("showing");
      this.element.fadeIn();
    },

    hide: function() {
      console.log("hiding");
      this.element.fadeOut();
    }

  };

}(Mirador));
