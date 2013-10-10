(function($) {

  $.Layout = function(options) {

    jQuery.extend(true, this, {
      rowPadding: 10,
      columnPadding: 10,
      cascade: {
        x: 10,
        y: 40,
        offset: 25
      }
    }, options);

  };

  $.Layout.prototype = {

    cascadeAll: function() {
      var _this = this,
          offset = 0,
          x, y,
          canvas = {};

      canvas.top  = $.viewer.mainMenu.element.outerHeight(true);
      canvas.left = this.columnPadding;

      jQuery.each($.viewer.widgets, function(index, widget) {
        x = _this.cascade.x + offset;
        y = _this.cascade.y + offset;

        widget.setPosition(x, y);
        widget.moveToTop();

        offset += _this.cascade.offset;
      });
    },


    tileAllVertically: function() {
      this.stackAllByColumns(1);
    },


    tileAllHorizontally: function() {
      this.stackAllByColumns($.viewer.widgets.length);
    },


    stackAllByColumns: function(columns) {
      var _this = this,
          rows,
          widgetWidth,
          widgetHeight,
          canvas = {},
          columnIndex,
          rowIndex = 0;

      canvas.top    = $.viewer.mainMenu.element.outerHeight(true) + this.rowPadding;
      canvas.width  = $.viewer.canvas.width() - this.columnPadding;
      canvas.height = $.viewer.canvas.height() - this.rowPadding;

      rows = Math.ceil($.viewer.widgets.length / columns);

      widgetWidth  = Math.floor(canvas.width / columns) - this.columnPadding;
      widgetHeight = Math.ceil(canvas.height / rows) - this.rowPadding;

      jQuery.each($.viewer.widgets, function(index, widget) {
        var x = 0, y = 0;

        columnIndex = index % columns;

        if (columnIndex === 0 && index !== 0) {
          ++rowIndex;
        }

        x = _this.columnPadding + (columnIndex * (_this.columnPadding + widgetWidth));
        y = canvas.top + (rowIndex * (_this.rowPadding + widgetHeight));

        widget.setPositionAndSize(x, y, widgetWidth, widgetHeight);
      });

    },


    closeAll: function() {
      jQuery.each($.viewer.widgets.slice(), function(index, widget) {
        if (widget) {
          widget.close();
        }
      });
    },


    applyLayout: function(layout) {

      switch (layout) {
        case 'cascade':
          this.cascadeAll();
          break;

      case 'tileAllVertically':
          this.tileAllVertically();
          break;

      case 'tileAllHorizontally':
          this.tileAllHorizontally();
          break;

      case 'stackAll2Columns':
          this.stackAllByColumns(2);
          break;

      case 'stackAll3Columns':
          this.stackAllByColumns(3);
          break;

       default:
        this.cascadeAll();
      }
    }

  };



}(Mirador));
