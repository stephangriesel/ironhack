var express = require('express')
var app = express()
 
// Define routes
app.get('/', function (req, res) {
  res.send( 'Test')
})

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/moviesApp', { useNewUrlParser: true }, function (err) {
    if (err) console.log("ERROR ERROR", err)
    else console.log("Connected to port3000") // Research port variable
});

/*
Mongoose documentation overview: Defining a model

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
const BlogPost = new Schema({
  author: ObjectId,
  title: String,
  body: String,
  date: Date
});

Source: https://www.npmjs.com/package/mongoose

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
const mySchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String
});

Accessing the model
Once we define a model through mongoose.model('ModelName', mySchema), we can access it through the same function

const Celebrity = mongoose.model('Celebrity', mySchema);

 */

const port = app.listen(3000);


