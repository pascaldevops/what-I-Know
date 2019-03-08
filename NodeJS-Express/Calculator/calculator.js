//jshint esversion: 6

// Load the following modules
const express = require('express')
const bodyParser = require('body-parser')

// create an express application
const app = express()

// body-parser: cut out the entire body of an incoming request. Makes the body available to req.body
// urlencoded: parse the text as URL encoded data so you can have access to the form data
app.use(bodyParser.urlencoded({ extended: true }))

// Create a home route
app.get('/', function(req, res) {
  // send index.html to the browser
  // __dirname gives you the current path of the index.html file
  res.sendFile(__dirname + '/index.html')
})

// to handle post requests from client
app.post('/', function(req, res) {
  const num1 = parseInt(req.body.num1)
  const num2 = parseInt(req.body.num2)
  const result = num1 + num2
  res.send(`Result is ${result}`)
})

// our app is listen on port 3000
app.listen('3000', function() {
  console.log('Calculator app started')
})
