(function($) {

  $.WidgetToolbar = function(options) {

    jQuery.extend(true, this, {
      appendTo:       'body',
      element:        null,
      height:         $.DEFAULT_SETTINGS.widgetToolbar.height,
      parent:         null,
      showToolbar:    false,
      toolbarCls:     'mirador-widget-toolbar'
    }, options);

    this.element = this.element || jQuery('<div/>');
    this.create();
  };


  $.WidgetToolbar.prototype = {

    create: function() {
      this.element
        .addClass(this.toolbarCls)
        .height(this.height)
        .appendTo(this.parent.element);

      this.hide();

      if (this.showToolbar) this.show();
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
