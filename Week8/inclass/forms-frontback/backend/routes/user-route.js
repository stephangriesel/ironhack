const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//Models
const User = require('../models/user');

// 1. Route working
// router.post('/users', (req, res, next) => {
//     res.send('test');
// });

router.post('/users', (req, res, next) => {
    User.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password
    })
        .then(response => {
            res.json(response);
        })
        .catch(err => {
            res.json(err);
        })
});

// router.post('/newuser', (req, res, next) => {
//     User.create({
//       firstname: this.state.firstname,
//       lastname: this.state.lastname,
//       email: this.state.email,
//       password: this.state.password
//     })
//     .then(response => {
//       res.json(response);
//     })
//     .catch(err => {
//       res.json(err);
//     })
//   });

module.exports = router;