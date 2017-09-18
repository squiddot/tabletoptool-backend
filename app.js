const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const passport = require("passport");
const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
require("dotenv").config();
var GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

const databaseURL =
  process.env.DATABASE || "mongodb://localhost:27017/tabletopdb";
const Card = require("./models/card");
const Deck = require("./models/deck");
const Game = require("./models/game");
const User = require("./models/user");
const Monster = require("./models/monster");

mongoose.connect(databaseURL);
app.use(bodyParser.json());

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3005/auth/google/callback"
    },
    function(accessToken, refreshToken, profile, done) {
      console.log("oh hai", profile);
      User.findOrCreate({ googleId: profile.id }, function(err, user) {
        console.log({ err, user });
        return done(err, user);
      });
    }
  )
);

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["https://www.googleapis.com/auth/plus.login"]
  })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function(req, res) {
    res.redirect("/loggedin");
  }
);

app.get("/loggedin", (req, res) => {
  console.log("woop! logged in!");
  res.end();
});

app.get("/secret", (req, res) => {
  console.log(req);
  res.json({ user: req.user, ok: true, code: 1234567890 });
});

app.get("/monsters/name/:name", (req, res) => {
  console.log("am I crazy?");
  Monster.find({ name: req.params.name }).then(monster => {
    res.json({
      monster: monster
    });
    console.log(monster);
  });
});

app.get("/monsters/index/:index", (req, res) => {
  console.log("am I crazy?");
  Monster.find({ index: req.params.index }).then(monster => {
    res.json({
      monster: monster
    });
  });
});

app.get("/api/classes/:name", (req, res) => {
  classes.find({ name: req.params.name }).then(classes => {
    res.json({
      classes: classes
    });
  });
});

// app.post("/user/new", (req, res) => {
//   const username = req.body.username;
//   const password = req.body.password;
//   const user = new User();
//   user.username = username;
//   user.password = password;
//   user
//     .save()
//     .then(user => {
//       res.status(201).json({ user: user });
//     })
//     .catch(error => {
//       res.status(422).json({ message: error });
//     });
// });

app.listen(3005, function() {
  console.log("here i go! zoom~ http://0.0.0.0:3005");
});
