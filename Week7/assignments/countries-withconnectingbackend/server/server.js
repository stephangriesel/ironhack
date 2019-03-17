var express = require('express');

var app = express();
var countries = require('./countries.json');
var cors = require("cors");
app.use(cors());


app.get('/', function (req, res) {
  res.json(countries)
})
 
app.listen(3001)

