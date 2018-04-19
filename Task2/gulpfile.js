var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

gulp.task('scripts', function () {
  gulp.src('js/**/*.js')
    .pipe(concat('scripts.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('sass', function () {
  return gulp.src('sass/*.scss')
    .pipe(sass(
        {outputStyle: 'compressed'}
        ).on('error', sass.logError))
    .pipe(gulp.dest('css'));
});

gulp.task('watch', ['scripts', 'sass'], function () {
  gulp.watch('js/**/*.js', ['scripts']);
  gulp.watch('sass/**/*.scss', ['sass']);
});
