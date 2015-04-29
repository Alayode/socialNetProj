var express = require('express')
var bodyParser = require('body-parser')
var Post = require('./models/post')


var app = express()
app.use(bodyParser.json())


app.get('/api/posts', function(req,res){
  res.json([
    {
      username:'battlerUshinomiya',
      body:'畜生おおぉ！'
    }
      ])
})

//tested code to serve Post in a reverse chronological order
app.get('api/posts',function(req,res,next){
  Post.find()
  .sort('-date')
  .exec(function(err,posts){
    if(err){ return next(err) }
    res.json(posts)
  })
})

app.post('/api/posts', function(req,res,next){
    var post = new Post({
      username: req.body.username,
      body: req.body.body
    })
    // Then you save that Post Model and return a JSON representation of the model to the user with the status code of 201
    post.save(function(err,post){
      if (err) {return next(err) }

      res.json(201,post)
    })
})

app.get('/', function(req,res){
  res.sendfile('layouts/posts.html')
})

// /Applications/MAMP/htdocs/socialNetProj/models
// /Applications/MAMP/htdocs/socialNetProj/server.js
// first you require the post model
var Post = require('./models/post')
// when the request comes in you build up a new instance of the Post model with the new Post()


app.listen(3000,function() {
  console.log('Server is running on' , 3000)
})
