const express = require('express');
const router = express.Router();

router.get('/books', (req, res) => { 
    Book.find()
        .then(books => {
            res.render("books", { books })
        })
        .catch(error => {
            console.log(error)
        })
});

router.get("/books/add", (req, res) => {
    res.render("book-add")
});

// Book.find({}, (err, books) => {
//     books.forEach((book) => {
//         console.log(" --> book: ", book.title);
//     });
// });

const Book = require('../models/book');

module.exports = router;