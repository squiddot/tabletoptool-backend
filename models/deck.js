const mongoose = require("mongoose");
const findOrCreate = require("mongoose-find-or-create");

const deckSchema = new mongoose.Schema({
  userid: Number,
  cards: [String]
});

deckSchema.plugin(findOrCreate);

const Deck = mongoose.model("Deck", deckSchema);
module.exports = Deck;
