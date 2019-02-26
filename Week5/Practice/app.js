var express = require('express');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
var port = 3018;
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var path = require("path");
var app = express();

// Connect to server
mongoose.connect('mongodb://localhost/authPract')
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });

// Cookie Parser
app.use(cookieParser("this-is-a-secret"));

// Define auth route
var router = require('./routes/auth');
app.use('/', router);

// Routes
router.get("/", (req, res, next) => {
  res.render("home");
});

router.get("/signup", (req, res) => {
  res.render("signup")
});

router.get("/login", (req, res) => {
  res.render("login")
});

// HBS
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));

// Parser 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// App Listen
app.listen(port, () => {
  console.log("Listening on " + port);
});





