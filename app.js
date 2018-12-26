const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const faker = require('faker');

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/static', express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', { test: 'Working bruh' });
});

app.post('/success', (req, res) => {
  console.log(req.body);
  res.send('Success!');
});

app.listen(3000, () => console.log('Server is now running on port 3000'));
