/* 
OpenSeaDragonAnnotation v1.0 (http://)
Copyright (C) 2014 CHS (Harvard University), Daniel Cebrián Robles and Phil Desenne
License: https://github.com/CtrHellenicStudies/OpenSeaDragonAnnotation/blob/master/License.rst

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
*/
(function($) {
	$.Viewer.prototype.annotation = function(options) {
		//-- wait for plugins --//
		var wrapper = jQuery('.annotator-wrapper').parent()[0],
			annotator = jQuery.data(wrapper, 'annotator'),
			self = this,
			isOpenViewer = false;
		
		this.addHandler("open", function() {
			isOpenViewer = true;
			if (typeof self.annotationInstance!='undefined')
				self.annotationInstance.refreshDisplay();
		});
		
		
		annotator
			//-- Finished the Annotator DOM
			.subscribe("annotationsLoaded", function (annotations){
				console.log("annotationsLoaded");
				if (!self.annotationInstance) {
					self.annotationInstance = new $._annotation({
						viewer: self,
						annotator: annotator,
					});
					annotator.osda = self.annotationInstance;
					//Wait until viewer is opened
					function refreshDisplay(){
						if(!isOpenViewer){
							setTimeout(refreshDisplay,200);
						}else{
							self.annotationInstance.refreshDisplay();
						}
					}
					refreshDisplay();
				} else {
					self.annotationInstance.refreshDisplay();
				}
			});
	};
	// INIT annotation
	$._annotation = function(options) {
		//options
		options = options || {};
		if (!options.viewer) {
            throw new Error("A viewer must be specified.");
        }
        
        //variables
        this.viewer = options.viewer;
        this.annotator = options.annotator;
        this.options = options;
        this.isAnnotating = false; //If the user is annotating
        this.isDrawing = false; //if the user is drawing something
        
	//Init
	this.init();
	};
	
	//-- Methods
	$._annotation.prototype = {
		init: function(){
			var viewer = this.viewer;
			
			//create Buttons
		    this._createNewButton();
		    
			/* canvas Events */
			//- Bind canvas functions
			var onCanvasMouseDown = this.__bind(this._onCanvasMouseDown,this),
				onCanvasMouseMove = this.__bind(this._onCanvasMouseMove,this),
				onDocumentMouseUp = this.__bind(this._onDocumentMouseUp,this);
				
			//- Add canvas events
			$.addEvent(viewer.canvas, "mousedown", onCanvasMouseDown, true);
			$.addEvent(viewer.canvas, "mousemove", onCanvasMouseMove, true);
			$.addEvent(document, "mouseup", onDocumentMouseUp, true);
			
			//Viewer events
			var self = this;
		},
		newAnnotation:function(){
			console.log("new annotation");
			var annotator = this.annotator;
			
			//This variable is to say the editor that we want create an image annotation
			annotator.editor.OpenSeaDragon = this.viewer.id;
		
			annotator.adder.show();
			
			this._setOverShape(annotator.adder);
			
			//Open a new annotator dialog
			annotator.onAdderClick();
		},
		editAnnotation: function(annotation,editor){
			//This will be usefull when we are going to edit an annotation.
			if (this._isOpenSeaDragon(annotation)){
				//this.hideDisplay();
				var editor = editor || this.annotator.editor;
			
				//set the editor over the range slider
				this._setOverShape(editor.element);
				editor.checkOrientation();
			
				//This variable is to say the editor that we want create an image annotation
				editor.OpenSeaDragon = this.viewer.id;
			}
		},
		refreshDisplay: function(){
			var allannotations = this.annotator.plugins['Store'].annotations;
		
			//Sort by date the Array
			this._sortByDate(allannotations);
		
			//remove all the overlays
			this.viewer.drawer.clearOverlays();
		
			for (var item in allannotations) {
				var an = allannotations[item];
			
				//check if the annotation is an OpenSeaDragon annotation
				if (this._isOpenSeaDragon(an))
					this.drawRect(an);
			};
		},
		modeAnnotation:function(e){
			this._reset();
			var viewer = this.viewer;
			if (!this.isAnnotating){
				e.eventSource.imgGroup.src =  this.resolveUrl( viewer.prefixUrl,"newan_hover.png");
				e.eventSource.imgRest.src =  this.resolveUrl( viewer.prefixUrl,"newan_hover.png");
				e.eventSource.imgHover.src = this.resolveUrl( viewer.prefixUrl,"newan_grouphover.png");
			}else{
				e.eventSource.imgGroup.src =  this.resolveUrl( viewer.prefixUrl,"newan_grouphover.png");
				e.eventSource.imgRest.src =  this.resolveUrl( viewer.prefixUrl,"newan_rest.png");
				e.eventSource.imgHover.src =  this.resolveUrl( viewer.prefixUrl,"newan_hover.png");
			}
			this.isAnnotating = !this.isAnnotating?true:false;
		},
		drawRect:function(an){
			if (typeof an.rangePosition!='undefined'){
				var span = document.createElement('span'),
				    rectPosition = an.rangePosition;
				//Span
				span.className = "annotator-hl";
				span.style.border = '1px solid rgba(0,0,0,0.5)';
				var onAnnotationMouseMove = this.__bind(this._onAnnotationMouseMove,this),
					onAnnotationClick = this.__bind(this._onAnnotationClick,this);
				$.addEvent(span, "mousemove", onAnnotationMouseMove, true);
				$.addEvent(span, "click", onAnnotationClick, true);
				
				//Set the object in the div
				jQuery.data(span, 'annotation', an);
				//Add the highlights to the annotation
				an.highlights = jQuery(span);
			
				var olRect = new OpenSeadragon.Rect(rectPosition.left, rectPosition.top, rectPosition.width, rectPosition.height);
				return this.viewer.drawer.addOverlay({
					element: span,
					location: olRect,
					placement: OpenSeadragon.OverlayPlacement.TOP_LEFT
				});
			}
			return false;
		},
		//Change object(this.rectPosition)the rectangle Position using div element(this.rect)
		setRectPosition:function(){
			var left = parseInt(this.rect.style.left),
				top = parseInt(this.rect.style.top),
				width = parseInt(this.rect.style.left)+parseInt(this.rect.style.width),
				height = parseInt(this.rect.style.top)+parseInt(this.rect.style.height),
				startPoint = new $.Point(left,top),
				endPoint = new $.Point(width,height);
			this.rectPosition = {left:this._physicalToLogicalXY(startPoint).x,
				top:this._physicalToLogicalXY(startPoint).y,
				width:this._physicalToLogicalXY(endPoint).x-this._physicalToLogicalXY(startPoint).x,
				height:this._physicalToLogicalXY(endPoint).y-this._physicalToLogicalXY(startPoint).y
			};
		},
		/* Handlers */
		_onCanvasMouseDown: function(event,seft) {
			if (this.isAnnotating){
				var viewer = this.viewer;
				event.preventDefault();
				
				//reset the display
				this._reset();
				
				//set mode drawing
				this.isDrawing = true;
				
				//Create rect element
				var mouse  = $.getMousePosition( event ),
					elementPosition = $.getElementPosition(viewer.canvas),
					position = mouse.minus( elementPosition );
				viewer.innerTracker.setTracking(false);
				this.rect = document.createElement('div');
				this.rect.style.background = 'rgba(0,0,0,0.25)';
				this.rect.style.border = '1px solid rgba(0,0,0,0.5)';
				this.rect.style.position = 'absolute';
				this.rect.className = 'DrawingRect';
				//set the initial position
				this.rect.style.top = position.y+"px";
				this.rect.style.left = position.x+"px";
				this.rect.style.width = "1px";
				this.rect.style.height = "1px";
				
				//save the start Position
				this.startPosition = position;
				//save rectPosition as initial rectangle parameter to Draw in the canvas
				this.setRectPosition();
				
				//append Child to the canvas
				viewer.canvas.appendChild(this.rect);
			}
		},
		_onCanvasMouseMove: function(event) {
			if (this.isAnnotating && this.isDrawing){ 
				var viewer = this.viewer;
				
				//Calculate the new end position
				var mouse  = $.getMousePosition( event ),
					elementPosition = $.getElementPosition(viewer.canvas),
					endPosition = mouse.minus( elementPosition );
				//retrieve start position	
				var startPosition = this.startPosition;
				
				var newWidth= endPosition.x-startPosition.x,
					newHeight =endPosition.y-startPosition.y;
				
				//Set new position
				this.rect.style.width = (newWidth<0) ? (-1*newWidth) +'px' : newWidth +'px';
				this.rect.style.left = (newWidth<0) ? (startPosition.x + newWidth) +'px' : startPosition.x +'px';
				this.rect.style.height = (newHeight<0) ? (-1*newHeight) +'px' : newHeight +'px';
				this.rect.style.top = (newHeight<0) ? (startPosition.y + newHeight) +'px' : startPosition.y +'px';
				
				//Modify the rectPosition with the new this.rect values
				this.setRectPosition();
				
				//Show adder and hide editor
				this.annotator.editor.element[0].style.display = 'none';
				this._setOverShape(this.annotator.adder);
			}
		},
		_onDocumentMouseUp: function() {
			if (this.isAnnotating && this.isDrawing){
				var viewer = this.viewer;
				
				viewer.innerTracker.setTracking(true);
				this.isDrawing = false;
				
				//Set the new position for the rectangle
				this.setRectPosition();
				
				//Open Annotator editor
				this.newAnnotation();
				
				//Hide adder and show editor
				this.annotator.editor.element[0].style.display = 'block';
				this._setOverShape(this.annotator.editor.element);
				this.annotator.editor.checkOrientation();
			}
		},
		_onAnnotationMouseMove: function(event){
			var annotator = this.annotator;
			var elem = jQuery(event.target).parents('.annotator-hl').andSelf();
			//if there is a opened annotation then show the new annotation mouse over
			if (typeof annotator!='undefined' && elem.hasClass("annotator-hl") && !this.isDrawing){
				//hide the last open viewer
				annotator.viewer.hide();
				//get the annotation over the mouse
				var annotations = jQuery(event.target.parentNode).find('.annotator-hl').map(function() {
					var self = jQuery(this),
						offset = self.offset(),
						l = offset.left,
						t = offset.top,
						h = self.height(),
						w = self.width(),
						x = $.getMousePosition(event).x,
						y = $.getMousePosition(event).y;

					var maxx = l + w,
						maxy = t + h;
					this.style.background = (y <= maxy && y >= t) && (x <= maxx && x >= l)?
						'rgba(12, 150, 0, 0.3)':'rgba(255, 255, 10, 0.3)';
					return (y <= maxy && y >= t) && (x <= maxx && x >= l)? jQuery(this).data("annotation") : null;
				});
				//show the annotation in the viewer
				var mousePosition = {
					top:$.getMousePosition(event).y,
					left:$.getMousePosition(event).x,
				};
				if (annotations.length>0) annotator.showViewer(jQuery.makeArray(annotations), mousePosition);
			}
		},
		_onAnnotationClick: function(event){
			var an = jQuery.data(event.target, 'annotation'),
				bounds = typeof an.bounds!='undefined'?an.bounds:{},
				currentBounds = this.viewer.drawer.viewport.getBounds();
			if (typeof bounds.x!='undefined') currentBounds.x = bounds.x;
			if (typeof bounds.y!='undefined') currentBounds.y = bounds.y;
			if (typeof bounds.width!='undefined') currentBounds.width = bounds.width;
			if (typeof bounds.height!='undefined') currentBounds.height = bounds.height;
			//change the zoom to the saved
			this.viewer.drawer.viewport.fitBounds(currentBounds);
		},
		_onAnnotationMouseOut: function(event){
			var annotator = this.annotator;
			var elem = jQuery(event.target).parents('.annotator-hl').andSelf();
			//if there is a opened annotation then show the new annotation mouse over
			if (typeof annotator!='undefined' && elem.hasClass("annotator-hl") && !this.isDrawing){
				jQuery(event.target.parentNode).find('.annotator-hl').map(function() {
					return this.style.background = 'rgba(255, 255, 10, 0.3)';
				});
			}
		},
		/* Utilities */
		_sortByDate: function (annotations,type){
			var type = type || 'asc'; //asc => The value [0] will be the most recent date
			annotations.sort(function(a,b){
				a = new Date(typeof a.updated!='undefined'?createDateFromISO8601(a.updated):'');
				b = new Date(typeof b.updated!='undefined'?createDateFromISO8601(b.updated):'');
				if (type == 'asc')
					return b<a?-1:b>a?1:0;
				else
					return a<b?-1:a>b?1:0;
			});
		},
		_createNewButton:function(){
			var viewer = this.viewer,
				onFocusHandler          = $.delegate( this, onFocus ),
				onBlurHandler           = $.delegate( this, onBlur ),
				onModeAnnotationHandler  = $.delegate( this, this.modeAnnotation );
				/* Buttons */
				var viewer = this.viewer;
				var self = this;
				viewer.modeAnnotation = new $.Button({
					element:    viewer.modeAnnotation ? $.getElement( viewer.modeAnnotation ) : null,
					clickTimeThreshold: viewer.clickTimeThreshold,
					clickDistThreshold: viewer.clickDistThreshold,
					tooltip:    "New Annotation",
					srcRest:    self.resolveUrl( viewer.prefixUrl,"newan_rest.png"),
					srcGroup:  	self.resolveUrl( viewer.prefixUrl,"newan_grouphover.png"),
					srcHover:   self.resolveUrl( viewer.prefixUrl,"newan_hover.png"),
					srcDown:    self.resolveUrl( viewer.prefixUrl,"newan_pressed.png"),
					onRelease:  onModeAnnotationHandler,
					onFocus:    onFocusHandler,
					onBlur:     onBlurHandler
				    });
		    
		    //- Wrapper Annotation Menu
			viewer.wrapperAnnotation = new $.ButtonGroup({
		        buttons: [
		            viewer.modeAnnotation,
		        ],
		        clickTimeThreshold: viewer.clickTimeThreshold,
		        clickDistThreshold: viewer.clickDistThreshold
		    });
		    
		    /* Set elements to the control menu */
		    viewer.annotatorControl  = viewer.wrapperAnnotation.element;
		    if( viewer.toolbar ){
		        viewer.toolbar.addControl(
		            viewer.annotatorControl,
		            {anchor: $.ControlAnchor.BOTTOM_RIGHT}
		        );
		    }else{
		        viewer.addControl(
		            viewer.annotatorControl,
		            {anchor: $.ControlAnchor.TOP_LEFT}
		        );
		    }
		},
		_reset: function(){
			//Find and remove DrawingRect. This is the previous rectangle
			this._removeElemsByClass('DrawingRect',this.viewer.canvas);
			//Show adder and hide editor
			this.annotator.editor.element[0].style.display = 'none';
		},
		__bind: function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
		// Remove all the elements with a given name inside "inElement"
		_removeElemsByClass: function(className,inElement){
			var className = className || '',
				inElement = inElement || {};
			divs = inElement.getElementsByClassName(className);
			for(var i = 0; i < divs.length; i++) {
				divs[i].remove();
			}
		},
		//Detect if the annotation is an image annotation
		_isOpenSeaDragon: function (an){
			var annotator = this.annotator,
				rp = an.rangePosition,
				isOpenSeaDragon = (typeof annotator.osda != 'undefined'),
				isContainer = (typeof an.target!='undefined' && an.target.container==this.viewer.id ),
				isImage = (typeof an.media!='undefined' && an.media=='image'),
				isRP = (typeof rp!='undefined'),
				isSource = false;
				//Save source url
				var source = this.viewer.source,
					tilesUrl = typeof source.tilesUrl!='undefined'?source.tilesUrl:'';
					functionUrl = typeof source.getTileUrl!='undefined'?source.getTileUrl:'',
					compareUrl = tilesUrl!=''?tilesUrl:(''+functionUrl).replace(/\s+/g, ' ');
				if(isContainer) isSource = (an.target.src == compareUrl);
			return (isOpenSeaDragon && isContainer && isImage && isRP && isSource);
		},
		/* Annotator Utilities */
		_setOverShape: function(elem){
			//Calculate Point absolute positions 
			var rectPosition = this.rectPosition || {},
				startPoint = this._logicalToPhysicalXY(new $.Point(rectPosition.left,rectPosition.top)),
				endPoint = this._logicalToPhysicalXY(new $.Point(rectPosition.left+rectPosition.width,rectPosition.top+rectPosition.height));
			
			//Calculate Point absolute positions	
			var wrapper = jQuery('.annotator-wrapper')[0],
				positionAnnotator = $.getElementPosition(wrapper),
				positionCanvas = $.getElementPosition(this.viewer.canvas),
				positionAdder = {};
			
			//Fix with positionCanvas
			startPoint = startPoint.plus(positionCanvas);
			endPoint = endPoint.plus(positionCanvas);
			
			elem[0].style.display = 'block'; //Show the adder
		
			positionAdder.left = (startPoint.x - positionAnnotator.x) + (endPoint.x - startPoint.x) / 2;
			positionAdder.top =  (startPoint.y - positionAnnotator.y) + (endPoint.y - startPoint.y) / 2; //It is not necessary fix with - positionAnnotator.y
			elem.css(positionAdder);
		},
		resolveUrl: function( prefix, url ) {
			return prefix ? prefix + url : url;
		},
		/* Canvas Utilities */
		// return a point with the values in percentage related to the Image
		// point is an object $.Point with the value of the canvas relative coordenates
		_physicalToLogicalXY: function(point){
			var point = typeof point!='undefined'?point:{},
				boundX = this.viewer.viewport.getBounds(true).x,
				boundY = this.viewer.viewport.getBounds(true).y,
				boundWidth = this.viewer.viewport.getBounds(true).width,
				boundHeight = this.viewer.viewport.getBounds(true).height,
				containerSizeX = this.viewer.viewport.getContainerSize().x,
				containerSizeY = this.viewer.viewport.getContainerSize().y,
				x = typeof point.x!='undefined'?point.x:0,
				y = typeof point.y!='undefined'?point.y:0;
			x = boundX + ((x / containerSizeX) * boundWidth);
			y = boundY + ((y / containerSizeY) * boundHeight);
			return new $.Point(x,y);
		},
		// return a point with the values in pixels related to the canvas element
		// point is an object $.Point with the value of the Image relative percentage
		_logicalToPhysicalXY: function(point){
			var point = typeof point!='undefined'?point:{},
				boundX = this.viewer.viewport.getBounds(true).x,
				boundY = this.viewer.viewport.getBounds(true).y,
				boundWidth = this.viewer.viewport.getBounds(true).width,
				boundHeight = this.viewer.viewport.getBounds(true).height,
				containerSizeX = this.viewer.viewport.getContainerSize().x,
				containerSizeY = this.viewer.viewport.getContainerSize().y,
				x = typeof point.x!='undefined'?point.x:0,
				y = typeof point.y!='undefined'?point.y:0;
			x = (x - boundX) * containerSizeX / boundWidth;
			y = (y - boundY) * containerSizeY / boundHeight;
			return new $.Point(x,y);
		},
	}
	
	/* General functions */
	//initiates an animation to hide the controls
	function beginControlsAutoHide( viewer ) {
		if ( !viewer.autoHideControls ) {
		    return;
		}
		viewer.controlsShouldFade = true;
		viewer.controlsFadeBeginTime =
		    $.now() +
		    viewer.controlsFadeDelay;

		window.setTimeout( function(){
		    scheduleControlsFade( viewer );
		}, viewer.controlsFadeDelay );
	}
	//stop the fade animation on the controls and show them
	function abortControlsAutoHide( viewer ) {
		var i;
		viewer.controlsShouldFade = false;
		for ( i = viewer.controls.length - 1; i >= 0; i-- ) {
		    viewer.controls[ i ].setOpacity( 1.0 );
		}
	}
	function onFocus(){
    	abortControlsAutoHide( this.viewer );
	}

	function onBlur(){
		beginControlsAutoHide( this.viewer );
	}
	
	
})(OpenSeadragon);



