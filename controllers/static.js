/*
this file is created that helps delivers the angular app.

Chris Samuel
ksamuel.chris@icloud.com

/controllers/static.js

*/

var express = require('express')

//store the express router object into a variable called router.
var router  = express.Router()

router.get('/', function(req,res){
  res.sendfile('layouts/posts.html')
})

// __dirname is a special Node variable that points to the current file's directory.
// here __dirname == /controllers/
// router.use(express.static(__dirname + '/../assets'))


module.exports = router

  // use this in server.js

  //   app.use(require('./controllers/static'))
    //  this is also equivalent to app.use(require('./controllers/static'))
