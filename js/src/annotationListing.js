(function($) {

    $.AnnotationListing = function(options) {
        jQuery.extend(true, this, {
            element:null,
            id: null,
            title: null,
            content: null,
            type: null
        }, options);

        this.create();
    };

    $.AnnotationListing.prototype = {

        create: function() {
            this.render();
        },

        render: function() {
            templateData = {
                id: this.id,
                title: this.title,
                content: this.content
            };

            this.element = jQuery($.Templates.imageView.annotationListing(templateData));
            this.parent.listShell.append(this.element);
            this.bindEvents();
        },

        bindEvents: function() {
            var _this = this;
            this.element.on('click', function() { _this.parent.parent.set('selectedAnnotation', _this.id, 'listing'); } );
            this.element.on('mouseover', function() { _this.parent.parent.set('hoveredAnnotation', _this.id, 'listing'); } );
            this.element.on('mouseleave', function() { _this.parent.parent.set('hoveredAnnotation', null, 'listing'); } );
        },

        show: function() {
            this.element.fadeIn();
        },

        hide: function() {
            this.element.fadeOut();
        }

    };

}(Mirador));
