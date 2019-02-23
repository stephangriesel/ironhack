const mongoose = require('mongoose');
const express = require("express")
const app = express()
// const recipeSchema   = mongoose.Schema;
const data = require('./data.js');


// Connect to server
mongoose.connect('mongodb://localhost/recipeApp')
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });

  app.get("/", (req, res)=> {
    res.send("Test");
    // test.find({place: true }, (err, test)=> {

    //     if(err) res.send(error)
    //     else res.render("test", {test})
    // })

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

  // Set up model
  var Recipe = mongoose.model('recipeCollection', recipeSchema);

  var macAndCheese = new Recipe({ 
    title: 'Mac and Cheese', 
    level: 'Easy Peasy', 
    ingredients: ["macoroni", "cheese", "milk", "eggs"], 
    cuisine: 'American', 
    dishType: 'Comfort', 
    image: 'img/maccheese.jpeg', 
    duration: 30 + "min", 
    creator: 'Adam & Eve', 
    created: 'Year 0', 
  });
  console.log(macAndCheese.title); 

  app.listen(3010, ()=> {
    console.log("Listening")
});