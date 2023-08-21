const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const minCss = require('gulp-clean-css');
const watch = require('gulp-watch');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass-compile', function () {
    return gulp.src('./src/scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(autoprefixer())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./src/css/'))
});

gulp.task('minify-css', function () {
    return gulp.src('./src/css/*.css')
        .pipe(sourcemaps.init())
        .pipe(minCss())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./src/css/'))
});

gulp.task('watch', function () {
    gulp.watch('./src/scss/**/*.scss', gulp.series('sass-compile'));
});

exports.default = () => {
    gulp.src('./src/css/*.css')
        .pipe(sourcemaps.init())
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./src/css/'))
}
