# Mirador Viewer

An open-source, web-based 'multi-up' viewer that supports zoom-pan-rotate functionality, ability to display/compare simple images, and images with annotations


### First Time Setup

All command-line operations for building and testing Mirador Viewer are scripted using [Grunt](http://gruntjs.com/) which is based on [Node.js](http://nodejs.org/). To get set up:

1. Install Node, if you haven't already (available at the link above)
1. Install the Grunt command line runner (if you haven't already); on the command line, run `npm install -g grunt-cli`
1. Clone the mirador repository
1. On the command line, go in to the mirador folder
1. Run `npm install`

You're set... continue reading for build and test instructions.

### Building from Source

To build, just run (on the command line, in the mirador folder):

    grunt

If you want Grunt to watch your source files and rebuild every time you change one, use:

    grunt watch

The built files appear in the `build` folder.

### Testing 

Our test framework is based on [Jasmine](http://pivotal.github.io/jasmine/) and [PhantomJS](http://phantomjs.org/), and code coverage tool is [istanbul](http://gotwarlost.github.io/istanbul/). 
These packages are installed when you run npm install. As of now, we have limited tests and coverage. We'll be adding more soon. To run tests on the command line:

    grunt test

For coverage reports:

    grunt coverage

Or you can run both tests and coverage by:

    grunt test coverage


### Contributions

We welcome your inputs and contributions!
