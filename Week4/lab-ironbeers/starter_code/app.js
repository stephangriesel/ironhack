
const express = require('express');
const hbs     = require('hbs');
const app     = express();
const path    = require('path');
const beers   = require('./beers.json');
// console.log(beers);
// const punkAPI = new PunkAPIWrapper();


app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));

// Partials
hbs.registerPartials(__dirname + "/views/partials");

app.get('/index', (req, res, next) => {
  res.render('index');
});

app.get('/beers', (req, res, next) => {

  res.render('beers', {beers: beers});
});

app.get('/randombeers', (req, res, next) => {

  res.render('randombeers');
});

app.listen(3020);

console.log("hello from beers,listening on 3020")





