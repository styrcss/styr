'use strict';

const { dest, series, src, watch } = require('gulp');

const _concat = require('gulp-concat')
    , _clean = require('gulp-clean')
    , copy = require('gulp-copy')
    , minify = require('gulp-clean-css')
    , rename = require('gulp-rename')
    , smap = require('gulp-sourcemaps')
    , stylus = require('gulp-stylus')
    ;

// extract normalize.css into reset.css
const concat = function() {
  return src([
      'node_modules/normalize.css/normalize.css'
    , 'src/reset.styl'
    ])
    .pipe(stylus())
    .pipe(_concat('_reset.css')) // NOTE: filename order
    .pipe(dest('tmp/builds'));
};

// compile stylus files and put them into tmp/builds
const compile = function() {
  return src(['src/**/*.styl', '!src/reset.styl'])
    .pipe(smap.init())
    .pipe(stylus())
    .pipe(smap.write())
    .pipe(dest('tmp/builds'));
};

// merge all files into tmp/builds as dst/styr.css
const merge = function() {
  return src('tmp/builds/*.css')
    .pipe(_concat('styr.css'))
    .pipe(dest('tmp/'));
};

// copy tmp/styr.css into dst
const distribute = function() {
  return src('tmp/styr.css')
    .pipe(copy('dst', {prefix: 2}));
};

// minify styr.css as styr.min.css
const compress = function() {
  return src('dst/styr.css')
  .pipe(minify())
  .pipe(rename('styr.min.css'))
  .pipe(dest('dst'));
};

const build = series(
  concat
, compile
, merge
, distribute
, function(cb) {
    cb();
  }
);

exports.build = function(cb) {
  const nodeEnv = process.env.NODE_ENV || 'development';
  console.log('» gulp:', nodeEnv);

  var tasks = [clean, build];
  if (nodeEnv === 'production') {
    tasks.push(compress);
  }

  return series(...tasks)(cb);
};

// remove all files into {dst|tmp}
const clean = function() {
  return src([
    'dst/*'
  , 'tmp/builds/*'
  , 'tmp/*'
  ], {
    read: false
  })
  .pipe(_clean());
};

exports.clean = clean;

exports.watch = function() {
  // watch targets
  const paths = {
    gulp: ['gulpfile.js']
  , styl: ['src/*.styl']
  };

  watch(paths.gulp, series(build, function(cb) {
    cb();
  }));

  watch(paths.styl, series(build, compress, function(cb) {
    cb();
  }));
}

exports.default = build;
