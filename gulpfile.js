'use strict';

var gulp = require('gulp')
  , concat = require('gulp-concat-css')
  , clean = require('gulp-clean')
  , minify = require('gulp-clean-css')
  , rename = require('gulp-rename')
  , run = require('run-sequence')
  , smap = require('gulp-sourcemaps')
  , stylus = require('gulp-stylus')
  ;

gulp.task('concat', function() {
  return gulp.src('src/reset.styl')
  .pipe(stylus())
  .pipe(concat('_reset.css')) // NOTE: filename order
  .pipe(gulp.dest('tmp/builds'));
});

gulp.task('build', ['concat'], function() {
  return gulp.src(['src/**/*.styl', '!src/reset.styl'])
  .pipe(smap.init())
  .pipe(stylus())
  .pipe(smap.write())
  .pipe(gulp.dest('tmp/builds'));
});

gulp.task('merge', ['build'], function() {
  return gulp.src('tmp/**/*.css')
  .pipe(concat('styr.css'))
  .pipe(gulp.dest('dst'));
});

gulp.task('compress', ['merge'], function() {
  return gulp.src('dst/styr.css')
  .pipe(minify())
  .pipe(rename('styr.min.css'))
  .pipe(gulp.dest('dst'));
});

gulp.task('clean', function() {
  return gulp.src([
    'dst/*'
  , 'tmp/**/*'
  ], {
    read: false
  })
  .pipe(clean());
});

// -- [main tasks]

gulp.task('default', function() {
  var nodeEnv = process.env.NODE_ENV || 'production';
  console.log('» gulp:', nodeEnv);

  return run('clean', ['compress'])
});
