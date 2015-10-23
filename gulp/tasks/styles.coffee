perfectionist = require("perfectionist")
autoprefixer = require("autoprefixer")
mqpacker = require("css-mqpacker")

module.exports = (gulp, plugins, config)->
  gulp.task 'styles', ->
    return gulp
      .src(config.dir.src.styles + "*.scss")
      .on "error", config.logger.error
      .pipe(plugins.sass())
      .pipe(plugins.postcss([
        autoprefixer({
          browsers: [ 'last 2 versions' ]
        }),
        mqpacker,
        perfectionist({
          indentSize:2,
          format: 'expanded'
        })
      ]))
      .pipe(gulp.dest(config.dir.build.base))
      .pipe(plugins.connect.reload())