//----------------Plugin for Annotator to setup OpenSeaDragon----------------//

Annotator.Plugin.OpenSeaDragon = (function(_super) {
	__extends(OpenSeaDragon, _super);

	//constructor
	function OpenSeaDragon() {
		this.pluginSubmit = __bind(this.pluginSubmit, this);
		_ref = OpenSeaDragon.__super__.constructor.apply(this, arguments);
		this.__indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; }
		return _ref;
	}

	OpenSeaDragon.prototype.field = null;
	OpenSeaDragon.prototype.input = null;

	OpenSeaDragon.prototype.pluginInit = function() {
		console.log("OpenSeaDragon-pluginInit");
		//Check that annotator is working
		if (!Annotator.supported()) {
			return;
		}
		
		//-- Editor
		this.field = this.annotator.editor.addField({
			id: 'osd-input-rangePosition-annotations',
			type: 'input', //options (textarea,input,select,checkbox)
			submit: this.pluginSubmit,
			EditOpenSeaDragonAn: this.EditOpenSeaDragonAn
		});
		
		//Modify the element created with annotator to be an invisible span
		var select = '<li><span id="osd-input-rangePosition-annotations"></span></li>',
			newfield = Annotator.$(select);
		Annotator.$(this.field).replaceWith(newfield);
		this.field=newfield[0];
		
		//-- Listener for OpenSeaDragon Plugin
		this.initListeners();
		
		return this.input = $(this.field).find(':input');
	}
	
	
	
	// New JSON for the database
	OpenSeaDragon.prototype.pluginSubmit = function(field, annotation) {
		console.log("Plug-pluginSubmit");
		//Select the new JSON for the Object to save
		if (this.EditOpenSeaDragonAn()){
			var annotator = this.annotator,
				osda = annotator.osda,
				position = osda.rectPosition,
				isNew = typeof annotation.media=='undefined';
			if (typeof annotation.media == 'undefined') annotation.media = "image"; // - media
			annotation.target = annotation.target || {}; // - target
			annotation.target.container = osda.viewer.id || ""; // - target.container
			//Save source url
			var source = osda.viewer.source,
				tilesUrl = typeof source.tilesUrl!='undefined'?source.tilesUrl:'',
				functionUrl = typeof source.getTileUrl!='undefined'?source.getTileUrl:'';
			annotation.target.src = tilesUrl!=''?tilesUrl:(''+functionUrl).replace(/\s+/g, ' '); // - target.src (media source)
			annotation.target.ext = source.fileFormat || ""; // - target.ext (extension)
			annotation.bounds = osda.viewer.drawer.viewport.getBounds() || {}; // - bounds
			if(isNew) annotation.rangePosition = 	position || {};	// - rangePosition
			annotation.updated = new Date().toISOString(); // - updated
			if (typeof annotation.created == 'undefined')
				annotation.created = annotation.updated; // - created
		}else{
			if (typeof annotation.media == 'undefined')
				annotation.media = "text"; // - media
			annotation.updated = new Date().toISOString(); // - updated
			if (typeof annotation.created == 'undefined')
				annotation.created = annotation.updated; // - created
		}
		return annotation.media;
	};
	
	
	
	//------ Methods	------//
	//Detect if we are creating or editing an OpenSeaDragon annotation
	OpenSeaDragon.prototype.EditOpenSeaDragonAn =  function (){
		var wrapper = $('.annotator-wrapper').parent()[0],
			annotator = window.annotator = $.data(wrapper, 'annotator'),
			isOpenSeaDragon = (typeof annotator.osda != 'undefined'),
			OpenSeaDragon = annotator.editor.OpenSeaDragon;
		return (isOpenSeaDragon && typeof OpenSeaDragon!='undefined' && OpenSeaDragon!==-1);
	};
	
	//Detect if the annotation is an OpenSeaDragon annotation
	OpenSeaDragon.prototype.isOpenSeaDragon = function (an){
		var wrapper = $('.annotator-wrapper').parent()[0],
			annotator = window.annotator = $.data(wrapper, 'annotator'),
			rp = an.rangePosition,
			isOpenSeaDragon = (typeof annotator.osda != 'undefined'),
			isContainer = (typeof an.target!='undefined' && an.target.container==annotator.osda.viewer.id ),
			isImage = (typeof an.media!='undefined' && an.media=='image'),
			isRP = (typeof rp!='undefined'),
			isSource = false;
			//Save source url
			var source = annotator.osda.viewer.source,
				tilesUrl = typeof source.tilesUrl!='undefined'?source.tilesUrl:'';
				functionUrl = typeof source.getTileUrl!='undefined'?source.getTileUrl:'',
				compareUrl = tilesUrl!=''?tilesUrl:(''+functionUrl).replace(/\s+/g, ' ');
			if(isContainer) isSource = (an.target.src == compareUrl);
		return (isOpenSeaDragon && isContainer && isImage && isRP && isSource);
	};
	
	//Delete OpenSeaDragon Annotation
	OpenSeaDragon.prototype._deleteAnnotation = function(an){
		//Remove the annotation of the plugin Store
		var annotations = this.annotator.plugins['Store'].annotations;
		if (annotations.indexOf(an)>-1)
			annotations.splice(annotations.indexOf(an), 1);
		//Refresh the annotations in the display
		this.annotator.osda.refreshDisplay();
	};
	
	
	//--Listeners
	OpenSeaDragon.prototype.initListeners = function (){
		var wrapper = $('.annotator-wrapper').parent()[0],
			annotator = $.data(wrapper, 'annotator');
		var EditOpenSeaDragonAn = this.EditOpenSeaDragonAn,
			isOpenSeaDragon = this.isOpenSeaDragon,
			self = this;
			
		//local functions
		//-- Editor
		function annotationEditorHidden(editor) {
			console.log("annotationEditorHidden");
			if (EditOpenSeaDragonAn()){
				annotator.osda._reset();
				annotator.osda.refreshDisplay(); //Reload the display of annotations
			}
			annotator.editor.OpenSeaDragon=-1;
			annotator.unsubscribe("annotationEditorHidden", annotationEditorHidden);
		};
		function annotationEditorShown(editor,annotation) {
			console.log("annotationEditorShown");
			annotator.osda.editAnnotation(annotation,editor);
			annotator.subscribe("annotationEditorHidden", annotationEditorHidden);
		};
		//-- Annotations
		function annotationDeleted(annotation) {
			console.log("annotationDeleted");
			
			if (isOpenSeaDragon(annotation))
				self._deleteAnnotation(annotation);
		};
		//-- Viewer
		function hideViewer(){
			jQuery(annotator.osda.viewer.canvas.parentNode).find('.annotator-hl').map(function() {
				return this.style.background = 'rgba(255, 255, 10, 0.3)';
			});
			annotator.viewer.unsubscribe("hide", hideViewer);
		};
		function annotationViewerShown(viewer,annotations) {
			var wrapper = jQuery('.annotator-wrapper').offset();

			//Fix with positionCanvas
			var startPoint = {x: parseFloat(viewer.element[0].style.left),
				y: parseFloat(viewer.element[0].style.top)};
		
			var separation = viewer.element.hasClass(viewer.classes.invert.y)?5:-5,
				newpos = {
					top: (startPoint.y - wrapper.top)+separation,
					left: (startPoint.x - wrapper.left)
				};
			viewer.element.css(newpos);
			
			//Remove the time to wait until disapear, to be more faster that annotator by default
			viewer.element.find('.annotator-controls').removeClass(viewer.classes.showControls);
			
			annotator.viewer.subscribe("hide", hideViewer);
		};	
		//subscribe to Annotator
		annotator.subscribe("annotationEditorShown", annotationEditorShown)
			.subscribe("annotationDeleted", annotationDeleted)
			.subscribe("annotationViewerShown", annotationViewerShown);
	}

	return OpenSeaDragon;

})(Annotator.Plugin);



