const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require('bcrypt');
const saltRounds = 10;
var bodyParser = require('body-parser');


// Parser 
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// Signup
router.post("/signup", (req, res) => {
  if (name === "" || password === "") {
    res.render("auth/signup", {
      errorMessage: "Indicate a username and a password to sign up"
    });
    return;
  }

  const name = req.body.name;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const password = req.body.password;

  User.create({
    name, lastname, password,email
  })
    .then(() => {
      res.redirect("/login");
    })
    .catch(error => {
      console.log(error);
    })
});

// Another approach:

// router.get('/signup', (req, res) => {
//   res.render('signup')
// })

// router.post('/signup', (req, res) => {
//   var user = {
//       username: req.body.username,
//       lastname: req.body.lastname,
//       email: req.body.email,
//       password: req.body.password
//   }
//   bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
//       user.password = hash
//       User.create(user)
//   });

//   res.render('signedin');
// })

//Login
// router.get('/login', (req, res) => {
//   if(req.signedCookies.email) {
//     res.redirect('profile')
//   } else {
//     res.render('login')
//   }
// })

// router.post("/login",(req,res)=>{
//     User.findOne({email:req.body.email},(err,user)=>{
//       if(err) res.send("error")
//       else if (!user){ res.send("Wrong login information")}
//       else {
//         bcrypt.compare(req.body.password, user.password, (err, equal) => {
//           if(equal){
//             res.cookie("email", req.body.email, {signed:true})
//             res.redirect("profile")
//           }
//           else {
//             res.send("Wrong password")
//           }
//       });
//       }
//     })
//   })

// router.get('/profile', (req, res) => {
//   User.findOne({email: req.signedCookies.email}, (err, user) => {
//     if(req.signedCookies.email) {
//     res.render('profile', {user})
//   } else {
//     res.redirect('login')
//   }
//   })
// })


module.exports = router;