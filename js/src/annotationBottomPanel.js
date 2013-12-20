(function($) {

  $.AnnotationBottomPanel = function(options) {
    jQuery.extend(true, this, {
      visible: false,
      parent: null,
      hidden: false
    }, options);


    this.create();
  };

  $.AnnotationBottomPanel.prototype = {

    create: function() {
      var _this = this,
      templateData = null;
      this.element = jQuery($.Templates.imageView.annotationDetail(templateData));
      this.showPanelButton = jQuery($.Templates.imageView.annotationDetailToggle());
      this.annotationViewport = _this.parent.parent.parent.element.find('.mirador-widget-content');
      this.annotationViewport.append(_this.element);
      this.annotationViewport.append(_this.showPanelButton.hide());
      _this.hide();
      _this.bindEvents();
    },

    focusSelected: function(id) {
      this.visible = true;
      this.render();
      this.show();
    },

    bindEvents: function() {
      var _this = this;
      this.element.find('.annotationDetailToggle').on('click', function() { _this.toggleHidden(); });
      this.showPanelButton.find('.annotationDetailToggle').on('click', function() { _this.toggleHidden(); });
    },

    render: function() {
      var _this = this,
      id = _this.parent.selectedAnnotation,

      annotationText = jQuery.grep(_this.parent.annotations, function(a) {
        return a.id === id;
      })[0].content;

      _this.element.find('p').fadeOut(function() {
        jQuery(this).text(annotationText).fadeIn();
      });
    },

    deselect: function() {
      var _this = this;
      _this.visible = false;
      _this.hidden = false;
      _this.hide();
    },

    toggleHidden: function() {
      var _this = this;
      console.log("toggle called");
      
      if (_this.hidden) {
        _this.hidden = false;
        _this.show();
        return;
      }

      _this.hidden = true;
      _this.hide();
    },

    show: function() {
      var _this = this;
      if (this.hidden || !this.visible) return;
      _this.showPanelButton.fadeOut('fast');
      this.element.animate({ height: '20%', opacity: 1, display:'block' });   
    },

    hide: function() {
      var _this = this;
      this.element.animate({ height: 0, opacity: 0, display: 'none' });
      if (!_this.hidden || !_this.visible) {
        _this.showPanelButton.fadeOut('fast');
        return;
      }
      _this.showPanelButton.fadeIn('slow');
    }

  };

}(Mirador));
