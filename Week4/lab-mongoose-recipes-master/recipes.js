// Iteration 1: Create schema DONE
// Iteration 2: Create recipe DONE
// Iteration 3: 

const mongoose = require('mongoose');
const express = require("express")
const app = express()
const Schema = mongoose.Schema;
const data = require('./data.js');


// Connect to server
mongoose.connect('mongodb://localhost/recipeApp')
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });

// Routes
app.get('/', function (req, res) {
  res.send('Test2')
});

// Set up schema
var recipeSchema = new mongoose.Schema({
  title: String,
  level: String,
  ingredients: Array,
  cuisine: String,
  dishType: String,
  image: String,
  duration: Number,
  creator: String,
  created: Date
});

// Set up model
var Recipe = mongoose.model('Recipe', recipeSchema);

var macAndCheeseAgain = new Recipe ({
  title: 'Mac and Cheese Again',
  level: 'Easy Peasy',
  ingredients: ["macoroni", "cheese", "milk", "eggs"],
  cuisine: 'American',
  dishType: 'Comfort',
  image: 'img/maccheese.jpeg',
  duration: 30,
  creator: 'Adam & Eve',
  created: 'Year 0',
});

Recipe.create(macAndCheeseAgain, (err) => {
  // console.log("recipe not added")
})
console.log(macAndCheeseAgain.title);

app.listen(3010, () => {
  console.log("Listening")
});