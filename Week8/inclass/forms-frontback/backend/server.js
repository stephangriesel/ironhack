const express = require('express')
const app = express(); 
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// DB
mongoose.connect('mongodb://localhost/form')
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });

// CORS
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))

// MIDDLEWARE
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// GET USER ROUTE
app.use('/api', require('./routes/user-route'))

app.listen(3001, () => console.log('Listening on port 3001!'));