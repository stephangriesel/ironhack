const mongoose = require("mongoose")
const Schema = mongoose.Schema

const restaurantSchema = new Schema({
    address: Object,
    borough: String,
    cuisine: String,
    grades: Array,
    name: String,
    restaurant: String
})

const Restaurant = mongoose.model("restaurants", restaurantSchema)

module.exports = Restaurant