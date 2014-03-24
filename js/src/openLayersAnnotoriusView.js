(function($) {

  $.OpenLayersAnnotoriusView = function(options) {

    jQuery.extend(this, {
      currentImg:       null,
      currentImgIndex:  null,
      element:          null,
      imageId:          null,
      mapId:            null,
      parent:           null,
      annoToolbarCls:   'mirador-openlayers-anno-view-toolbar',
      olLayer:          {},
      olMap:            null,
      bestFitSize:      {},
      dialogOffset:     {},
      zoomLevelCutOff:  750
    }, options);

    anno.reset();

    this.mapId = 'map-' + $.genUUID();

    if (this.imageId !== null) {
      this.currentImgIndex = this.getImageIndexById(this.imageId);
    }

    this.currentImg = this.imagesList[this.currentImgIndex];

    annotorious.plugin.Parse.prototype.addSrc(this.currentImg.canvasId);

    this.calculateDimensionsForOlBaseLayer();
  };


  $.OpenLayersAnnotoriusView.prototype = {

    render: function() {
      this.calculateDialogOffsets();
      this.calculateBestFitSize();

      this.resize();

      this.element
        .addClass('ol-a-view-content')
        .append($.Templates.openLayersAnnotoriusView.content({
          mapId: this.mapId
        }));

      annotorious.plugin.Parse.prototype.loadAnnotations();

      this.loadOpenLayers();
      this.addToolbarAnno();
      this.attachEvents();
    },


    loadOpenLayers: function() {
      var baseLayer,
          options = {
            numZoomLevels: this.calculateNumOfZoomLevels(),
            units: "pixels",
            theme: "css/openlayers.css"
          };

      this.olMap = new OpenLayers.Map(this.mapId, options);

      baseLayer = new OpenLayers.Layer.Image(
        this.currentImg.title,
        $.Iiif.getUriWithHeight(this.currentImg.imageUrl, this.olLayer.height),
        new OpenLayers.Bounds(0, 0, this.olLayer.width, this.olLayer.height),
        new OpenLayers.Size(this.bestFitSize.width, this.bestFitSize.height)
      );

      this.olMap.addLayer(baseLayer);
      this.olMap.zoomToMaxExtent();

      anno.makeAnnotatable(this.olMap);
    },


    resize: function() {
      var offset = 20; // pixels

      this.parent.setSize($.viewer.canvas.width() - offset, $.viewer.canvas.height() - offset);

      this.parent.element
        .dialog('option', 'position', {
          my: 'center', at: 'center', of: $.viewer.canvas
        })
        .dialog('option', 'modal', true)
        .dialog('option', 'resizable', false)
        .dialog('option', 'draggable', false)
        .dialog('close')
        .dialog('open');
    },


    next: function() {
      var next = this.currentImgIndex + 1;

      if (next >= this.imagesList.length) {
        next = this.currentImgIndex;
      }

      $.viewer.loadView("openLayersAnnotoriusView", this.manifestId, this.imagesList[next].id);
    },


    prev: function() {
      var prev = this.currentImgIndex - 1;

      if (prev <= 0) {
        prev = 0;
      }

      $.viewer.loadView("openLayersAnnotoriusView", this.manifestId, this.imagesList[prev].id);
    },


    addToolbarAnno: function() {
      this.parent.toolbar.append($.Templates.openLayersAnnotoriusView.annoToolbar({
        annoToolbarCls: this.annoToolbarCls
      }));
    },


    attachEvents: function() {
      var annoToolbar       = this.parent.toolbar.element.find('.' + this.annoToolbarCls),
          selectorAddAnno   = '.map-annotate-button',
          selectorNext      = '.mirador-icon-next',
          selectorPrevious  = '.mirador-icon-previous',
          _this = this;

      annoToolbar.on('click', selectorAddAnno, function() {
        anno.activateSelector(function() {});
      });

      annoToolbar.on('click', selectorPrevious, function() {
        _this.prev();
      });

      annoToolbar.on('click', selectorNext, function() {
        _this.next();
      });

    },


    calculateNumOfZoomLevels: function() {
      var longestSide = Math.max(this.currentImg.width, this.currentImg.height);
      return Math.round(longestSide / this.zoomLevelCutOff);
    },


    calculateDimensionsForOlBaseLayer: function() {
      // var imgWidth = this.currentImg.width,
      //     imgHeight = this.currentImg.height,
      //     aspectRatio = this.currentImg.width / this.currentImg.height;

      // if (aspectRatio < 1) {
      //   this.olLayer.height = Math.min(imgHeight, $.DEFAULT_SETTINGS.openLayersAnnotoriusView.maxSize);
      //   this.olLayer.width = parseInt(aspectRatio * this.olLayer.height, 10);

      // } else {
      //   this.olLayer.width = Math.min(imgWidth, $.DEFAULT_SETTINGS.openLayersAnnotoriusView.maxSize);
      //   this.olLayer.height = parseInt(this.olLayer.width / aspectRatio, 10);
      // }

      this.olLayer.width = this.currentImg.width;
      this.olLayer.height = this.currentImg.height;
    },


    calculateBestFitSize: function() {
      var viewerWidth = $.viewer.canvas.width() - this.dialogOffset.width,
          viewerHeight = $.viewer.canvas.height() - this.dialogOffset.height,
          bestFitWidth = this.olLayer.width,
          bestFitHeight = this.olLayer.height;

      while (bestFitHeight > viewerHeight || bestFitWidth > viewerWidth) {
        bestFitWidth /= 2;
        bestFitHeight /= 2;
      }

      this.bestFitSize = {
        width: bestFitWidth,
        height: bestFitHeight
      };
    },


    calculateDialogOffsets: function() {
      this.dialogOffset.width = this.parent.getWidth() - this.parent.element.width();
      this.dialogOffset.height = this.parent.getHeight() - this.parent.element.height();
    },


    getImageIndexById: function(id) {
      var _this = this,
          imgIndex = 0;

      jQuery.each(this.imagesList, function(index, img) {
        if ($.trimString(img.id) === $.trimString(id)) {
          imgIndex = index;
        }
      });

      return imgIndex;
    }


  };


}(Mirador));