/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults)
{
    var app = new EmberApp(defaults, {
      //	babel: {     sourceMaps: 'inline'   },
      // Add options here

      // This fix a JS error that happened when installing
      // ember-power-select-typeahead.
      // see https://stackoverflow.com/questions/34549838/ember-2-2-0-getting-regeneratorruntime-is-not-defined
	'ember-cli-babel': {
            includePolyfill: true
        },

	'ember-power-select': {
            theme: 'bootstrap'
	},

	'ember-bootstrap': {
            'bootstrapVersion': 3,
            'importBootstrapFont': true,
            'importBootstrapCSS': true
	},
        fingerprint: {
            enabled: false
        }
    });

    // Use `app.import` to add additional libraries to the generated
    // output files.
    //
    // If you need to use different assets in different
    // environments, specify an object as the first parameter. That
    // object's keys should be the environment name and the values
    // should be the asset to use in that environment.
    //
    // If the library that you are including contains AMD or ES6
    // modules that you would like to import into your application
    // please specify an object with the list of modules as keys
    // along with the exports of each module as its value.

    app.import('bower_components/font-awesome/fonts/fontawesome-webfont.ttf',
               {destDir: 'fonts'});
    app.import('bower_components/font-awesome/fonts/fontawesome-webfont.woff',
               {destDir: 'fonts'});

    app.import('bower_components/bootstrap/dist/css/bootstrap.min.css');
    app.import('bower_components/metisMenu/dist/metisMenu.min.css');

    app.import('bower_components/startbootstrap-sb-admin-2-blackrockdigital/dist/css/sb-admin-2.css');
    app.import('bower_components/startbootstrap-sb-admin-2-blackrockdigital/dist/css/timeline.css');

    app.import('bower_components/morrisjs/morris.css');
    app.import('bower_components/font-awesome/css/font-awesome.min.css');

    //app.import('bower_components/jquery/dist/jquery.min.js');
    app.import('bower_components/metisMenu/dist/metisMenu.min.js');
    app.import('bower_components/bootstrap/dist/js/bootstrap.min.js');
    //app.import('bower_components/raphael/raphael-min.js');
    app.import('bower_components/morrisjs/morris.min.js');
    app.import('bower_components/startbootstrap-sb-admin-2-blackrockdigital/dist/js/sb-admin-2.js');

    return app.toTree();
};
