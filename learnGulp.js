/*
Chris Samuel
ksamuel.chris@gmail.com

A simple おはようございます task that just outputs
"おはようございます" which means Good Morning in Japanese
or literally it means it's early!

*/


var gulp = require('gulp')

gulp.task('ようこそ',function(){
  console.log('Gulpにようこそ')
})


//This is the basic for of a Gulp task, You can also have  task that depend on others by passing a n array


gulp.task('おはよう',['ようこそ'],function (){
  console.log('よろしくお願いします')
})


// 今回は、タスクを開始するとき、「ようこそ」を終わったら、完成します。おはようのタスクもその方法を使う事が出来る。
