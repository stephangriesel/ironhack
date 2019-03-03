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

router.get("/books/add", (req, res, next) => {
    res.render("book-add")
});

router.post('/books/add', (req, res, next) => {
    const {
        author,
        country,
        imageLink,
        language,
        link,
        pages,
        title,
        year
    } = req.body;
    const newBook = new Book(
        {
            author,
            country,
            imageLink,
            language,
            link,
            pages,
            title,
            year
        }
    );
        newBook.save()
        .then((book) => {
            res.redirect('/books');
        })
        .catch((error) => {
            console.log(error);
        })

});

// Book.find({}, (err, books) => {
//     books.forEach((book) => {
//         console.log(" --> book: ", book.title);
//     });
// });

const Book = require('../models/book');

module.exports = router;