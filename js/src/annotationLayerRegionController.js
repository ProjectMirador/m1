(function($) {

  $.AnnotationLayerRegionController = function(options) {
    jQuery.extend(true, this, {
      visible:true,
      lastSelected: null,
      lastHovered: null
    }, options);

    this.create();
  };

  $.AnnotationLayerRegionController.prototype = {

    create: function() {
      this.render();
      this.hide();
    },

    append: function(item) {
      this.element.append(item);
    },

    sortRegionsBySize: function(a, b) {
      var areaA = parseInt(a.region[2], 10)*parseInt(a.region[3], 10);
      var areaB = parseInt(b.region[2], 10)*parseInt(b.region[3], 10);
      return areaB - areaA;
    },

    render: function() {
      var _this = this,

      // using the Array.prototype.slice() below creates a duplicate of the array, 
      // instead of sorting it in place, which would shuffle the list order of 
      // annotations, an undesired effect.
      annotationsBySize = this.parent.get('annotations').slice().sort(this.sortRegionsBySize);

      if (_this.parent.get('visible')) {

        jQuery.each(annotationsBySize, function(index, annotation) {
          var elemString = '<div class="annotation" id="region_'+ annotation.id + '">',
          elem = jQuery(elemString)[0];

          _this.parent.parent.osd.drawer.addOverlay(elem, annotation.osdFrame);
        });

        setTimeout( function() { _this.bindEvents(); }, 200);
      }
    },

    bindEvents: function() {
      var _this = this;
      jQuery('.annotation').on('click', function(event) { _this.clickRegion(event); } );
      jQuery('.annotation').on('mouseenter', function(event) { _this.hoverRegion(event); } );
      jQuery('.annotation').on('mouseleave', function() { _this.leaveRegion(event); } );
    },

    leaveRegion: function() {
      this.parent.set('hoveredAnnotation', null, 'region');
    },

    clickRegion: function(event) {
      var _this = this,
      id = jQuery(event.target).attr('id').split('_')[1];

      _this.parent.set('selectedAnnotation', id, 'region');
    },

    hoverRegion: function(event) {
      var _this = this,
      id = jQuery(event.target).attr('id').split('_')[1];

      _this.parent.set('hoveredAnnotation', id, 'region');
    },
    
    accentHovered: function(id) {
      var _this = this;

      if ( id === null ) {
        if (_this.lastHovered === null) { } else { _this.lastHovered.removeClass('hovered'); }
      }

      var hoveredElementId = '#region_' + id,
      hoveredElement = jQuery(hoveredElementId);
      
      if (_this.lastHovered === null) { } else { _this.lastHovered.removeClass('hovered'); }
      if ( !hoveredElement.hasClass('selected') ) { hoveredElement.addClass('hovered'); }
      _this.lastHovered = hoveredElement;
    },
    
    focusSelected: function(id) {
      var _this = this,
      selectedElementId = '#region_' + id,
      selectedElement = jQuery(selectedElementId);
      
      if (_this.lastSelected === null) { } else {_this.lastSelected.removeClass('selected');}
      selectedElement.removeClass('hovered');
      selectedElement.addClass('selected');
      _this.lastSelected = selectedElement;

      var annotationFrame = jQuery.grep(_this.parent.annotations, function(a) { return a.id === id; } )[0].osdFrame;
      _this.parent.parent.osd.viewport.fitBounds(annotationFrame);
    },

    deselect: function() {
      var _this = this;
      _this.lastSelected.removeClass('selected');
    },

    show: function() {
      this.render();
    },

    hide: function() {
      if (!this.parent.annotationUrls) {
        return;
      }
      this.parent.parent.osd.drawer.clearOverlays();
    }

  };

}(Mirador));
