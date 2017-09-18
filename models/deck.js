const mongoose = require("mongoose");
const findOrCreate = require("mongoose-find-or-create");

const deckSchema = new mongoose.Schema({
  userid: Number,
  cards: [String]
});

const Deck = mongoose.model("Deck", deckSchema);
module.exports = Deck;
