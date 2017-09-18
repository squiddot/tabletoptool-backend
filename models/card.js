const mongoose = require("mongoose");
const findOrCreate = require("mongoose-find-or-create");

const cardSchema = new mongoose.Schema({
  type: String,
  name: String,
  user: String,
  userid: Number,
  notes: String
});

const Card = mongoose.model("Card", cardSchema);
module.exports = Card;
