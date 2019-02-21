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

const port = app.listen(3000);


