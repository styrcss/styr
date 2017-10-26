'use strict';

var gulp = require('gulp')
  , concat = require('gulp-concat-css')
  , clean = require('gulp-clean')
  , copy = require('gulp-copy')
  , minify = require('gulp-clean-css')
  , rename = require('gulp-rename')
  , run = require('run-sequence')
  , smap = require('gulp-sourcemaps')
  , stylus = require('gulp-stylus')
  ;

// extract normalize.css into reset.css
gulp.task('concat', function() {
  return gulp.src('src/reset.styl')
  .pipe(stylus())
  .pipe(concat('_reset.css')) // NOTE: filename order
  .pipe(gulp.dest('tmp/builds'));
});

// build stylus files into tmp/builds
gulp.task('build', ['concat'], function() {
  return gulp.src(['src/**/*.styl', '!src/reset.styl'])
  .pipe(smap.init())
  .pipe(stylus())
  .pipe(smap.write())
  .pipe(gulp.dest('tmp/builds'));
});

// merge all files into tmp/builds as dst/styr.css
gulp.task('merge', ['build'], function() {
  return gulp.src('tmp/builds/*.css')
  .pipe(concat('styr.css'))
  .pipe(gulp.dest('tmp/'));
});

// copy tmp/styr.css into dst
gulp.task('distribute', ['merge'], function() {
  return gulp.src('tmp/styr.css')
  .pipe(copy('dst', {prefix: 2}));
});

// minify styr.css as styr.min.css
gulp.task('compress', ['distribute'], function() {
  return gulp.src('dst/styr.css')
  .pipe(minify())
  .pipe(rename('styr.min.css'))
  .pipe(gulp.dest('dst'));
});

// remove all files into {dst|tmp}
gulp.task('clean', function() {
  return gulp.src([
    'dst/*'
  , 'tmp/builds/*'
  , 'tmp/*'
  ], {
    read: false
  })
  .pipe(clean());
});

// -- [development tasks]

var paths = { // watch targets
  styl: [
    'src/*.styl'
  ]
};

gulp.task('watch', function() {
  gulp.watch('gulpfile.js', ['default']);
  gulp.watch(paths.styl, ['compress']);
});

// -- [main tasks]

gulp.task('default', function() {
  var nodeEnv = process.env.NODE_ENV || 'production';
  console.log('» gulp:', nodeEnv);

  return run('clean', 'compress');
});
