const mongoose = require('mongoose');
const books = require('./books.json');
var express = require('express');
var app = express();
const port = 3050;


// Routes

// --> Default Route
app.get('/', function (req, res) {
    res.send('hello world')
})

// --> Books Route
// router.get('/books', (req, res, next) => {

// });

// Connect
mongoose.connect('mongodb://localhost/booksPractice');

const Book = mongoose.model('books', {
    author: String,
    country: String,
    imageLink: String,
    language: String,
    link: String,
    pages: Number,
    title: String,
    year: Number
});

const newBook = new Book({
    author: "Test2",
    country: "Testville2",
    imageLink: "Testing Image2",
    language: "eWena Test2",
    link: "www.test.com2",
    pages: 1232,
    title: "The Test2",
    year: 2005
});

newBook.save((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("book added")
    }
});

Book.find({}, (err, books) => {
    books.forEach((book) => {
        console.log(" --> book: ", book.title);
    });
});

app.listen(port, () => console.log(`Praat maar, ek luister op: ${port}!`))

