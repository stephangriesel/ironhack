// Iteration 1: Create schema DONE
// Iteration 2: Create recipe DONE
// Iteration 3: Insert many DONE

const mongoose = require('mongoose');
const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const Schema = mongoose.Schema;
const data = require('./data');
var port = 3010;
var Recipe = require("./models/Recipe.model"); // modular approach

app.listen(port, () => {
  console.log("Listening on " + port);
});


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

// Show all recipes 
app.get("/recipes", function(req,res){
  console.log("getting all recipes");
  Recipe.find({})
  .exec(function(err,results){
    if(err) {
      res.send("error");
    } else {
      console.log(results);
      res.json(results);
    }
  })

})

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


// Insert one recipe
var createRecipe = new Recipe(
  {
    title: 'Mac and Cheese',
    level: 'Easy Peasy',
    ingredients: ["macoroni", "cheese"],
    cuisine: 'N/A',
    dishType: 'Comfort',
    image: 'img/maccheese.jpeg',
    duration: 30,
    creator: 'Viking',
    created: '1600',
  }
);

Recipe.create(createRecipe, (err) => {
  console.log("recipe added")
})

// Insert Many
Recipe.insertMany(data, (err) => {
  console.log();
})

// Update
// Recipe.findByIdAndUpdate(id, { _id: "5c7298acbd9e9f34addfb47c",})


