const mongoose = require('mongoose');
const books = require('./books.json');
var express = require('express');
var app = express();

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

//Export model
module.exports = mongoose.model('Book', AuthorSchema);