(function($) {

  $.Widget = function(options) {

    jQuery.extend(true, this, {
      appendTo:             'body',
      autoOpen:             true,
      containerCls:         '.mirador-viewer',
      closeOnEscape:        false,
      content:              null,
      draggable:            true,
      element:              null,
      height:               $.DEFAULT_SETTINGS.widget.height,
      id:                   null,
      metadataDetails:      null,
      openAt:               null,
      showStatusbar:        true,
      showToolbar:          true,
      statusbar:            null,
      toolbar:              null,
      type:                 'thumbnailsView',
      viewObj:              null,
      widgetCls:            'mirador-widget',
      widgetContentCls:     'mirador-widget-content',
      widgetStatusbarCls:   'mirador-widget-statusbar',
      widgetToolbarCls:     'mirador-widget-toolbar',
      width:                $.DEFAULT_SETTINGS.widget.width,

      position: {
        'my': 'left top',
        'at': 'left+50 top+50',
        'of': '.mirador-viewer',
        'collision' : 'fit',
        'within' : '.mirador-viewer'
      },

      dialogOptions: {
        'resize': function(event, ui) {},
        'resizeStop': function(event, ui) {},
        'close': function(event, ui) {}
      },

      dialogExtendOptions: {
        'maximizable': true,
        'collapsable': true,
        'icons': {
          'maximize': 'ui-icon-arrow-4-diag',
          'collapse': 'ui-icon-minus'
        },
        // limit maximized widget height to not hide main menu and status bar
        'mainMenuHeight': $.viewer.mainMenu.element.outerHeight(true),
        'statusBarHeight': $.viewer.statusBar.element.outerHeight(true)
      }

    }, options);

    this.element          = this.element || jQuery('<div/>');
    this.metadataDetails  = $.getMetadataByManifestId(this.manifestId).details;
    this.imagesList       = $.getImagesListByManifestId(this.manifestId);

    this.create();
    this.attachEvents();
  };


  $.Widget.prototype = {

    create: function() {

      this.dialogExtendOptions.containerCls  = this.containerCls;

      this.element
        .addClass(this.widgetCls)
        .attr('id', this.id)
        .attr('title', this.getTitle())
        .appendTo(this.appendTo)
        .dialog(this)
        .dialog(this.dialogOptions)
        .dialogExtend(this.dialogExtendOptions)
        .dialog('option', 'id', this.id)

        // Settings that will execute when resized.
        .parent().resizable({
          containment: this.containerCls // Constrains the resizing to the div.
        })
        // Settings that execute when the dialog is dragged. If parent isn't used the text content will have dragging enabled.
        .draggable({
          containment: this.containerCls // The element the dialog is constrained to.
        });

      // this.element.dialog('option', 'id', this.id);

      this.toolbar = new $.WidgetToolbar({
        parent: this,
        showToolbar: this.showToolbar
      });

      this.statusbar = new $.WidgetStatusBar({
        parent: this,
        showStatusbar: this.showStatusbar
      });

      this.content = new $.WidgetContent({
        parent: this
      });

      this.render();
    },


    render: function() {
      var className = this.type[0].toUpperCase() + this.type.substring(1, 1000);
      this.viewObj = new $[className]({
        // standard initialization, not everything will be populated
        imagesList: this.imagesList,
        manifestId: this.manifestId,
        element: this.content.element,
        imageId: this.imageId,
        openAt: this.openAt,
        parent: this
      });
      this.viewObj.render();
    },

    setPosition: function(x, y) {
      x = Math.round(x);
      y = Math.round(y);

      this.element.dialog('option', 'position', [x, y]);
    },


    setWidth: function(w) {
      this.element.dialog('option', 'width', Math.round(w));
    },


    setHeight: function(h) {
      this.element.dialog('option', 'height', Math.round(h));
    },


    setSize: function(w, h) {
      this.setWidth(Math.round(w));
      this.setHeight(Math.round(h));

      this.element.trigger('dialogresize');
      this.element.trigger('dialogresizestop');
    },


    setPositionAndSize: function(x, y, w, h) {
      this.setPosition(x, y);
      this.setSize(w, h);
    },


    getPosition: function() {
      return this.element.dialog('option', 'position');
    },


    getHeight: function() {
      return this.element.dialog('option', 'height');
    },


    getWidth: function() {
      return this.element.dialog('option', 'width');
    },


    moveToTop: function() {
      this.element.dialog('moveToTop');
    },


    close: function() {
      this.element.dialog('destroy');
      this.element.remove();

      $.viewer.removeWidget(this.id);
    },


    attachEvents: function() {
      var _this = this;

      this.element.dialog({
        close: function(event, ui) {
          _this.close();
        },

        drag: function(event, ui) {
          $.viewer.saveCurrentLayout(null);
        },

        resize: function(event, ui) {
          $.viewer.saveCurrentLayout(null);
        }
      });
    },


    getTitle: function() {
      return $.getViewLabel(this.type) + ' : ' + $.getTitlePrefix(this.metadataDetails);
      // return $.getTitlePrefix(this.metadataDetails);
    }

  };

}(Mirador));
