const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
const Recipe = require('./model');
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');

describe('Recipe', () => {
  beforeEach(() => {
    sinon.stub(Recipe, 'find');
  });
  afterEach(() => {
    Recipe.find.restore();
  });
  describe('#getName()', () => {
    it('should return a string', () => {
      const recipe = new Recipe({
        name: 'Chocolate Cake',
        ingredients: ['flour', 'sugar', 'eggs', 'cocoa'],
        steps: ['Beat eggs', 'sift flour', 'Bake']
      });
      expect(typeof recipe.getName()).to.equal('string');
    });
    it('should return the name of the recipe', () => {
      const recipe = new Recipe({
        name: 'Chocolate Cake',
        ingredients: ['flour', 'sugar', 'eggs', 'cocoa'],
        steps: ['Beat eggs', 'sift flour', 'Bake']
      });
      expect(recipe.getName()).to.equal('Chocolate Cake');
    });
  });
  describe('#getAllRecipes()', () => {
    it('should return all recipes', () => {
      Recipe.find.yields(null, [{ name: 'chocolate cake' }]);
      Recipe.getAllRecipes((recipes) => {
        expect(recipes.length).to.equal(1);
        expect(recipes[0].name).to.equal('chocolate cake');
      });
    });
  });
});
