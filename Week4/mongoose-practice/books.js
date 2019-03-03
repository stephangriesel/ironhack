const mongoose = require('mongoose');
const books = require('./books.json');
var express = require('express');
var app = express();
const port = 3050;
const Book = require('./models/book');
const path = require('path')
const router = express.Router()

// Connect
mongoose.connect('mongodb://localhost/booksPractice');

// HBS
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));

// Routes

// --> Books Route
const bookRoute = require('./routes/book-route')
app.use('/', bookRoute);

// --> Default Route
const defaultRoute = require('./routes/default-route')
app.use('/', defaultRoute);


// app.post('/books/add', (req, res, next) => {
//     const {
//         author,
//         country,
//         imageLink,
//         language,
//         link,
//         pages,
//         title,
//         year
//     } = req.body;
//     const newBook = new Book(
//         {
//             author,
//             country,
//             imageLink,
//             language,
//             link,
//             pages,
//             title,
//             year
//         }
//     );
//     newBook.save()
//         .then((book) => {
//             res.redirect('/books');
//         })
//         .catch((error) => {
//             console.log(error);
//         })
// });


// app.post('/books/add', (req, res) => {

// });

// app.get('/book/:id', (req, res) => {
//     Book.find()
//         .then(books => {
//             res.render("books", { books })
//         })
//         .catch(error => {
//             console.log(error)
//         })
// });

// const newBook = new Book({
//     author: "Test3",
//     country: "Testville3",
//     imageLink: "Testing Image3",
//     language: "eWena Test3",
//     link: "www.test.com3",
//     pages: 12323,
//     title: "The Test4",
//     year: 2012
// });

// newBook.save((err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("book added")
//     }
// });



app.listen(port, () => console.log(`Praat maar, ek luister op: ${port}!`))
