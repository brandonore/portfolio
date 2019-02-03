const gulp = require('gulp'),
      browserSync = require('browser-sync').create(),
      sass = require('gulp-sass');

// compile sass
gulp.task('sass', function() {
    return gulp.src(['src/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream());
})

// watch and serve
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });

    gulp.watch(['src/scss/*.scss'], ['sass']);
    gulp.watch(['src/js/*.js']).on('change', browserSync.reload);
    gulp.watch(['*.html']).on('change', browserSync.reload);
})

// default
gulp.task('default', ['serve']);