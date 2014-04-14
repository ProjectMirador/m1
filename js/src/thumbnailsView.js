(function($) {

    $.ThumbnailsView = function(options) {

        jQuery.extend(this, {
            currentImg:           null,
            element:              null,
            imagesList:           [],
            sliderCls:            'thumbnails-view-slider',
            sliderId:             '',
            thumbsListingCls:     '',
            thumbsMaxHeight:      $.DEFAULT_SETTINGS.thumbnailsView.thumbsMaxHeight,
            thumbsMinHeight:      $.DEFAULT_SETTINGS.thumbnailsView.thumbsMinHeight,
            thumbsDefaultZoom:    $.DEFAULT_SETTINGS.thumbnailsView.thumbsDefaultZoom,
            thumbsDefaultHeight:  this.thumbsMinHeight,
            parent:               null,
            ranges:               null,
            navToolbarCls:        'mirador-thumbnails-view-nav-toolbar'
        }, options);

    };


    $.ThumbnailsView.prototype = {

        render: function() {
            this.sliderId         = this.parent.element.attr('id') + '-thumbs-slider';
            this.thumbsListingCls = this.parent.element.attr('id') + '-thumbs-listing';
            this.ranges = $.getRangesByManifestId(this.manifestId);

            this.thumbsDefaultHeight = this.thumbsMinHeight + ((this.thumbsMaxHeight - this.thumbsMinHeight) * this.thumbsDefaultZoom);

            this.element.html('');
            this.addToolbarNav();
            this.loadContent();
            this.setUpSlider();
            this.attachEvents();
        },

        loadContent: function() {
            var _this = this,
            tplData = {
                defaultHeight:  this.thumbsDefaultHeight,
                listingCssCls:  this.thumbsListingCls,
                ranges: this.ranges
            };

            tplData.ranges = (function(contents) {

                search(contents);

                function search(contents) {
                    contents.forEach(function(section){
                        if (section.children) {
                            search(section.children);
                        } else {
                            var relevantImages = jQuery.grep(_this.imagesList, function(image, index) {
                                return jQuery.inArray(image.canvasId, section.canvases) > -1;
                            });
                            section.thumbs = jQuery.map(relevantImages, function(image) {
                                return {
                                    thumbUrl: $.Iiif.getUriWithHeight(image.imageUrl, _this.thumbsMaxHeight),
                                    title:    image.title,
                                    id:       image.id
                                };
                            });
                        }

                    });
                }
                
                                console.log(contents);
                return contents;
            })(_this.ranges);

            this.element.append($.Templates.thumbnailsView.generateToc(tplData));
        },


        addToolbarNav: function() {
            this.parent.toolbar.append($.Templates.thumbnailsView.navToolbar({
                navToolbarCls: this.navToolbarCls
            }));
        },


        setUpSlider: function() {
            var slider =
                jQuery('<div/>')
            .attr('id', this.sliderId)
            .addClass(this.sliderCls)
            .slider({
                max:    this.thumbsMaxHeight,
                min:    this.thumbsMinHeight,
                value:  this.thumbsDefaultHeight,
                step:   1
            });
            this.parent.toolbar.append(slider);
        },


        attachEvents: function() {
            this.attachKeyboardScrollingEvents();
            this.attachNavEvents();
        },


        attachKeyboardScrollingEvents: function() {
            var _this = this,
            duration = 300,
            upArrowKey = 38,
            downArrowKey = 40,
            elThumbsFrame = this.parent.content.element;

            // to detect if cursor is above this widget's scroll frame
            elThumbsFrame.on('mouseenter', function() { elThumbsFrame.data('hover', true); });
            elThumbsFrame.on('mouseleave', function() { elThumbsFrame.data('hover', false); });

            jQuery(document).on('keydown', function(event) {
                var scrollHeight = _this.parent.content.element.height(),
                posTop;

                if (elThumbsFrame.data('hover')) {
                    posTop = _this.element.scrollTop();

                    if (event.keyCode === upArrowKey) {
                        _this.element.animate({ scrollTop: posTop - scrollHeight}, duration);
                    }

                    if (event.keyCode === downArrowKey) {
                        _this.element.animate({ scrollTop: posTop + scrollHeight}, duration);
                    }
                }

            });
        },


        attachNavEvents: function() {
            var selectorImagesListing = '.' + this.thumbsListingCls + ' li img',
            selectorImageLinks    = '.' + this.thumbsListingCls + ' li a',
            selectorSlider        = '#' + this.sliderId,
            navToolbar            = this.parent.toolbar.element.find('.' + this.navToolbarCls),
            selectorScrollView    = '.mirador-icon-scroll-view',
            selectorMetadataView  = '.mirador-icon-metadata-view',
            _this = this;

            jQuery(selectorSlider).on('slide', function(event, ui) {
                jQuery(selectorImagesListing).attr('height', ui.value);
            });

            jQuery(selectorImageLinks).on('click', function(event) {
                var elemTarget  = jQuery(event.target),
                imageId;

                imageId = elemTarget.data('image-id');
                $.viewer.loadView("imageView", _this.manifestId, imageId);
            });

            navToolbar.on('click', selectorMetadataView, function() {
                $.viewer.loadView("metadataView", _this.manifestId);
            });

            navToolbar.on('click', selectorScrollView, function() {
                $.viewer.loadView("scrollView", _this.manifestId);
            });

        }

    };


}(Mirador));
