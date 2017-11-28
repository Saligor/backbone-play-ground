var gulp            = require('gulp');
var util            = require('gulp-util');
var $               = require('gulp-load-plugins')();
var path            = require('path');
var paths           = require('../paths');
var postcss         = require('gulp-postcss');
var autoprefixer    = require('autoprefixer');

var postCSSPlugins = [
    autoprefixer({ browsers: ['last 2 versions'] })
];
function onError(err) {
    util.log(util.colors.red(err.message));
}

module.exports = function () {
    util.log(util.colors.bgBlue.bold('Compiling ---> SCSS ---> CSS'));

    return gulp.src(paths.scss.dataBundleSCSS)
        .pipe($.sourcemaps.init())
        .pipe($.concat('app.min.css'))
        .pipe($.sass({
            preserveComments: 'license',
            errLogToConsole: true,
            includePaths: [
                path.join(__dirname, '../../scss/'),
                path.join(__dirname, '../../scss/select2/')
            ]
        }))
        .pipe(postcss(postCSSPlugins))
        .pipe($.minifyCss())
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest(paths.dist + 'Css'));
};