const mongoose = require("mongoose");

var PlainSchema = new mongoose.Schema({
  id: Number,
  title: String,
  location: String,
  price: Number,
  images: [String],
  comments: [{ body: String }],
  stock: Number,
  score: Number,
  included: [{ name: String, body: String }],
  description: { title: String, body: String },
});

var Plain = mongoose.model("Plain", PlainSchema);

module.exports = Plain;
