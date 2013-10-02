(function($) {

  $.MainMenuWindowOptions = function(options) {

    jQuery.extend(true, this, {
      menuContent:           null,
      windowOptionsMenuCls: 'window-options-menu',
    }, options);

    this.element = this.element || jQuery('<div/>');

    this.render();
    this.attachEvents();
  };


  $.MainMenuWindowOptions.prototype = {

    render: function() {
      this.element = jQuery($.Templates.mainMenu.windowOptionsMenu({
        windowOptionsMenuCls: this.windowOptionsMenuCls
      }));
    },


    attachEvents: function() {
      var elCascadeAll          = this.element.find('.cascade-all'),
          elTileAllVertically   = this.element.find('.tile-all-vertically'),
          elTileAllHorizontally = this.element.find('.tile-all-horizontally'),
          elStackAll2Cols       = this.element.find('.stack-all-vertically-2-cols'),
          elStackAll3Cols       = this.element.find('.stack-all-vertically-3-cols'),
          elCloseAll            = this.element.find('.close-all'),
          _this                 = this;

      elCascadeAll.click(function() {
        $.viewer.layout.cascadeAll();
      });

      elTileAllVertically.click(function() {
        $.viewer.layout.tileAllVertically();
      });

      elTileAllHorizontally.click(function() {
        $.viewer.layout.tileAllHorizontally();
      });

      elStackAll2Cols.click(function() {
        $.viewer.layout.stackAllByColumns(2);
      });

      elStackAll3Cols.click(function() {
        $.viewer.layout.stackAllByColumns(3);
      });

      elCloseAll.click(function() {
        $.viewer.layout.closeAll();
      });
    }

  };

}(Mirador));