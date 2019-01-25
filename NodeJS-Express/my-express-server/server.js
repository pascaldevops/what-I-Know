//jshint esversion: 6

// Create an express server
const express = require('express');
const app = express();

// The location and stuff my server is serving
app.get('/', function(req, res) {
  res.send('<h1>Hello World!!!</h1>');
});

app.get('/contact', function(req, res) {
  res.send('<h3>Contact me at done@gmail.com</h3>');
});

app.get('/about', function(req, res) {
  res.send('<p>I am an aspiring web developer. I am passionate about robots.</p>');
});

// My server is listening on port 3000
app.listen(3000, function() {
  console.log('Server started on port 3000');
});
