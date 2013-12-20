# Mirador Viewer

An open-source, web-based 'multi-up' viewer that supports zoom-pan-rotate functionality, ability to display/compare simple images, and images with annotations.

More information on the viewer and demo is at [http://iiif.github.io/mirador/](http://iiif.github.io/mirador/)

### First Time Setup

All command-line operations for building and testing Mirador Viewer are scripted using [Grunt](http://gruntjs.com/) which is based on [Node.js](http://nodejs.org/). To get set up:

1. Install Node, if you haven't already (available at the link above)
1. Install the Grunt command line runner (if you haven't already); on the command line, run `npm install -g grunt-cli`
1. Clone the `mirador` repository
1. On the command line, go in to the `mirador` folder
1. Run `npm install`

### Building from Source

To build, just run (on the command line, in the `mirador` folder):

    grunt

If you want Grunt to watch your source files and rebuild every time you change one, use:

    grunt watch

The built files appear in the `build` folder.

### Testing

Our test framework is based on [Jasmine](http://pivotal.github.io/jasmine/) and [PhantomJS](http://phantomjs.org/), and our code coverage tool is [istanbul](http://gotwarlost.github.io/istanbul/).
These packages are installed on `npm install`. As of now, we have limited tests and coverage. We'll be adding more soon. To run tests on the command line:

    grunt test

For coverage reports:

    grunt coverage

Or you can run both tests and coverage by:

    grunt test coverage

The `grunt server` task can be used to start a static server with application root dir as base path. The default port is 8000

    grunt server


### Contributions

We welcome your inputs and contributions!

### Release Notes
#### v1.0.0-beta.1
Mirador v1.0.0-beta.1 introduces IIIF Metadata API 1.0 annotation viewing, layout adjustments, and numerous bug repairs and performance improvements.

-   Added annotation viewing, supporting synchronised annotation listings, highlighted canvas regions, and detail overlay tracking the canvas and listings 

-   Scale default interaction created to account for the majority case where the image repository does not have physical dimension data for the image

-   Support for Metadata key:value pairs added

-   Updated layout system so that windows have a percentage height and width. When the browser window is resized, windows will now always be accessible, and the saving system can access these new properties so that exported JSON will reproduce the percentage layout on a collaborator’s screen.

-   Added Apache 2 License

-   Fixed display bug in metadata view

-   Added repository fields to manifest listings

-   Browser compatibility updates

-   Memory improvements to locked zooming architecture

-   Upgraded dependencies (tooltipster, handlebars templating)

-   Fixed TileURL issue for Image API 1.1 compliant sources

-   Fixed interaction bugs with top navigation menu

-   Added new icon set

mirador
=======

Mirador project has been moved to http://github.com/IIIF/mirador. Home page is at http://iiif.github.io/mirador/
