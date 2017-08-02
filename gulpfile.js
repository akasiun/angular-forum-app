var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    watchFiles = [
      'index.html',
      'app/**/*.js',
      'app/templates/**/*.html'      
    ]

gulp.task('default', ['serve']);

// watch files for changes and reload
gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: 'src'
    }
  });

  gulp.watch(watchFiles, {cwd: 'src'}, reload);
});