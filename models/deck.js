const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userid: Number
});

const User = mongoose.model("User", userSchema);
module.exports = User;
