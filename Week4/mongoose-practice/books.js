const mongoose = require('mongoose');
const books = require('./books.json');
var express = require('express');
var app = express();
const router = express.Router()
const port = 3050;
const Book = require('./models/book');

// Routes

// --> Default Route
app.get('/', function (req, res) {
    res.send('hello world')
})

// --> Books Route
router.get('/books', (req, res, next) => {

});

// Connect
mongoose.connect('mongodb://localhost/booksPractice');

const newBook = new Book({
    author: "Test3",
    country: "Testville3",
    imageLink: "Testing Image3",
    language: "eWena Test3",
    link: "www.test.com3",
    pages: 12323,
    title: "The Test4",
    year: 2012
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

