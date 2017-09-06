const mongoose = require('mongoose');
const { Schema } = mongoose;

const RecipeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  ingredients: [{ type: String, required: true}],
  steps: [String],
});

RecipeSchema.methods.getName = function() {
  return this.name;
};

RecipeSchema.statics.getAllRecipes = function(cb) {
  Recipe.find({}, (err, recipe) => {
    if (err) {
      return cb(err);
    }
    cb(recipe);
  });
};

const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = Recipe;
