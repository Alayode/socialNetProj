// You can get access to this mongoose instance by using the require function. Now let's create a mongoose model
// to store posts. Place this code in models/post.js


var db = require('../db')
var Post = db.model('Post', {
  username: { type:String, required: true },
  body:     { type:String, required: true },
  date:     { type:Date,   required: true, default: Date.now }
})

module.exports = Post

// now you have a model you can get with require.You can use it to interact with the database.
