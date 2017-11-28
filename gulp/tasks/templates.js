var gulp    = require('gulp');
var util    = require('gulp-util');
var paths   = require('../paths');

module.exports = function () {
    util.log(util.colors.bgBlue.bold('Copying Templates to output directory'));

    return gulp.src(paths.templates)
        .pipe(gulp.dest(paths.dist + 'Templates'));
};