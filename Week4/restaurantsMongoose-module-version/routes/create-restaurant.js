const express = require("express")
const app = express()
const Restaurant = require("../models/restaurant")
 
app.get("/create", (req, res)=> {
    res.render("create-restaurant")
})

app.get("/create-restaurant", (req, res)=> {
    
    let newRestaurant = {
        name: req.query.name,
        cuisine: req.query.cuisine,
        borough: req.query.borough
    }

    Restaurant.create(newRestaurant, (err)=> {
        if(err) res.status(500).send("Restaurant not created")
        else res.status(200).send("Restaurant created")
    })
})

module.exports = app