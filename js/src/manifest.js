(function($){

    $.Manifest = function(manifestUri, dfd) {

        jQuery.extend(true, this, {
            uri:        manifestUri,
            jsonLd:     null,
            sequences:  [],
            ranges: [],

            metadata: {
                about:    {},
                details:  {},
                rights:   {},
                links:    {}
            },

            showNoImageChoiceOption: $.DEFAULT_SETTINGS.showNoImageChoiceOption
        });

        this.loadManifestDataFromURI(dfd);
    };

    $.Manifest.prototype = {

        loadManifestDataFromURI: function(dfd) {
            var _this = this;

            jQuery.ajax({
                url: _this.uri,
                dataType: 'json',
                async: true,

                success: function(jsonLd) {
                    _this.jsonLd = jsonLd;

                    _this.sequences = _this.parseSequences();
                    _this.ranges = _this.parseRanges();
                    _this.parseMetadata();

                    dfd.resolve(true);
                },

                error: function() {
                    console.log('Failed loading ' + _this.uri);
                    dfd.resolve(false);
                }
            });

            // delete this.jsonLd; // clear memory
        },


        parseSequences: function() {
            var _this = this,
            sequences = [];

            jQuery.each(this.jsonLd.sequences, function(index, sequence) {
                if (sequence['@type'] === 'sc:Sequence') {
                    sequences.push({
                        id: sequence['@id'],
                        imagesList: _this.getImagesList(sequence)
                    });
                }
            });

            return sequences;
        },

        parseRanges: function() {
            var _this = this,
            ranges = [];
            if (!this.jsonLd.structures) { return []; }
            jQuery.each(this.jsonLd.structures, function(index, range) {
                if (range['@type'] === 'sc:Range') {
                    ranges.push({
                        id: range['@id'],
                        canvases: range.canvases,
                        within: range.within,
                        label: range.label
                    });
                }
            });

            ranges = _this.extractRangeTrees(ranges);

            return ranges;
        },

        extractRangeTrees: function(rangeList) {
            var tree, parent;
            // Recursively build tree/table of contents data structure
            // Begins with the list of topmost categories
            function unflatten(flatRanges, parent, tree) {
                // To aid recursion, define the tree if it does not exist,
                // but use the tree that is being recursively built
                // by the call below.
                tree = typeof tree !== 'undefined' ? tree : [];
                parent = typeof parent !== 'undefined' ? parent : {id: "root", label: "Table of Contents" };
                var children = jQuery.grep(flatRanges, function(child) { if (!child.within) { child.within = 'root'; } return child.within == parent.id; });
                if ( children.length ) {
                    if ( parent.id === 'root') {
                        // If there are children and their parent's 
                        // id is a root, bind them to the tree object.
                        // 
                        // This begins the construction of the object,
                        // and all non-top-level children are now
                        // bound the these base nodes set on the tree
                        // object.
                        children.forEach(function(child) {
                            child.level = 0;
                        });
                        tree = children;   
                    } else {
                        // If the parent does not have a top-level id,
                        // bind the children to the parent node in this
                        // recursion level before handing it over for
                        // another spin. 
                        //
                        // Because "child" is passed as 
                        // the second parameter in the next call, 
                        // in the next iteration "parent" will be the
                        // first child bound here.
                        children.forEach(function(child) { 
                            child.level = parent.level+1;
                        });
                        parent.children = children;
                    }
                    // The function cannot continue to the return 
                    // statement until this line stops being called, 
                    // which only happens when "children" is empty.
                    jQuery.each( children, function( index, child ){ unflatten( flatRanges, child ); } );                    
                }
                return tree;
            }

            return unflatten(rangeList);
        },

        getImagesList: function(sequence) {
            var _this = this,
            imagesList = [];

            // TODO: Assumes one image per canvas :(

            jQuery.each(sequence.canvases, function(index, canvas) {
                var images = [],
                imageObj;

                if (canvas['@type'] === 'sc:Canvas') {
                    images = canvas.resources || canvas.images;

                    jQuery.each(images, function(index, image) {
                        if (image['@type'] === 'oa:Annotation') {
                            imageObj = _this.getImageObject(image);

                            imageObj.title = canvas.label || '';
                            imageObj.canvasWidth = canvas.width;
                            imageObj.canvasHeight = canvas.height;
                            imageObj.canvasId = canvas['@id'];

                            if (canvas.otherContent) {
                                imageObj.annotations = jQuery.map(canvas.otherContent, function( annotation ){

                                    if (annotation['@id'].indexOf(".json") >= 0) {
                                        return annotation['@id'];
                                    }

                                    return (annotation['@id'] + ".json");
                                });
                            }

                            if (!_this.isDetailImage(image.on)) {
                                imagesList.push(imageObj);
                            }
                        }
                    });

                }
            });

            return imagesList;
        },


        getImageObject: function(image) {
            var resource = image.resource,
            imageObj;
            if (resource.hasOwnProperty('@type') && resource['@type'] === 'oa:Choice') {
                imageObj = this.getImageObjWithChoices(image.resource);

            } else {
                imageObj = this.getImageProperties(resource);
            }

            if (this.showNoImageChoiceOption) {
                imageObj.choices.push(this.getNoImageChoiceObj());
            }

            return(imageObj);
        },


        getImageProperties: function(image) {
            var imageObj = {
                height:       image.height || 0,
                width:        image.width || 0,
                id:           image.service['@id'],
                imageUrl:     image.service['@id'].replace(/\/$/, ''),
                choices:      [],
                choiceLabel:  image.label || 'Default'
            };

            imageObj.aspectRatio  = (imageObj.width / imageObj.height) || 1;

            return imageObj;
        },


        getImageObjWithChoices: function(resource) {
            var _this = this,
            items = [],
            imageObj,
            choice,
            choiceIndex = 1;

            // remove after Rob converts 'item' object to an array
            if (!jQuery.isArray(resource.item)) {
                items.push(resource.item);
            } else {
                items = resource.item;
            }

            // get the default image object first
            imageObj = this.getImageProperties(resource['default']);

            if (imageObj.choiceLabel === '') {
                imageObj.choiceLabel = 'Choice ' + choiceIndex;
            }

            // iterate each choice and store in default object
            jQuery.each(items, function(index, item) {
                choice = _this.getImageProperties(item);

                if (choice.choiceLabel === '') {
                    choiceIndex += 1;
                    choice.choiceLabel = 'Choice ' + choiceIndex;
                }

                imageObj.choices.push(choice);
            });

            return imageObj;
        },


        getNoImageChoiceObj: function() {
            return {
                height:       0,
                width:        0,
                imageUrl:     null,
                choices:      [],
                choiceLabel:  'No Image',
                aspectRatio:  1
            };
        },


        isDetailImage: function(on) {
            return (/#xywh/).test(on);
        },


        parseMetadata: function() {
            this.parseMetadataAbout();
            this.parseMetadataDetails();
            this.parseMetadataRights();
            this.parseMetadataLinks();
            ++$.viewer.numManifestsLoaded;
        },


        parseMetadataAbout: function() {
            this.metadata.about = {
                '@context': this.jsonLd['@context'] || '',
                '@id':      this.jsonLd['@id'] || ''
            };
        },


        parseMetadataDetails: function() {
            this.metadata.details = {
                'label':        this.jsonLd.label || '',
                'agent':        this.jsonLd.agent || '',
                'location':     this.jsonLd.location || '',
                'date':         this.jsonLd.date || '',
                'description':  this.jsonLd.description || ''
            };

            // parse and store metadata pairs (API 1.0)
            var mdList = {};
            if (typeof this.jsonLd.metadata !== 'undefined') {
                jQuery.each(this.jsonLd.metadata, function(index, item) {
                    mdList[item.label] = item.value;
                });
            }
            this.metadata.metadata = mdList;
        },


        parseMetadataRights: function() {
            this.metadata.rights = {
                'license':      this.jsonLd.license || '',
                'attribution':  this.jsonLd.attribution || ''
            };
        },


        parseMetadataLinks: function() {
            this.metadata.links = {
                'service':  this.jsonLd.service || '',
                'seeAlso':  this.jsonLd.seeAlso || '',
                'within':   this.jsonLd.within || ''
            };
        }

    };

}(Mirador));
