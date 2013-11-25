(function($) {

  $.AnnotationsLayer = function(options) {

    jQuery.extend(true, this, {
      sidePanel:  null,
      bottomPanel:       null,
      regionController:  null,
      width:             $.DEFAULT_SETTINGS.imageView.annotationsList.width,
      parent:            null,
      stateEvents:       {},
      showList:          true,
      annotationUrls:    null,
      annotations:       [],
      commentAnnotations: 0,
      textAnnotations: 0,
      visible:        false,
      selectedAnnotation: null,
      hoveredAnnotation: null,
      annotationListCls: 'mirador-annotation-list'
    }, options);

    this.create();
  };


  $.AnnotationsLayer.prototype = {

    create: function() {
      var _this = this;


      // returns a promise object constructed using 
      // jQuery.when.apply(this, [deferred array]);
      _this.getAnnotations().done( function() {
        _this.bottomPanel = new $.AnnotationBottomPanel({parent: _this});
        _this.regionController = new $.AnnotationLayerRegionController({parent: _this});
        _this.sidePanel = new $.AnnotationLayerSidePanel({parent: _this});
      });

      this.bindEvents();
    },

    get: function(prop) {
      return this[prop];
    },

    set: function(prop, value, options) {
      _this = this;
      this[prop] = value;
      _this.event(prop + ':set').publish(value, options);
    },

    event: function(id) {

      var event = id && this.stateEvents[id];

      if (!event) {

        this.callbacks = jQuery.Callbacks();

        event = {
          publish: this.callbacks.fire,
          subscribe: this.callbacks.add,
          unsubscribe: this.callbacks.remove
        };

        if (id) {
          this.stateEvents[id] = event;
        }
      }
      return event;
    },

    getAnnotations: function() {
      var _this = this,
      requests = [];

      _this.set('annotations', []);
      
      if (!_this.annotationUrls) {
        _this.annotations = [];
        return jQuery.when(function() { return; });
      }

      jQuery.each(_this.annotationUrls, function(index, url) {
        var request =  jQuery.ajax(
            {
            url: url,
            dataType: 'json',
            async: true,
            
            success: function(jsonLd) {
              jQuery.each(jsonLd.resources, function(index, resource) {
                var annotation = {
                  region: $.parseRegion(resource.on),
                  title: null,
                  content: resource.resource.full ? resource.resource.full.chars : resource.resource.chars,
                  type: (resource.motivation).split(':')[1],
                  id: $.genUUID()
                };          

                annotation.osdFrame = $.getOsdFrame(annotation.region, _this.parent.currentImg);

                _this.annotations.push(annotation);
              });

              _this.computeAnnotationStats();
            },

            error: function() {
              console.log('Failed loading ' + uri);
            }
          });

        requests.push(request);

      });

      return jQuery.when.apply(this, requests);
    },

    bindEvents: function() {
      var _this = this;

      // model events
      _this.event('visible:set').subscribe( function(value) {
        if (value === false) { _this.hide(); } else { _this.show(); }
      });
      _this.event('selectedAnnotation:set').subscribe( function(value, options) {
        _this.focusSelected(value, options);
      });
      _this.event('hoveredAnnotation:set').subscribe( function(value, options) {
        _this.accentHovered(value, options);
      });
      _this.event('annotationUrls:set').subscribe( function() {
        _this.changePage();
      });
    },

    computeAnnotationStats: function() {
      var comments = 0,
      transcriptions = 0; 

      jQuery.each(_this.annotations, function(index, annotation) {
        if (annotation.type === 'commenting') { comments ++; } else { transcriptions ++; }
      });

      _this.commentAnnotations = comments;
      _this.textAnnotations = transcriptions;
    },

    setVisible: function() {
      var _this = this;

      if (_this.get('visible') === false) {
        _this.set("visible", true);
      }  else {
        _this.set("visible", false);
      }
    },

    changePage: function() {
      var _this = this;

      if (_this.annotations === null) {
        _this.set('visible', false);
        return;
      }

      _this.getAnnotations().done( function() {
        _this.sidePanel.render();
        _this.regionController.render();
      });
    },

    accentHovered: function(id, source) {
      var _this = this;
      
      if (source === 'listing') {
        _this.regionController.accentHovered(id);
      } else {
        _this.sidePanel.accentHovered(id);
      }
    },

    focusSelected: function(id, source) {
      var _this = this;
      
      _this.sidePanel.focusSelected(id, source);
      _this.regionController.focusSelected(id);
    },

    append: function(item) {
      this.element.append(item);
    },

    show: function() {
      this.sidePanel.show();
      this.regionController.show();
      this.bottomPanel.show();
    },

    hide: function() {
      this.sidePanel.hide();
      this.regionController.hide();
      this.bottomPanel.hide();
    },

    render: function() {
      var _this = this; 
      var templateData = {
        annotations: this.annotations,
        annotationCount: this.annotations.length,
        imageAnnotationCount: this.commentAnnotations, // filtered
        textAnnotationCount: this.textAnnotations // filtered
      };

      jQuery.each(this.annotations, function(index, annotation) {
        var elemString = '<div class="annotation" id="'+ annotation.id + '">',
        elem = jQuery(elemString)[0];

        _this.parent.osd.drawer.addOverlay(elem, annotation.osdFrame);
      });
      this.bindEvents();
    }

  };

}(Mirador));
