module.exports = function () {
    $.gulp.task('pug', function () {
        return $.gulp.src('pug/*.pug')
            .pipe($.gp.pug({pretty: '\t'}))
            .pipe($.gulp.dest('build/'))
    });
  };