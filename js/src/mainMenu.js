(function($) {

  $.MainMenu = function(options) {

    jQuery.extend(true, this, {
      element:                  null,
      mainMenuHeight:           $.DEFAULT_SETTINGS.mainMenu.height,
      mainMenuWidth:            $.DEFAULT_SETTINGS.mainMenu.width,
      windowOptionsMenu:        null,
      loadWindow:               null,
      mainMenuBarCls:           'mirador-main-menu-bar',
      mainMenuCls:              'mirador-main-menu',
      windowOptionsMenuCls:     'window-options-menu',
      collectionsListingCls:    'listing-collections'
    }, options);

    this.element  = this.element || jQuery('<div/>');

    this.render();
    this.attachMainMenuEvents();
  };


  $.MainMenu.prototype = {

    render: function() {
      this.element
        .addClass(this.mainMenuBarCls)
        .height(this.mainMenuHeight)
        .width(this.mainMenuWidth)
        .appendTo(this.appendTo);

      this.element.append($.Templates.mainMenu.menuItems({
        mainMenuCls: this.mainMenuCls
      }));

      $.loadWindowContent = "Loading...";
    },


    attachMainMenuEvents: function() {
      var elMainMenu = this.element.find('.' + this.mainMenuCls);
          selectorBookmarkWorkspace = '.bookmark-workspace',
          selectorLoadWindow        = '.load-window',
          selectorWindowOptions     = '.window-options',
          selectorWindowOptionsMenu = '.' + this.mainMenuBarCls + ' .' + this.windowOptionsMenuCls,
          _this = this;

      // menu 'Bookmark Workspace'
      elMainMenu.on('click', selectorBookmarkWorkspace, function() {
      });

      // menu 'Load Window'
      elMainMenu.on('click', selectorLoadWindow, function() {
        if (_this.windowOptionsMenu) {
          _this.windowOptionsMenu.destroy();
        }

        if (!_this.loadWindow) {
          _this.loadWindow = new $.MainMenuLoadWindow({
            collectionsListingCls:  _this.collectionsListingCls,
            loadWindowContent:      _this.loadWindowContent,
            mainMenuCls:            _this.mainMenuCls,
            parent:                 _this
          });
        } else {
          _this.loadWindow.destroy();
        }

        event.stopPropagation();
      });

      // Window Options
      elMainMenu.on('click', selectorWindowOptions, function(event) {
        if (_this.loadWindow) {
          _this.loadWindow.destroy();
        }

        if (!_this.windowOptionsMenu) {
          _this.windowOptionsMenu = new $.MainMenuWindowOptions({
            windowOptionsMenuCls: _this.windowOptionsMenuCls,
            mainMenuCls:          _this.mainMenuCls,
            parent:               _this
          });
        } else {
          _this.windowOptionsMenu.destroy();
        }

        event.stopPropagation();
      });

      jQuery(document).on('mousedown', function(event) {
        // TODO : Close opened menus/windows
      });
    }

  };

}(Mirador));