var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

// compile and compress sass files
gulp.task('sass', function() {
    gulp.src('assets/sass/**/*.scss')
        .pipe(sass({outputStyle : 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

// concat javascript files
gulp.task('js', function() {
    gulp.src('assets/js/**/*.js')    
        .pipe(concat('script.js'))
        .pipe(gulp.dest('./js/'));
})

// watch for file changes
gulp.task('watch', function() {
    gulp.watch('assets/sass/**/*.scss',['sass']);
    gulp.watch('assets/js/**/*.js',['js']);
});

gulp.task('default', ['sass', 'js', 'watch']);

