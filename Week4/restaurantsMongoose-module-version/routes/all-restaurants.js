const express = require("express")
const app = express()
const Restaurant = require("../models/restaurant")

app.get("/all-restaurants", (req, res)=> {
    Restaurant.find({}, (error, queryResults)=> {
        if(error) res.status(500).send(error)
        else res.render("restaurants", {restaurants: queryResults})
    })
})

module.exports = app