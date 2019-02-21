//const app = require("express")()
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const Schema = mongoose.Schema;

app.set("view engine", "hbs")


mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true }, function(err) {
    if(err) console.log("ERROR ERROR", err)
    else console.log("Connected")
});

const testSchema = mongoose.model("test",
    new Schema({
        name: String,
        age: String,
        place: String,
    })
  )

var User = mongoose.model("User", testSchema)

User.create({
  name: "Jannie",
  age: "88",
  place: "Johannesburg"
}, function(err, user){
  if(err){
    res.redirect("/error")
    return console.log(err)
  }
  else {
    loggedInUser = user;
  }
})

  app.get("/", (req, res)=> {
    // res.send("Test");
    test.find({place: true }, (err, test)=> {

        if(err) res.send(error)
        else res.render("test", {test})
    })

  })

  app.listen(3010, ()=> {
      console.log("Listening")
  })
  