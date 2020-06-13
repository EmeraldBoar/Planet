module.exports = function () {
  $.gulp.task("refresh", function (done) {
    $.browserSync.reload();
    done();
  });
  
  $.gulp.task('serve', function () {
    $.browserSync.init({
      server: 'build/'
    });
    $.gulp.watch('sass/**/*.scss', $.gulp.series('sass', 'refresh'));
    $.gulp.watch('pug/*.pug', $.gulp.series('pug', 'refresh'));
    $.gulp.watch('*.html', $.gulp.series('html', 'refresh'));
    //$.gulp.watch('js/**/*.js', $.gulp.series('scripts'));
    $.gulp.watch('img/**/*.{jpg, png, svg}', $.gulp.series('allimg', 'refresh'));
  });
};
