var gulp = require('./gulp')([
    'script-bundle',
    'scss',
    'fonts',
    'jshint',
    'watch',
    'images',
    'templates'
]);

gulp.task('build', ['jshint', 'script-bundle', 'scss', 'fonts', 'images', 'templates']);
gulp.task('default', ['build', 'watch']);