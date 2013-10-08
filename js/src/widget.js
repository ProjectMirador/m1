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

        // Settings that will execute when resized.
        .parent().resizable({
          containment: this.containerCls // Constrains the resizing to the div.
        })
        // Settings that execute when the dialog is dragged. If parent isn't used the text content will have dragging enabled.
        .draggable({
          containment: this.containerCls // The element the dialog is constrained to.
        });

      this.element.dialog('option', 'id', this.id);

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
      switch (this.type) {
        case 'imageView':
          this.renderImageView();
        break;

        case 'scrollView':
          this.renderScrollView();
        break;

        case 'thumbnailsView':
          this.renderThumbnailsView();
        break;

        case 'metadataView':
          this.renderMetadataView();
        break;

        default:
          break;
      }
    },


    renderImageView: function() {
      this.viewObj = new $.ImageView({
        imagesList: this.imagesList,
        manifestId: this.manifestId,
        element:    this.content.element,
        openAt:     this.openAt,
        parent:     this
      });

      this.viewObj.render();
    },


    renderScrollView: function() {
      this.viewObj = new $.ScrollView({
        imagesList: this.imagesList,
        manifestId: this.manifestId,
        element:    this.content.element,
        parent:     this
      });

      this.viewObj.render();
    },


    renderThumbnailsView: function() {
      this.viewObj = new $.ThumbnailsView({
        imagesList: this.imagesList,
        manifestId: this.manifestId,
        element:    this.content.element,
        parent:     this
      });

      this.viewObj.render();
    },


    renderMetadataView: function() {
      this.viewObj = new $.MetadataView({
        manifestId: this.manifestId,
        element:    this.content.element,
        parent:     this
      });

      this.viewObj.render();
    },


    setPosition: function(x, y) {
      this.element.dialog('option', 'position', [x, y]);
    },


    setSize: function(w, h) {
      var widget = this;
      this.element.dialog('option', 'width', w);
      this.element.dialog('option', 'height', h);

      this.element.trigger('dialogresize');
      this.element.trigger('dialogresizestop');
      // setTimeout(function(){if (widget.type === 'imageView') {console.log("type detected");widget.viewObj.osd.viewport.goHome();}},100);
    },


    setPositionAndSize: function(x, y, w, h) {
      this.setPosition(x, y);
      this.setSize(w, h);
    },


    moveToTop: function() {
      this.element.dialog('moveToTop');
    },


    getHeight: function() {
      return this.element.dialog('option', 'height');
    },


    getWidth: function() {
      return this.element.dialog('option', 'width');
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
        }
      });
    },


    getTitle: function() {
      return $.getViewLabel(this.type) + ' : ' + $.getTitlePrefix(this.metadataDetails);
      // return $.getTitlePrefix(this.metadataDetails);
    }

  };

}(Mirador));
