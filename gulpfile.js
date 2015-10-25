var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    nodemon = require('gulp-nodemon');

gulp.task('imagemin',function () {
  return gulp.src('src/images/*')
    .pipe(imagemin({
      progressive:true,
      use: [pngquant()]
    }))
    .pipe(gulp.dest('public/images'));
});

gulp.task('minifycss',function(){
  return gulp.src('src/css/*')
    .pipe(concat('style.css'))
    .pipe(minifyCSS())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('public/css'));
});

gulp.task('reload',function(){
  nodemon({
    script:'server.js',
    ext:'js html',
    env:{'NODE_ENV':'development'}
  });
});