//----------------PUBLIC OBJECT TO CONTROL THE ANNOTATIONS----------------//

//The name of the plugin that the user will write in the html
OpenSeadragonAnnotation = ("OpenSeadragonAnnotation" in window) ? OpenSeadragonAnnotation : {};

OpenSeadragonAnnotation = function (element, options) {
	//local variables
	var $ = jQuery,
		options = options || {};
	options.optionsOpenSeadragon = options.optionsOpenSeadragon || {};
	options.optionsOSDA = options.optionsOSDA || {};
	options.optionsAnnotator = options.optionsAnnotator || {};
	
	//if there isn't store optinos it will create a uri and limit variables for the Back-end of Annotations 
	if (typeof options.optionsAnnotator.store=='undefined')
		options.optionsAnnotator.store = {};
	var store = options.optionsAnnotator.store;
	if (typeof store.annotationData=='undefined')
		store.annotationData = {};
	if (typeof store.annotationData.uri=='undefined'){
		var uri = location.protocol + '//' + location.host + location.pathname;
		store.annotationData.store = {uri:uri};
	}
	if (typeof store.loadFromSearch=='undefined')
		store.loadFromSearch={};
	if (typeof store.loadFromSearch.uri=='undefined')
		store.loadFromSearch.uri = uri;
	if (typeof store.loadFromSearch.limit=='undefined')
		store.loadFromSearch.limit = 10000;
		
	//global variables
	this.currentUser = null;

	//-- Init all the classes --/
	//Annotator
	this.annotator = $(element).annotator(options.optionsAnnotator.annotator).data('annotator');
	
	//-- Activate all the Annotator plugins --//
	if (typeof options.optionsAnnotator.auth!='undefined')
		this.annotator.addPlugin('Auth', options.optionsAnnotator.auth);
		
	if (typeof options.optionsAnnotator.permissions!='undefined')
		this.annotator.addPlugin("Permissions", options.optionsAnnotator.permissions);
	
	if (typeof options.optionsAnnotator.store!='undefined')
		this.annotator.addPlugin("Store", options.optionsAnnotator.store);
		
	this.annotator.addPlugin("Tags");//it is obligatory to have
	
    if (typeof Annotator.Plugin["Geolocation"] === 'function') 
		this.annotator.addPlugin("Geolocation",options.optionsAnnotator.geolocation);
		
	if (typeof Annotator.Plugin["Share"] === 'function') 
		this.annotator.addPlugin("Share",options.optionsAnnotator.share);
		
	if (typeof Annotator.Plugin["RichText"] === 'function') 
		this.annotator.addPlugin("RichText",options.optionsAnnotator.richText);
		
	if (typeof Annotator.Plugin["Reply"] === 'function') 
		this.annotator.addPlugin("Reply");
		
	if (typeof Annotator.Plugin["OpenSeaDragon"] === 'function') 
		this.annotator.addPlugin("OpenSeaDragon");
            
        if (typeof Annotator.Plugin["Flagging"] === 'function') 
		this.annotator.addPlugin("Flagging");

	//- OpenSeaDragon
    this.viewer = options.optionsOpenSeadragon.instance ||  OpenSeadragon(options.optionsOpenSeadragon);
	
    //- OpenSeaDragon Plugins
    this.viewer.annotation(options.optionsOSDA);
    
    //Set annotator.editor.OpenSeaDragon by default
    this.annotator.editor.OpenSeaDragon=-1;
    
    this.options = options;

	return this;
}


        