 /*
 Chris Samuel
 ksamuel.chris@gmail.com

 move the app.js file from /assets to /ng
 then install the Gulp plugin gulp-concat

 npm install --save gulp-concat

 */


var gulp = require('gulp')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')

gulp.task('js',function (){
  gulp.src(['ng/module.js','ng/**/*.js'])
  .pipe(concat('app.js'))
  .pipe(uglify())
  .pipe(gulp.dest('assets'))
})


/*
This is the commmon signature  of all Gulp plug-ins. You load the fgiles with gulp.src
into a stream, then pipe then through various plug-ins, and finally output then to gulp.dest it might
look a little unsual at first, but once you get the hang of it, you'll be able to use many
plug-ins without even reading the documentation!!!!
*/
