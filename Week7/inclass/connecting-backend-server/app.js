var express = require('express')
var app = express()
var students = require('./students.json');
var cors = require("cors")
app.use(cors())

app.get('/', function (req, res) {
  res.json(students);
})

 
app.listen(3001)