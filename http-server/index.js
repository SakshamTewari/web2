const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
// console.log(app);

app.use(bodyParser.json()); // use to get body value from req.body in json

app.get('/', (req, res) => {
  const message = req.query.message;
  res.send(message);
  console.log(message);
});

app.post('/web2', (req, res) => {
  const message = req.body.message;
  res.send(message);
  console.log(message);
});

app.listen(port, () => {
  console.log('Listening on port');
});
