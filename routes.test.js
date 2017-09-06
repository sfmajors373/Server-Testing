const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
const Recipe = require('./model');
const server = require('./server');

const chai = require('chai');
const expect = chai.expect;
const chaiHTTP = require('chai-http');

chai.use(chaiHTTP);

describe('/recipes', () => {
  // before each hook clears test database so that each test runs on a clear slate
  beforeEach((done) => {
    Recipe.remove({}, (err) => {
      if (err) {
        console.log(err);
      }
      // done() --> database lives on another server so the before each is async in nature, done ensures that we do not move to next step prior to before each's completion
      done();
    });
  });
  describe('[GET] /recipes', () => {
    it('should get all of the recipes', () => {
      chai.request(server)
        .get('/recipe')
        .end((err, res) => {
          if (err) {
            console.log(err);
          } else {
            expect(res.status).to.equal(200);
            expect(Array.isArray(res.body)).to.equal(true);
            expect(res.body.length).to.equal(0);
            done();
          }
        });
    });
  });
  describe('[POST] /newrecipe', () => {
    it('should post a new recipe', () => {
      const chocolateCake = {
        name: 'Chocolate Cake',
        ingredients: ['flour', 'sugar', 'eggs', 'cocoa'],
        steps: ['Sift flour', 'Beat eggs', 'Bake']
      }
      chai.request(server)
        .post('/newrecipe')
        .send(chocolateCake)
        .end((err, res) => {
          if (err) {
            console.log(err);
          } else {
            expect(res.status).to.equal(200);
            expect(res.body.name).to.equal('Chocolate Cake');
            expect(Array.isArray(res.body.ingredients)).to.equal(true);
            expect(Array.isArray(res.body.steps)).to.equal(true);
            done();
          }
        });
    });
  });
});
