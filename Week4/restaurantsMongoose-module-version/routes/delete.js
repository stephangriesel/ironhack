const express = require("express")
const app = express()
const Restaurant = require("../models/restaurant")

app.get("/delete", (req, res)=> {

    Restaurant.findById(req.query.restaurantId, (err, restaurant)=> {
        restaurant.remove((err)=> {
            if(err) res.send("Restaurant not removed")
            else res.send("Restaurant removed from list")
        })
    })
})

module.exports = app