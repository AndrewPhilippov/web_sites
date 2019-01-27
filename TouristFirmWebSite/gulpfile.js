var gulp         = require('gulp'),
    watch        = require('gulp-watch'),
    postcss      = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    nested       = require('postcss-nested'),
    cssImport    = require('postcss-import'),
    cssvars      = require('postcss-simple-vars');

gulp.task('default', function(){
  console.log('Huray! You\'ve just created a gulp task!');
});

gulp.task('html', html);
function html(done) {
  console.log("Imagine something useful being done to your HTML here");
  if(done) done();
};

gulp.task('watch', function() {
  watch('./app/index.html', function() {
    html();
  });
});

gulp.task('styles', styles);
function styles(done) {
  // Added the console.log because otherwise there's no indication that the function ran and putting console.log after the return statement won't run.
  console.log("Styles task runs");
  return gulp.src('./app/assets/styles/style.css')
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
  // Don't need the styles(done) or if (done) done(); because we are returning something in this function now.
  // if(done) done();
};

gulp.task('watch', function() {
  watch('./app/index.html', function() {
    html();
  });
  watch('./app/assets/styles/**/*.css', function() {
    styles();
  });
});