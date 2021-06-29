const mongoose = require("mongoose");

// AUTHOR SCHEMA
const AuthorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 40,
  },
  age: {
    type: Number,
    minlength: 10,
    maxlength: 100,
  },
});

module.exports = new mongoose.model("Author", AuthorSchema);
