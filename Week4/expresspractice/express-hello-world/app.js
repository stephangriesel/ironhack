const express = require('express');
const hbs = require('hbs');

// We create our own server named app
// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));


// our first Route
// app.get('/', (req, res, next) => {
//   // send views/index.hbs for displaying in the browser
//   res.render('index');
// });

// app.get('/', (req, res, next) => {
//   let data = {
//     name: "Stephan",
//     bootcamp: "IronHack WebDev Amsterdam"
//   };

//   res.render('index', data);
// });

// app.get('/', (req, res, next) => {
//   let data = {
//     name: "Ironhacker",
//   };
//   res.render('index', data);
// });

app.get('/', (req, res, next) => {
  let data = {
    name: "Ironhacker",
    lastName: "Rocking it!"
  };
  res.render('index', data);
});

app.get('/cat', (req,res) => {
  res.render('cat');
})

// Handelbars
app.set('view engine', 'hbs');

  // Server Started
app.listen(3000, () => {
    console.log('My first app listening on port 3000!')
  });