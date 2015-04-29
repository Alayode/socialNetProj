/*
To interact with MongoDB , you will bre using the Mongoose ODM. It's a light layer
on top of the Mongo Driver. to add the npm package, do this:

$ npm install --save mongoose

It is better to keep this code modularized so your server.js does not get too large.
*/

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/social',function(){
  console.log('mongodb connected')
})


module.exports = mongoose
