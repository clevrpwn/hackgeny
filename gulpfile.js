var gulp = require('gulp');


gulp.task('default', function() {

  gulp.src('./src/*.html')
    .pipe(gulp.dest('./public/'));

  gulp.src('./src/js/**/*')
    .pipe(gulp.dest('./public/js'));
});

gulp.task('watch', function() {
  gulp.watch('src/**/*', ['default']);
});