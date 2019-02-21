const express = require('express');
const app = express();
const mongoose = require('mongoose');
const hbs     = require('hbs');

// Handlebar Views
app.set("view engine", "hbs");
app.set("views", __dirname +  "/views");

// Handlebars register celebrities view
hbs.registerPartials(__dirname + "/views/celebrities");

// Connect database
mongoose.connect('mongodb://localhost/moviesApp', { useNewUrlParser: true }, function (err) {
    if (err) console.log("ERROR ERROR", err)
    else console.log("Connected to port3000") 
});

const port = app.listen(3000);
 
// Routes
app.get('/', function (req, res) {
  res.send( 'Test')
});

app.get("/celebrities" , (req, res) => {
  // Call model with find method
  Celebrity.find({},function (err, newCeleb) {
    var celebResult = [];
    if (err) return console.error(err);
    console.log(newCeleb);
    res.render('index', {celebs: newCeleb});
  })

});


// const celebritiesRoute = require("./routes/celebritiesRoute.js");

// app.use("/celebrities", celebritiesRoute )

// Create schema
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
const myCelebritySchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String
});

// Compiling schema into a model
const Celebrity = mongoose.model('Celebrity', myCelebritySchema);

// Create document 
var newCeleb = {
  name: "Mickey", 
  occupation: "Not sure", 
  catchPhrase: "Aaaaaah"
}
Celebrity.create(newCeleb, (err)=> {
})

