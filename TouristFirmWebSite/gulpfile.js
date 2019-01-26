var gulp  = require('gulp'),
    watch = require('gulp-watch');

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
  console.log("Imagine Sass or PostCSS tasks running here.");
  if(done) done();
};

gulp.task('watch', function() {
  watch('./app/index.html', function() {
    html();
  });
  watch('./app/assets/styles/**/*.css', function() {
    styles();
  });
});