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
      this.render();
      this.element.hide();
    },

    append: function(item) {
    },

    bindEvents: function() {
    },

    selectAnno : function(id) {
    },

    render: function() {
      var templateData = {
        annotations: this.parent.get('annotations'),
        annotationCount: this.parent.get('annotations').length,
        imageAnnotationCount: this.parent.get('commentAnnotations'), // filtered
        textAnnotationCount: this.parent.get('textAnnotations') // filtered
      };
      // console.log(templateData);

      this.listShell.empty();
      jQuery.each(this.parent.get('annotations'), function(index, annotation) {
        var elemString = '<div class="annotation" id="'+ annotation.id + '">',
        elem = jQuery(elemString)[0];

        // console.log(annotation);
        new $.AnnotationListing({
          id: $.genUUID(),
          title: annotation.title,
          content: annotation.content(),
          parent: this
        });

        _this.parent.parent.osd.drawer.addOverlay(elem, annotation.osdFrame);
      });
      
      this.bindEvents();
    },

    show: function() {
      this.render();
      console.log("showing");
      this.element.stop().fadeIn();
    },

    hide: function() {
      console.log("hiding");
      this.element.stop().fadeOut();
    }

  };

}(Mirador));
