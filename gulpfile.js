const { src, dest, watch, series } = require('gulp');
const sass = require('sass');
const gulpSass = require('gulp-dart-sass');
const purgecss = require('gulp-purgecss');

// This function will compile SASS to CSS
function buildStyles() {
  return src('sass/**/*.scss')
    .pipe(gulpSass({ outputStyle: 'compressed' }))
    .pipe(purgecss({ content: ['*.html'] }))
    .pipe(dest('dist/css')); // Output to 'dist/css'
}

// This function will watch for changes in SASS files and then run buildStyles
function watchTask() {
  watch(['sass/**/*.scss', '*.html'], buildStyles);
}

// Define the 'build' task for Netlify
exports.build = buildStyles;

// Default task to run when you just call 'gulp' in the terminal
exports.default = series(buildStyles, watchTask);