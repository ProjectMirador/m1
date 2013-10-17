(function($) {

  $.AnnotationsLayer = function(options) {

    jQuery.extend(true, this, {
      element:           null,
      width:            $.DEFAULT_SETTINGS.imageView.annotationsList.width,
      parent:            null,
      showList:          true,
      annotationUrls:    null,
      annotations:       [],
      commentAnnotations: 0,
      textAnnotations: 0,
      annotationListCls: 'mirador-annotation-list'
    }, options);

    this.create();
  };


  $.AnnotationsLayer.prototype = {

    create: function() {
      this.getAnnotations();
      this.element = jQuery($.Templates.imageView.annotationPanel({annotations: this.annotations})).resizable();
      this.parent.element.append(this.element);
      this.element.hide();
    },

    getAnnotations: function() {
      var _this = this;

      function parseRegion (url) {
        url = new URI(url);
        var regionString = url.hash(); 
        regionArray = regionString.split('=')[1].split(',');
        return regionArray;
      }

      jQuery.each(_this.annotationUrls, function(index, url) {

        jQuery.ajax({
          url: url,
          dataType: 'json',
          async: true,

          success: function(jsonLd) {
            console.log(jsonLd);
            jQuery.each(jsonLd.resources, function(index, resource) {
              var annotation = {
                region: parseRegion(resource.on),
                title: null,
                content: resource.resource.full ? resource.resource.full.chars : resource.resource.chars,
                type: (resource.motivation).split(':')[1],
                id: $.genUUID()
              };          
              if (annotation.type === 'commenting') { _this.commentAnnotations++; } else { _this.textAnnotations ++; }
              _this.annotations.push(annotation);
            });
          },

          error: function() {
            console.log('Failed loading ' + uri);
            // dfd.resolve(false);
          }
        });

      });
    },

    bindEvents: function() {
      console.log('events bound');
    },

    append: function(item) {
      this.element.append(item);
    },

    show: function() {
      this.render();
      this.element.fadeIn();
    },

    hide: function() {
      this.element.fadeOut();
    },

    render: function() {
      var _this = this; 
      var templateData = {
        annotations: this.annotations,
        annotationCount: this.annotations.length,
        imageAnnotationCount: this.commentAnnotations, //filtered
        textAnnotationCount: this.textAnnotations //filtered
      };

      this.element.replaceWith($.Templates.imageView.annotationPanel(templateData)).resizable();
      jQuery.each(this.annotations, function(index, annotation) {
        var elemString = '<div class="annotation" id="'+ annotation.id + '">',
        elem = jQuery(elemString)[0],
        imgWidth = _this.parent.currentImg.width,
        imgHeight = _this.parent.currentImg.height,
        canvasWidth = _this.parent.currentImg.canvasWidth,
        canvasHeight = _this.parent.currentImg.canvasHeight,
        widthNormaliser = imgWidth/canvasWidth,
        heightNormaliser = imgHeight/canvasHeight,
        rectX = (annotation.region[0]*widthNormaliser)/imgWidth,
        rectY = ((annotation.region[1])*heightNormaliser)/imgWidth,
        rectW = (annotation.region[2]*widthNormaliser)/imgWidth,
        rectH = (annotation.region[3]*heightNormaliser)/imgWidth;

        var overlayRect = new OpenSeadragon.Rect(rectX,rectY,rectW,rectH);

        console.log(overlayRect);
        _this.parent.osd.drawer.addOverlay(elem, overlayRect);
        console.log(annotation);
      });
      console.log(this.parent.osd.drawer);
      this.bindEvents();
    }

  };

}(Mirador));
