//jshint esversion: 6
const express = require('express');
const bodyParser = require('body-parser');

// instantiate an Express object
const app = express();

// Parse HTTP request from client
app.use(bodyParser.urlencoded({extended: true}));

// html page client wants
app.get('/', function(req, res) {
  // send index.html to the server
  res.sendFile(__dirname + '/index.html');
});

// to handle post requests from client
app.post('/', function(req, res) {
  const num1 = parseInt(req.body.num1);
  const num2 = parseInt(req.body.num2);
  const result = num1 + num2;
  console.log(result);
  res.send(`Result is ${result}`);
});

app.listen('3000', function() {
  console.log('Calculator app started');
});
