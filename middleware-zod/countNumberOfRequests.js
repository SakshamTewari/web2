const express = require('express');

const app = express();
//rate limiting

let numberOfRequests = 0;

function calculateRequests(req, res, next) {
  numberOfRequests++;
  console.log(numberOfRequests);
  next();
}

app.get('/health-checkup', calculateRequests, (req, res) => {
  console.log('Get checkup done');
  res.send({ msg: 'Thank you' });
});

app.listen(3000);
