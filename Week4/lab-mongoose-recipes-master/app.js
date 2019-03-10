const mongoose = require('mongoose');
const express = require("express");
<<<<<<< HEAD
const bodyParser = require("body-parser");
const app = express();
=======

const bodyParser = require("body-parser");
>>>>>>> 8929f28f206415e53fc557d3aa876e41546f1491
const hbs = require('hbs')
const path = require('path')
const Schema = mongoose.Schema;
const data = require('./data');
const port = 3018;
<<<<<<< HEAD
const router = express.Router();;
=======


const app = express();
>>>>>>> 8929f28f206415e53fc557d3aa876e41546f1491

// Connect to server
mongoose.connect('mongodb://localhost/recipeApp')
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });

<<<<<<< HEAD
=======

>>>>>>> 8929f28f206415e53fc557d3aa876e41546f1491
// Middleware logic
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));

// Middleware bodyParser logic
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}))

<<<<<<< HEAD
// Routes Declaration
const recipeRoute = require('./routes/recipe')
app.use('/', recipeRoute);

// Routes Temp 
//Serve index.html file
router.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
  });

app.post('/recipeadd', (req, res) => {
  console.log(req.body);
  res.send("recipe added");
})

app.post('/recipesadd', (req,res) => {
  db.collection('submits').save(req.body, (err,result) => {
    if(err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})
=======

// Routes Declaration
// const indexRoute = require('./routes/index');
const recipeRoute = require('./routes/recipe')

// Using Routes
// app.use('/', indexRoute)
app.use('/', recipeRoute)
>>>>>>> 8929f28f206415e53fc557d3aa876e41546f1491

app.listen(port, () => {
  console.log("Listening on " + port);
});

<<<<<<< HEAD
module.exports = app;
=======
// module.exports = app;
>>>>>>> 8929f28f206415e53fc557d3aa876e41546f1491
