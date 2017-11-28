/**
 * Collection of all the locations where to build and get the files
 */

var root = '';
var webRoot = root + './';
var clientRoot = webRoot + 'Client/';
var paths;

module.exports = paths = {
    js: {
        dataVendorBundle: [
            './node_modules/jquery/dist/jquery.js',
            './node_modules/underscore/underscore.js',
            './node_modules/backbone/backbone.js'
            //'./js/vendor/**/*.js',
            //'./js/globals.js'
        ],
        dataCustomJS: [
            './js/components/**/*.js',
            './js/main.js'
        ]
    },
    scss: {
        dataBundleSCSS: [
            '../Areas/**/*.scss',
            './scss/print.scss'
        ]
    },
    fonts: [
        './fonts/**/*.*'
    ],
    images: [
        './img/**/*.*'
    ],
    templates: [
        './templates/**/*.*'
    ],
    dist: webRoot + 'Static/Core/'
};
