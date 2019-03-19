const express = require('express')
const app = express(); 
const mongoose = require('mongoose');
const cors = require('cors');

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

// GET USER ROUTE
app.use('/api', require('./routes/user-route'))

app.listen(3001, () => console.log('Listening on port 3001!'));