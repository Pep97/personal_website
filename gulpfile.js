const { src, dest, watch, series } = require('gulp')
const sass = require('sass');
const gulpSass = require('gulp-dart-sass');
const purgecss = require('gulp-purgecss')

// this fucntion will compile sass to css

function buildStyles() {
  return src('sass/**/*.scss')
    .pipe(gulpSass({ outputStyle: 'compressed' }))
    .pipe(purgecss({ content: ['*.html'] }))
    .pipe(dest('css'))
}

// this function will watch for changes in sass.scss and then run buildStyles

function watchTask() {
  watch(['sass/**/*.scss', '*.html'], buildStyles)
}

exports.default = series(buildStyles, watchTask);

//once you created this page you can run gulp in the terminal and it will watch for changes in sass.scss and then run buildStyles
