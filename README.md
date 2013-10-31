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
#### 0.8.0 
Version 0.8.0 introduces usability improvements, a repaired save-state feature, and brings the viewer in line with IIIF Specificatoin 1.0, and implements image choice for individual canvases.   

1. **Image choice**  
In manuscripts for whose pages multi-spectral and post-processed images have been produced and exposed through the IIIF Metadata 1.0 API, an image view toolbar control has been added to toggle between these
different images covering the canvases.
1. **reliable loading restored**  
A bug in which some of the manuscript sources were being lost in the initialisation, caused by the use of date-seeded non-unique identifiers, was remedied. This bug was
also preserving winnowed manifests in the state representation, causing successive reloads to present fewer and fewer manuscripts.
1. **IIIF API compatibility**  
 Updates to the IIIF Image and Metadata APIs were implemented, bringing the viewer to IIIF I-1.0/M-1.1 status.
1. **scale-factors fix**  
Developers at the British Library discovered that using alternative IIIF-compliant scale factor parameters resulted in display errors in Mirador. These have been corrected
to allow all valid scale factor expressions.
1. **save state restored**  
As covered above, save-state is now working, and the ability to erase the current saved session and revert to the repository-provided load configuration has been made
straight-forward with a simple button in the top-right. 
1. **Hierarchical listings in load list**  
The "Load Window" menu item has been reorganised to group manuscripts by institution, making the multi-repository nature of the viewer more transparent to viewers.
