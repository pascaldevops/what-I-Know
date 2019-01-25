//jshint esversion: 6

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

// route
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

// app.post('/', function(req, res) {
//   const api = `https://apiv2.bitcoinaverage.com/indices/global/ticker/${req.body.crypto}${req.body.fiat}`;
//   request(api, function(error, response, body) {
//     const tickerData = JSON.parse(body);
//     res.send(`<h1>The price of bitcoin is ${tickerData.last} ${req.body.fiat}</h1>`)
//   });
// });

app.post('/', function(req, res) {
  const crypto = req.body.crypto;
  const fiat = req.body.fiat;
  const amount = req.body.amount;

  const options = {
    url: 'https://apiv2.bitcoinaverage.com/convert/global',
    method: 'GET',
    qs: {
      from: crypto,
      to: fiat,
      amount: amount
    }
  };

  request(options, function(error, response, body) {
    const tickerData = JSON.parse(body);
    const price = tickerData.price;
    res.write(`<p>The current date is: ${tickerData.time}</p> `);
    res.write(`<h1>${options.qs.amount} ${options.qs.from} is currently worth  ${price} ${options.qs.to} </h1>`);
    res.send();
  });
});

app.listen(3000, function() {
  console.log('server is listening on port 3000');
});
