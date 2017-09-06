const express = require('express');
const bodyParser = require('body-parser');
const Recipe = require('./model');

const server = express();
server.use(bodyParser.json());

server.get('/recipes', (req, res) => {
  Recipe.find({}, (err, recipe) => {
    if (err) {
      res.send(err);
    } else {
      res.send(recipe);
    }
  });
});

server.post('/newrecipe', (req, res) => {
  const recipe = new Recipe(req.body);
  recipe.save((err, newRecipe) => {
    if (err) {
      res.send(err);
      return;
    }
    res.send(newRecipe);
  });
});

module.exports = server;
