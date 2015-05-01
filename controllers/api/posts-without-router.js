/*
Chris Samuel
ksamuel.chris@gmail.com
Breaking out /API/POSTS

*/

var Post  = require('../../models/post')
// added module exports and added the whole bit of code into a function
// that expects an app argument.

module.exports = function(app){
  // wrap the entire post code and call it from server.
  app.get('/api/posts', function(req,res,next){
    Post.find()
    .sort('-date')
    .exec(function(err,posts){
      if(err){return next(err)}
      res.json(posts)
    })
  })


  app.post('api/posts',function(req,res,next){
    var post = new Post({
      username: req.body.username,
      body: req.body.body
    })
    post.save(function(err,post){
      if (err) { return next(err) }
      res.json(201,post)
        })
  })



// end of wrapper
}
// this is a fine solution that has a side benefit allowing you to easily mock out the app object if you wanted to write a test. Still, Express offers a clearn solution through its
// router object. You can build a router object that acts like an app object and simply use it l
// like middleware to attach it to your app.
