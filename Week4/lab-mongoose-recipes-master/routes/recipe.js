const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Recipe = require("../models/Recipe.model"); 
const hbs = require('hbs');
const app = express();



// get recipe route
// router.get('/recipes', (req, res) => {
//     res.render('recipes/index')
// })

// Serve index.html file
// router.get('/', (req,res) => {
//     res.sendFile(__dirname + '/index.html')
//   });

// router.post('/recipes', (req, res) => {
//     // const { title, level, ingredients, cuisine, dishType, image, duration, creator, created } = req.body;
//     const newRecipe = new Recipe({
//         title,
//         level,
//         ingredients,
//         cuisine,
//         dishType,
//         image,
//         duration,
//         creator,
//         created
//     })
//     newRecipe.save()
//     .then( result => {
//         res.redirect('recipes', {showRecipesData : result})
//     })
//     .catch(() => {
//         res.send("error is found")
//     })
// })

// router.get('/recipes/add', (req, res) => {
//     res.render('recipes/add')
// })

// router.get('/success', (req, res) => {
//     res.render('success')
// });

// router.get('/recipes/:id/edit', (req, res) => {
//     Recipe.findById(req.params.id)
//     .then( result => {

//     })
// })

// router.post('/test', (req, res) => {
//     console.log('Hellooooooooooooooooo!')
//   })


module.exports = router;