(function($) {

  $.MainMenuWindowOptions = function(options) {

    jQuery.extend(true, this, {
      menuContent:           null,
      mainMenuCls:          'mirador-main-menu',
      windowOptionsMenuCls: 'window-options-menu',
      parent:               null
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

      this.element
        .menu()
        .appendTo(this.parent.element)
        .dialog({
          dialogClass: 'mirador-viewer-dialog-no-title-bar'
        });

      this.element
        .menu('blur')
        .dialog('option', 'position', {
          my: "center top",
          at: "right bottom+10",
          of: jQuery('.' + this.mainMenuCls + ' .window-options')
        });
    },


    destroy: function() {
      this.element.dialog('destroy');
      this.element.remove();
      this.parent.windowOptionsMenu = null;
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
        _this.destroy();
      });

      elTileAllVertically.click(function() {
        $.viewer.layout.tileAllVertically();
        _this.destroy();
      });

      elTileAllHorizontally.click(function() {
        $.viewer.layout.tileAllHorizontally();
        _this.destroy();
      });

      elStackAll2Cols.click(function() {
        $.viewer.layout.stackAllByColumns(2);
        _this.destroy();
      });

      elStackAll3Cols.click(function() {
        $.viewer.layout.stackAllByColumns(3);
        _this.destroy();
      });

      elCloseAll.click(function() {
        $.viewer.layout.closeAll();
        _this.destroy();
      });
    }

  };

}(Mirador));