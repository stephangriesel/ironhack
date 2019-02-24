// Iteration 1: Create schema DONE
// Iteration 2: Create recipe DONE
// Iteration 3: Insert many DONE

const mongoose = require('mongoose');
const express = require("express");
const app = express();
const Schema = mongoose.Schema;
const data = require('./data');


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
var Recipe = mongoose.model('recipeSaved', recipeSchema); 

// Insert one recipe

// var createRecipe = new Recipe(
//   {
//     title: 'Fish and chips',
//     level: 'Easy Peasy',
//     ingredients: ["fish", "potatoes", "ketchup"],
//     cuisine: 'English',
//     dishType: 'Comfort',
//     image: 'img/maccheese.jpeg',
//     duration: 30,
//     creator: 'Viking',
//     created: '1200',
//   }
// );

// Recipe.create(createRecipe, (err) => {
//   console.log("recipe added")
// })

// Insert Many
Recipe.insertMany(data, (err) => {
  console.log();
});




app.listen(3010, () => {
  console.log("Listening")
});