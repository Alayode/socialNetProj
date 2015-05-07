var express    = require('express')
var bodyParser = require('body-parser')
var logger     = require('morgan')

var app = express()
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(require('./controllers/api/posts.js'))
app.use(require('./controllers/api/index.js'))
app.use(require('./controllers/static'))


// /Applications/MAMP/htdocs/socialNetProj/controllers

// app.get('/api/posts', function (req, res, next) {
//   Post.find(function (err, posts) {
//     if (err) { return next(err) }
//     res.json(posts)
//   })
// })
//
// app.post('/api/posts', function (req, res, next) {
//   var post = new Post({
//     username: req.body.username,
//     body:     req.body.body
//   })
//   post.save(function (err, post) {
//     if (err) { return next(err) }
//     res.status(201).json(post)
//   })
// })
//

app.get('/',function(req,res){
  res.sendfile('layouts/posts.html')
})

app.get('/assets',function(req,res){
  res.sendfile('assets/app.js')
})

app.listen(3000, function () {
  console.log('server listening on %d', 3000)
})
