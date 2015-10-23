module.exports = (gulp, plugins, config)->
  gulp.task 'fonts', ()->
    return gulp
      .src(config.dir.src.fonts+"**", base: config.dir.src.base)
      .pipe(gulp.dest(config.dir.build.base))