const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  token: String,
  games: [String]
});

const User = mongoose.model("User", userSchema);
module.exports = User;
