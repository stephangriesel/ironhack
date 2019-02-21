const express = require('express')
const app = express()
const mongoose = require('mongoose');

// Connect database
mongoose.connect('mongodb://localhost/moviesApp', { useNewUrlParser: true }, function (err) {
    if (err) console.log("ERROR ERROR", err)
    else console.log("Connected to port3000") // Research port variable
});

const port = app.listen(3000);
 
// Routes
app.get('/', function (req, res) {
  res.send( 'Test')
})

// Create schema
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
const myCelebritySchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String
});

// Compiling schema into a model
const Celebrity = mongoose.model('Celebrity', mySchema);

// Create document
var newCeleb = {
  name: "Daffy", 
  occupation: "Bleh", 
  catchPhrase: "What what what"
}
Celebrity.create(newCeleb, (err)=> {
})


