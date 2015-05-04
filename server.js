var express = require('express')
var bodyParser = require('body-parser')


var app = express()
app.use(bodyParser.json())

app.use('/api/posts',require('./controllers/api/posts'))
app.use(require('./controllers/static'))


  app.listen(3000, function(){
    console.log('Server listening on', 3000)
})







//
// var express = require('express')
// var bodyParser = require('body-parser')
//
// var app = express()
// app.use(bodyParser.json())
//
// app.use('/',require('./controllers/api/posts'))
// app.use('/',require('./controllers/static'))
// // equivalent to: app.use('/', require('./controllers/static'))
//
//
//   require('./controllers/api/posts')(app)
//
//
// app.listen( 3000,function(){
//   console.log('Server listening on', 3000)
// })
