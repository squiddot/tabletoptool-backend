const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  type: String,
  name: String,
  user: String,
  userid: Number,
  notes: Text
});

const Card = mongoose.model("Card", userSchema);
module.exports = Card;
