/*
this file is created that helps delivers the angular app.

Chris Samuel
ksamuel.chris@icloud.com

/controllers/static.js

*/

//store the express router object into a variable called router.
var router  = require('express').Router()

router.get('/', function(req,res){
  res.sendfile('layouts/posts.html')
})

module.exports = router

  // use this in server.js

  //   app.use(require('./controllers/static'))
    //  this is also equivalent to app.use(require('./controllers/static'))
