const express = require("express")
const app = express()
const mongoose = require("mongoose")
const bodyParser = require('body-parser')

app.set("view engine", "hbs")
app.use(bodyParser.urlencoded({ extended: false }))

mongoose.connect("mongodb://localhost/restaurants", (err)=> {
    if(err) console.log(err)
    else console.log("connected")
})

app.use("/", require("./routes/search.js"))
app.use("/", require("./routes/create-restaurant.js"))
app.use("/", require("./routes/all-restaurants.js"))
app.use("/", require("./routes/delete.js"))

app.listen(3000, ()=> {
    console.log("Listening")
})