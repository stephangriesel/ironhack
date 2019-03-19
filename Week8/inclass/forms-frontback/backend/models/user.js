var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Set up schema
var newUserSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', newUserSchema);
module.exports = User;