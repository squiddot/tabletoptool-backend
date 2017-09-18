const mongoose = require("mongoose");
const findOrCreate = require("mongoose-find-or-create");

const gameSchema = new mongoose.Schema({
  users: [String],
  token: String,
  decks: [String]
});

const Game = mongoose.model("Game", gameSchema);
module.exports = Game;
