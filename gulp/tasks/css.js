var gulp = require('gulp');
var config = require('../config').css;
// var less = require('gulp-less');
var path = require('path');
var concatCss = require('gulp-concat-css');

// gulp.task('css', function() {
//   return gulp.src(config.src)
//         .pipe(less())
//         .pipe(gulp.dest(config.dest));
// });
gulp.task('css', function() {
  return gulp.src(config.src)
      .pipe(concatCss("bundle.css"))
      .pipe(gulp.dest('build/'));
});