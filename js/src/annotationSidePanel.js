(function($) {

  $.AnnotationLayerSidePanel = function(options) {
    jQuery.extend(true, this, {
      element: null,
      listShell: null,
      visible: true,
      listings: [],
      lastSelected: null,
      lastHovered: null
    }, options);

    this.create();
  };

  $.AnnotationLayerSidePanel.prototype = {

    create: function() {
      var templateData = {
        annotations: this.parent.get('annotations'),
        annotationCount: this.parent.get('annotations').length,
        imageAnnotationCount: this.parent.get('commentAnnotations'), // filtered
        textAnnotationCount: this.parent.get('textAnnotations') // filtered
      };

      this.element = jQuery($.Templates.imageView.annotationPanel(templateData));
      this.listShell = this.element.find('.annotationList');
      this.parent.parent.element.append(this.element);
      this.render();
      if (!this.parent.get('visible')) {
        this.element.hide();
      }
    },

    append: function(item) {
    },

    bindEvents: function() {
    },

    selectAnno : function(id) {
    },

    render: function() {
      var _this = this;
      this.listings = [];
      this.listShell.empty();

      var templateData = {
        annotations: this.parent.get('annotations'),
        annotationCount: this.parent.get('annotations').length,
        imageAnnotationCount: this.parent.get('commentAnnotations'), // filtered
        textAnnotationCount: this.parent.get('textAnnotations') // filtered
      };

      jQuery.each(this.parent.get('annotations'), function(index, annotation) {

        var listing = new $.AnnotationListing({
          id: annotation.id,
          title: annotation.title,
          content: annotation.content,
          parent: _this
        });

        _this.listings.push(listing);

      });

      this.bindEvents();
    },
    
    focusSelected: function(id, source) {
      var _this = this;

      var selectedElementId = '#listing_' + id,
      selectedElement = jQuery(selectedElementId);
      
      if ( _this.lastSelected === null) { } else { _this.lastSelected.removeClass('selected'); }
      selectedElement.removeClass('hovered');
      selectedElement.addClass('selected');
      _this.lastSelected = selectedElement;

      if (source !== 'listing') {
        _this.listShell.scrollTo(selectedElement, 500);
      } 

      console.log("focusing " + id);
    },

    accentHovered: function(id) {
      var _this = this;

      if ( id === null ) {
        if (_this.lastHovered === null) { } else { _this.lastHovered.removeClass('hovered'); }
      }

      var hoveredElementId = '#listing_' + id,
      hoveredElement = jQuery(hoveredElementId);
      
      if (_this.lastHovered === null) { } else { _this.lastHovered.removeClass('hovered'); }
      if ( !hoveredElement.hasClass('selected') ) { hoveredElement.addClass('hovered'); }
      _this.lastHovered = hoveredElement;
      console.log(id);
    },

    show: function() {
      this.render();
      console.log("showing");
      this.element.stop().show();
    },

    hide: function() {
      console.log("hiding");
      this.element.stop().hide();
    }

  };

}(Mirador));
