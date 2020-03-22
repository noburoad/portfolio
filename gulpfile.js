var gulp = require('gulp');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');//自動インポートプラグイン


gulp.task('sass', function(){
    return gulp.src('./sass/**/*.scss')
    .pipe(sassGlob())
    .pipe(sass({outputStyle: 'expand'}))
    .pipe(gulp.dest('css'));
});

gulp.task('sass:watch',()=> {
    gulp.watch('./sass/**/*.scss', gulp.series('sass'));
});
