const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

//Models
const User = require('../models/user');

// SIGNUP

router.post("/users", (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;
    if (firstname === "" || password === "") {
      res.send("enter required fields please");
      return;
    } bcrypt.hash(password, saltRounds).then(hash => {
      let newUser = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: hash
      }
  
      return newUser;
  
    }).then(newUser => {
      User.create(newUser)
      res.send("success")
    })
      .catch(error => {
        console.log(error);
      })
  });

// LOGIN

router.post('/login', function (req, res) {
    User.findOne({ email: req.body.email }, function (err, user) {
      if (!user) {
        res.send('invalid');
      } else {
        if (bcrypt.compare(req.body.password, user.password)) {
          // set cookie with user data
          req.session.user = user;
          res.cookie("email", req.body.email, { signed: true }); 
          res.cookie("userId", user._id, { signed: true }); 
          res.send('success');
        } else {
          res.render('login', { error: 'Invalid credentials' })
        }
      }
    })
  });
  
  router.get('/login', (req, res) => {
    if (req.session.currentUser) {
      req.session((err) => {
        res.render('', { newMessage: true })
      })
    } else res.render("login")     
  });
  
  router.get('/logout', function (req, res) {
    res.clearCookie('email'); 
    res.clearCookie('userId'); 
    req.session.destroy();
    res.redirect('/');
  });

module.exports = router;