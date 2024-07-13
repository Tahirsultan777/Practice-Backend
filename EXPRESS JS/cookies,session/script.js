const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/profile', function (req, res) {
    res.send('profile')
  })
  app.get('/about', function (req, res) {
    res.send('about')
  })
app.listen(3000)