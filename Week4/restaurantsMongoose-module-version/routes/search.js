const express = require("express")
const app = express()
const Restaurant = require("../models/restaurant")

app.get("/search", (req, res)=> {
    res.render("search")
})

app.post("/search", (req, res)=> {
    debugger
    Restaurant.find({cuisine: req.body.cuisine}, (error, queryResults)=> {
        if(error) res.status(500).send(error)
        else res.render("restaurants", {restaurants: queryResults})
    })
})

module.exports = app