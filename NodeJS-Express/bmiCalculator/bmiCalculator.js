//jshint esversion: 6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

// html page client wants
app.get('/bmiCalculator', function(req, res) {
  // send index.html to the server
  res.sendFile(__dirname + '/bmiCalculator.html');
});

// Send the css file as well
app.get('/style.css', function(req, res) {
  res.sendFile(__dirname + '/style.css');
});

app.post('/bmiCalculator', function(req, res) {
  const weight = parseFloat(req.body.weight);
  const heightInInches1 = parseFloat(req.body['height-feet']) * 12;
  const heightInInches2 = parseFloat(req.body['height-inch']);
  const result = (weight*703) / Math.pow((heightInInches1 + heightInInches2), 2);

  res.send(`Your BMI is ${result.toFixed(2)}`);
});

// The port the server is listening for requests
app.listen(3000, function() {
  console.log('Server listens on port 3000');
});
