const express = require('express')
const app = express()
const port = 3008
const hbs = require("hbs")


// Set views 
// app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + "/views/partials");



app.get('/', (req, res, next) => {
  // send views/index.hbs for displaying in the browser
  let data = {
    name: "Ironhacker",
    bootcamp: "IronHack WebDev"
  };

  res.render('index', data);
});

app.get('/about', (req, res, next) => {
  // send views/index.hbs for displaying in the browser
  let aboutData = {
    firstName: "Stephan",
    location: "Amsterdam",
    gender:"male"
  };

  res.render('about', aboutData);
});





//

app.get('/', (req, res, next) => {

});



app.listen(port, () => console.log(`Listening on port ${port}!`))

// Inclass old:
// app.get('/', (req, res) => res.send('Hello World!'))

// app.get("/about", (req,res)=>{
//     res.send("hello from about")
// });

// app.get("/contact", (req,res)=>{
//     res.sendFile(dirname + "contact.html")
// });

// app.get("/", (req,res)=>{
//     res.send("/")
// });
