var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass({outputStyle : 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

gulp.task('watch', function() {
    gulp.watch('sass/**/*.scss',['sass']);
});

//Watch task
gulp.task('default', ['sass', 'watch']);

