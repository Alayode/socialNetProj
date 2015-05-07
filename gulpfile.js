 /*
 Chris Samuel
 ksamuel.chris@gmail.com

 move the app.js file from /assets to /ng
 then install the Gulp plugin gulp-concat

 npm install --save gulp-concat

 */


var gulp = require('gulp'),
var fs =require('fs')

fs.readdirSync(__dirname + '/gulp').forEach(function(task){
  require('./gulp/' + task )
})

gulp.task('build', ['js','css'])
gulp.task('watch',['watch:js', 'watch:css'])
gulp.task('dev',['watch', 'dev:server'])

/*
This is the commmon signature  of all Gulp plug-ins. You load the fgiles with gulp.src
into a stream, then pipe then through various plug-ins, and finally output then to gulp.dest it might
look a little unsual at first, but once you get the hang of it, you'll be able to use many
plug-ins without even reading the documentation!!!!
*/
