(function($) {

  // Lock controller.
  // Stores a list of widget/manifest ids.
  // These specified views are locked together.
  // they will zoom together, pan together, flow together.

  // This will be an object with an accessible function to call zoom and pan
  // on all the items "under-written" ("sub"-"scribed").

  $.LockController = function(options) {

    jQuery.extend(this, {
      translationMethod:     null,
      lockedViews:           [],
      lockProfile:           "lazyZoom"
    }, options);
  };

  $.LockController.prototype = {
    LockOptions: {

      // These pprofiles provide different behavior for locking,
      // based on whether the user wants locked images to pan
      // or zoom together, share an absolute or relative scale,
      // increment by relative or absolute units, and/or decouple
      // from one another once the limits of available data have
      // been reached (maximum zoom, image extremities, etc.

      relativeZoom: function(view, data) {
        // Panning is disabled but the zoom level is kept
        // relative to the leader. If the leader is zoomed to
        // level 4.239873, the followers will zoom to 4.239873.
        // This is regardless of their aspect ratio or their
        // given physical or pixel dimensions. This means that
        // the features being examined may not be presented at
        // an accurate relative size.

        view.viewport.panTo(view.viewport.getCenter());
        view.viewport.zoomTo(data.leaderZoom, view.viewport.getCenter());
      },

      relativeLock: function(view, data) {
        // All zooming and panning are relatively mirrored across
        // all locked views. All views will reach their edges (when panning),
        // or their maximum and minimum zoom levels (when zooming), at the same
        // time.
        //
        // Useful when similar documents, or examining two views of a
        // single document.
        var leaderBounds = data.leaderBounds;
        // console.log(view);
        // console.log(leaderBounds);
        view.viewport.fitBounds(leaderBounds);
      },

      dimensionalZoom: function(view, data) {
        // Dimensional zoom locks only the physical dimensions of the
        // locked views, so that panning does nothing, while their
        // scales always read with equally-sized units.
        // Reliable physical units (Centimetres, etc. ) which could
        // be faithfully measured with a ruler held up to the screen
        // are not currently possible without either: explicit information
        // about the user's particular make of monitor; or
        // a calibration process for each session.
        // For a rant concerning this fact, c.f.:
        //

        // Useful for comparisons of features maintaining their
        // correct physical proportions.
        var viewCenter = view.viewport.getCenter();

        leaderViewportPixelWidth = data.leaderContainerWidth;
        followerViewportPixelWidth = view.viewport.getContainerSize().x;
        viewportRatio = followerViewportPixelWidth/leaderViewportPixelWidth;

        // Construct target Rect variables from collected data.
        var followerTargetRectWidth = ((data.leaderBounds.width*data.leaderWidth)/view.width)*viewportRatio,
        followerTargetRectHeight = view.viewport.getAspectRatio()*followerTargetRectWidth,

        // calculate position of top right corner such that the
        // center maintains the same real coordinates for that image.
        followerTargetRectX = viewCenter.x - ( followerTargetRectWidth/2 ),
        followerTargetRectY = viewCenter.y - ( followerTargetRectHeight/2 );
        console.log(followerTargetRectHeight);

        followerTargetRect = new OpenSeadragon.Rect(followerTargetRectX, followerTargetRectY, followerTargetRectWidth, followerTargetRectHeight);
        console.log(followerTargetRect);
        console.log('updated');

        view.viewport.fitBounds(followerTargetRect);

      },

      dimensionalLock: function(view, data) {
        var viewCenter = view.viewport.getCenter();

        leaderViewportPixelWidth = data.leaderContainerWidth;
        followerViewportPixelWidth = view.viewport.getContainerSize().x;
        viewportRatio = followerViewportPixelWidth/leaderViewportPixelWidth;

        // Construct target Rect variables from collected data.
        var followerTargetRectWidth = ((data.leaderBounds.width*data.leaderWidth)/view.width)*viewportRatio,
        followerTargetRectHeight = view.viewport.getAspectRatio*followerTargetRectWidth,

        // calculate position of top right corner such that the
        // center maintains the same real coordinates for that image.
        followerTargetRectX = viewCenter.x - ( followerTargetRectWidth/2 ),
        followerTargetRectY = viewCenter.y - ( followerTargetRectHeight/2 );

        followerTargetRect = new OpenSeadragon.Rect(followerTargetRectX, followerTargetRectY, followerTargetRectWidth, followerTargetRectHeight);

        view.viewport.fitBounds(followerTargetRect);

      },

      lazyZoom : function(view, data) {
        // Zoom respective images by the same amount relative to
        // each image's own coordinates, starting from each 
        // image's own current zoom level, alleviating the "inverted zoom" 
        // behaviour seen in relativeZoom.
        
        // console.log(data); 
        // Save (follower) view's current center for zoom statement. 
        var viewCenter = view.viewport.getCenter(),
        // and derive scale factor for zoom statement. 
        zoomFactor = data.leaderZoom/data.leaderOldZoom,
        // cache the min and max zoom to prevent over- and
        // under-zooming the followers.
        maxZoom = view.viewport.getMaxZoom(),
        minZoom = view.viewport.getMinZoom(),
        // pre-calculate the floating-point result
        // of the zoom operation to prevent it if it
        // threatens to create over- or under-zooming.
        zoomResult = view.viewport.getZoom()*zoomFactor;
        
        // console.log("max: "+maxZoom);
        // console.log("min: "+minZoom);
        // console.log("current: "+view.viewport.getZoom());
        console.log("factor: "+zoomFactor);
        // console.log("result: "+zoomResult); 
        // console.log("result2: "+zoomResult); 

        // zoom statement.
        // conditional guarantees that the zoom event will not 
        // exceed the follower's bounds. If so, block the event.
        if ( maxZoom >= zoomResult && minZoom <= zoomResult ) {
          view.viewport.zoomBy(zoomFactor, viewCenter);
        } else if (maxZoom < zoomResult) {
          view.viewport.zoomTo(maxZoom, viewCenter);
          console.log("reachedMax"); 
        } else if ( minZoom > zoomResult) {
          view.viewport.zoomTo(minZoom, viewCenter);
          console.log("reachedMin"); 
        }

        // // set zoomLevel on followers to ensure proper anti-yo-yo
        // // measures when they are called upon to lead.
        // var liveParentWidget = jQuery.grep($.viewer.widgets, function(widget, index){ return ( widget.id === data.leaderId );})[0];
        // liveParentWidget.viewObj.zoomLevel = view.viewport.getZoom();
      },

      lazyLock : function(view, data) {
        // Zoom and pan respective images by the same amount relative to
        // each image's own coordinates, starting from each 
        // image's own current zoom level and pan position, alleviating 
        // the "inverted zoom" behaviour seen in relativeZoom and allowing 
        // for synchronous panning.

      } //,

      // physicalDimensions : function() {
      //     // This presumes we can accurately map to physical Dimensions.
      //     // This would simply configure some global variable
      //     // specific to a certain session or user that allows them
      //     // to hard-wire a scale. For instance, we could store a calibration cookie
      //     // that is created after we force them to put a ruler up to
      //     // the screen and click some button when it is a perfect
      //     // centimetre.
      // }
    },

    addLockedView : function(viewObj) {
      // add a new widgetId to the list of locked views.
      lockObj = {
        viewId: viewObj.parent.id,
        rectObj: viewObj.osd.viewport.getBounds(),
        zoomLevel: viewObj.zoomLevel,
        width: viewObj.width,
        units: viewObj.units,
        viewport: viewObj.osd.viewport
      };

      this.lockedViews.push(lockObj);
    },

    broadcast : function(leaderId) {
      var _this = this;
      // execute translated zoom and pan events on all the subscribed elements.
      // options: translate an actual zoom event (zoomBy)
      //          translate the destination rect and fitBounds. This has the advantage of taking
      //          care of both the zoom and pan at the same time.
      var leader = jQuery.map(_this.lockedViews, function(view) { if (view.viewId === leaderId) return view; })[0],
      data = {
        leaderId: leaderId,
        leaderBounds: leader.viewport.getBounds(),
        leaderCenter: leader.viewport.getCenter(),
        leaderOldZoom: leader.zoomLevel,
        leaderZoom: leader.viewport.getZoom(),
        leaderWidth: leader.width,
        leaderContainerWidth: leader.viewport.getContainerSize().x
      },
      filteredViews = jQuery.map( _this.lockedViews, function(view) { if (view.viewId != leaderId) return view; });

      jQuery.each(filteredViews, function(i, view) {
        _this.LockOptions[_this.lockProfile](view, data);
      });
      
      leader.zoomLevel = leader.viewport.getZoom();

    },

    removeLockedView : function(id) {

      // remove this element from the list of elements on which to execute the translated
      // locking and zooming commands by id.

      for (var i=0; i<this.lockedViews.length; i++) {
        if (this.lockedViews[i].viewId === id) {
          this.lockedViews.splice(i, 1);  //removes 1 element at position i
          break;
        }

      }

    }
  };

}(Mirador));
