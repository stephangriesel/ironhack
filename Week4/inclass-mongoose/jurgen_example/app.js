//const app = require("express")()
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const Schema = mongoose.Schema;

app.set("view engine", "hbs")


mongoose.connect('mongodb://localhost/restaurants', { useNewUrlParser: true }, function(err) {
    if(err) console.log("ERROR ERROR", err)
    else console.log("Connected")
});

const restaurant = mongoose.model("restaurants",
    new Schema({
        address: Object,
        borough: String,
        cuisine: String,
        grades: Array,
        name: String,
        restaurant_id: String
    })
  )

  app.get("/all-restaurants", (req, res)=> {
    restaurant.find({cuisine: "Italian"}, (err, restaurants)=> {

        if(err) res.send(error)
        else res.render("restaurants", {restaurants: restaurants})
    })

  })

  app.listen(3000, ()=> {
      console.log("Listening")
  })
  