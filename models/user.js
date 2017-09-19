const mongoose = require("mongoose");
const findOrCreate = require("mongoose-find-or-create");

const userSchema = new mongoose.Schema({
  username: String,
  token: String,
  games: [String]
});

userSchema.plugin(findOrCreate);

const User = mongoose.model("User", userSchema);
module.exports = User;
