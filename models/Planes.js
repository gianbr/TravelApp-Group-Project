const mongoose = require("mongoose");

var PlainSchema = new mongoose.Schema({
  title: String,
  location: String,
  city: String,
  price: Number,
  images: [String],
  comments: [{ body: String }],
  stock: Number,
  score: Number,
  included: String,
  description: String,
  date: [String],
});

var Plain = mongoose.model("Plain", PlainSchema);

module.exports = Plain;
