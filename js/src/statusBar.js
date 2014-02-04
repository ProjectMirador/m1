(function($) {

  $.StatusBar = function(options) {

    jQuery.extend(true, this, {
      element:          null,
      statusBarHeight:  $.DEFAULT_SETTINGS.statusBar.height,
      statusBarWidth:   $.DEFAULT_SETTINGS.statusBar.width,
      statusBarBarCls:  'mirador-status-bar'
    }, options);

    this.element  = this.element || jQuery('<div/>');

    this.render();
  };


  $.StatusBar.prototype = {

    render: function() {
      this.element
        .addClass(this.statusBarBarCls)
        .height(this.statusBarHeight)
        .width(this.statusBarWidth)
        .appendTo(this.appendTo);

      this.element.append($.Templates.statusBar.textFrames({}));
      this.xbox = this.element.find('.x');
      this.ybox = this.element.find('.y');
    }


  };

}(Mirador));
