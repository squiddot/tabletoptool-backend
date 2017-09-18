const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const passport = require('passport')
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const databaseURL = process.env.DATABASE || 'mongodb://localhost:27017/tabletopdb'
const Monster = require("./models/monster")
mongoose.connect(databaseURL);

app.get("/monsters/name/:name", (req, res) => {
  console.log('am I crazy?')
  Monster.find({name: req.params.name})
  .then(monster=> {
    res.json({
      monster: monster
    })
    console.log(monster)
  })
})

app.get("/monsters/index/:index", (req, res) => {
  console.log('am I crazy?')
  Monster.find({index: req.params.index})
  .then(monster=> {
    res.json({
      monster: monster
    })
  })
})

app.get("/api/classes/:name", (req, res) => {
  classes.find({name: req.params.name})
  .then(classes => {
    res.json({
      classes: classes
    })
  })
})

app.listen(3005, function(){
  console.log("here i go! zoom~ http://0.0.0.0:3005")
})
