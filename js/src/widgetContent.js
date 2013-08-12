(function($) {

  $.WidgetContent = function(options) {

    jQuery.extend(true, this, {
      appendTo:       'body',
      element:        null,
      contentCls:     'mirador-widget-content',
      parent:         null
    }, options);

    this.element = this.element || jQuery('<div/>');
    this.create();
  };


  $.WidgetContent.prototype = {

    create: function() {
      var _this = this;

      this.element
        .addClass(this.contentCls)
        .height(_this.getHeight())
        .appendTo(this.parent.element);

        this.parent.element.on('dialogresize dialogresizestop dialogextendmaximize dialogextendrestore', function(event, ui) {
          _this.updateHeight();
        });
    },


    updateHeight: function() {
      this.element.height(this.getHeight());
    },


    getHeight: function() {
      // widget content height = dialog's height - toolbar's height - status bar's height
      var height = this.parent.element.height();

      height -= this.parent.toolbar.element.outerHeight(true);
      height -= this.parent.statusbar.element.outerHeight(true);

      return height;
    },


    show: function() {
      this.element.show();
    },


    hide: function() {
      this.element.hide();
    }


  };

}(Mirador));
