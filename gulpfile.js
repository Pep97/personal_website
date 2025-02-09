const { src, dest, watch, series } = require('gulp')
const sass = require('sass');
const gulpSass = require('gulp-dart-sass');
const purgecss = require('gulp-purgecss')

// This function will compile SASS to CSS
function buildStyles() {
  return src('sass/**/*.scss')
    .pipe(gulpSass({ outputStyle: 'compressed' }))
    .pipe(purgecss({ content: ['*.html'] }))
    .pipe(dest('css'))
}

// This function will watch for changes in sass files and then run buildStyles
function watchTask() {
  watch(['sass/**/*.scss', '*.html'], buildStyles)
}

// Define default task that watches for changes
exports.default = series(buildStyles, watchTask);

// Export "build" so Netlify can run "gulp build"
exports.build = buildStyles;