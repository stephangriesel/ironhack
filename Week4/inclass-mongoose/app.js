const express = require('express')
const app = express()
const mongoose = require('mongoose');
const restaurantSchema = mongoose.Schema;

// Connect to DB
mongoose.connect('mongodb://localhost:3000/restaurants', { useNewUrlParser: true } );

// Verify connection
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   // we're connected!
// });

// Define schema
// var restaurants = new mongoose.Schema({
//     address: Object,
//     borough: string,
//     cuisine: string,
//     grades: Array,
//     name: string,
//     restaurant_id: string
//   });

app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)