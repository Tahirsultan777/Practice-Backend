const express = require('express')
const app = express()

app.use(function (req, res, next) {
  console.log('midleware')
  next();
})

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/profile', function (req, res) {
  res.send('profile')
})
app.get('/home', function (req, res,next) {
  return next(new Error("wrong"))
})

app.use(function (err,req, res, next){
  console.error(err.stack)
  res.status(500).send('something wrong')
}) 

app.listen(3000)