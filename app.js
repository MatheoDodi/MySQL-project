const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const faker = require('faker');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
  res.send(faker.name.findName());
});

app.listen(3000, () => console.log('Server is now running on port 3000'));
