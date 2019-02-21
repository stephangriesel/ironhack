var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/exampleApp', { useNewUrlParser: true }, function (err) {
    if (err) console.log("ERROR ERROR", err)
    else console.log("Connected")
});
 
app.listen(3000)

