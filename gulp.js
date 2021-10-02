// import packages
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const cssnano = require('gulp-cssnano');
const gulp = require('gulp');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const debug = require('gulp-debug');
const ext_replace = require('gulp-ext-replace');

// declare files and vars
const files = {
  scss: {
    src: ['./css/**/*.scss'],
    dest: './dist/css/'
  },
  js: {
    src: ['./js/**/*.js', './js/**/*.es6.js'],
    dest: './dist/js/'
  },
};

// create desktop notifications
const onError = (error) => {
    notify.onError({
        title: error.name,
        message: '<%= error.message %> (<%= error.fileName %>:<%= error.lineNumber %>)',
        emitError: true,
    })(error);

    this.emit('end');
};

// task: compile scss files into css
const scss = () =>
    gulp
    .src(files.scss.src)
    .pipe(plumber({ errorHandler: onError }))
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer({
        browsers: ['last 2 versions', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'],
    }))
    .pipe(cssnano())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(files.scss.dest));

// task: compile .es6.js files into js
const es6 = () =>
    gulp
    .src(files.js.src)
    .pipe(plumber({ errorHandler: onError }))
    .pipe(sourcemaps.init())
    .pipe(babel({
        presets: ['env'],
    }))
    .pipe(uglify())
    .pipe(ext_replace('.js', '.es6.js'))
    .pipe(debug())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(files.js.dest));

// task: watch changes in scss and .es6.js files
const watch = () => {
    gulp.watch(files.scss.src, scss);
    gulp.watch(files.js.src, es6);
};

// default tasks runner
const defaultTask = gulp.series(gulp.parallel(scss, es6, watch));

exports.default = defaultTask;
