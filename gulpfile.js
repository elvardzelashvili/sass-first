'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('scss/_style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('styles'));
});
 
gulp.task('watch', function () {
  gulp.watch('scss/_style.scss', gulp.parallel('sass'));
});