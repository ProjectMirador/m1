(function($) {

  $.WidgetStatusBar = function(options) {

    jQuery.extend(true, this, {
      appendTo:       'body',
      element:        null,
      height:         $.DEFAULT_SETTINGS.widgetStatusBar.height,
      parent:         null,
      showStatusbar:  false,
      statusbarCls:   'mirador-widget-statusbar'
    }, options);

    this.element = this.element || jQuery('<div/>');
    this.create();
  };


  $.WidgetStatusBar.prototype = {

    create: function() {
      this.element
        .addClass(this.statusbarCls)
        .height(this.height)
        .appendTo(this.parent.element);

      this.hide();
      if (this.showStatusbar) this.show();
    },

    append: function(item) {
      this.element.append(item);
    },

    show: function() {
      this.element.show();
    },

    hide: function() {
      this.element.hide();
    }
  };

}(Mirador));
