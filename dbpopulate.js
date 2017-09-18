const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
require("es6-promise").polyfill();
require("isomorphic-fetch");

function storeJson(document, nameOfCollection) {
  const mongoUrl = "mongodb://localhost:27017/tabletopdb";
  MongoClient.connect(mongoUrl, function(err, db) {
    if (err) {
      throw err;
    } else {
      // console.log("Successfully connected to the database")
    }
    db.collection(nameOfCollection).insert(document);
  });
}

function fetchAll(name) {
  fetch(`http://www.dnd5eapi.co/api/${name}`)
    .then(r => r.json())
    .then(json => {
      for (var i = 0; i < json.results.length; i++) {
        const url = json.results[i].url;

        fetch(url)
          .then(r => r.json())
          .then(json => {
            console.log(`fetched ${json.name}`);
            return json;
          })
          .then(json => storeJson(json, name));
      }
    });
}

// fetchAll("monsters")
// fetchAll("spells")
// fetchAll("skills")
// fetchAll("ability-scores")
// fetchAll("proficiencies")
// fetchAll("languages")
// fetchAll("classes")
// fetchAll("subclasses")
// fetchAll("features")
// fetchAll("races")
// fetchAll("subraces")
// fetchAll("equipment")
// fetchAll("conditions")
// fetchAll("damage-types")
// fetchAll("magic-schools")
