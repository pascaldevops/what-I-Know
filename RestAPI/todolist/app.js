//jshint esversion: 6

// Modules we are using for this app
const express = require('express');
const bodyParser = require('body-parser');
const todos = [];

// Creat an express app
const app = express();

// Tell our to se ejs - Template engine
app.set('view engine', 'ejs');

// Telling our app to use body parser
app.use(bodyParser.urlencoded({extended: true}));

// function that return the day of the week
const dayOfWeek = function() {

  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  };
  
  const today = new Date();
  return today.toLocaleDateString('en-US', options);
}

// route
app.get('/', function(req, res) {
  res.render('list', {kinfOfDay: dayOfWeek(), newTodo: todos});
});

app.post('/', function(req, res) {
  var todo = req.body.newTodo;
  todos.push(todo);
  res.redirect('/');
});

// Set the app to listen on port 3000
app.listen(3000, function() {
  console.log('server is listening on port 3000');
});
