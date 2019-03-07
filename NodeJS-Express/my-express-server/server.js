//jshint esversion: 6

// Loading the express module
const express = require('express')

// Create an express application
const app = express()

// create a (root) route to the home page
// req is the request the express server receives from the user via the browser
// res is the response the server sends backs to the browser
// The user type: localhost:3000
// The express server sends back: Hello World!!!
app.get('/', function(req, res) {
  res.send('<h1>Hello World!!!</h1>')
})

// creatye a contact route
app.get('/contact', function(req, res) {
  res.send('<h3>Contact me at done@gmail.com</h3>')
})

// create an about route
app.get('/about', function(req, res) {
  res.send(
    '<p>I am an aspiring web developer. I am passionate about robots.</p>'
  )
})

// set the express server to listen on on port 3000 for GET request
app.listen(3000, function() {
  console.log('Server started on port 3000')
})
