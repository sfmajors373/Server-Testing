const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
mongoose.Promise = global.promise;
const Recipe = require('./model');
const server = require('./server');

const chai = require('chai');
const expect = chai.expect;
const chaiHTTP = require('chai-http');


chai.use(chaiHTTP);

describe('/recipes', () => {
  // before each hook clears test database so that each test runs on a clear slate
      // done() --> database lives on another server so the before each is async in nature, done ensures that we do not move to next step prior to before each's completion
  beforeEach((done) => {
    Recipe.remove({}, (err) => {
      if (err) {
        console.log(err);
      }
      done();
    });
  });
  describe('[GET] /recipes', () => {
    it('should get all of the recipes', (done) => {
      chai.request(server)
        .get('/recipes')
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
  // describe('[POST] /newrecipe', () => {
  //   it('should post a new recipe', (done) => {
  //     const chocolateCake = {
  //       name: 'Chocolate Cake',
  //       ingredients: ['flour', 'sugar', 'eggs', 'cocoa'],
  //       steps: ['Sift flour', 'Beat eggs', 'Bake']
  //     }
  //     chai.request(server)
  //       .post('/newrecipe')
  //       .send(chocolateCake)
  //       .end((err, res) => {
  //         if (err) {
  //           console.log(err);
  //         } else {
  //           expect(res.status).to.equal(200);
  //           expect(res.body.name).to.equal('Chocolate Cake');
  //           expect(Array.isArray(res.body.ingredients)).to.equal(true);
  //           expect(Array.isArray(res.body.steps)).to.equal(true);
  //           done();
  //         }
  //       });
  //   });
  //   it('should not post a recipe without ingredients', (done) => {
  //     const chocolateCake = {
  //       name: 'Chocolate Cake',
  //       steps: ['Sift flour', 'Beat eggs', 'Bake']
  //     }
  //     chai.request(server)
  //       .post('/newrecipe')
  //       .send(chocolateCake)
  //       .end((err, res) => {
  //         expect(res.status).to.equal(200);
  //         expect(typeof res.body).to.equal('object');
  //         expect(res.body).to.have.property('errors');
  //         done();
  //       });
  //   });
  // });
  // describe('[GET] /recipes/:id', () => {
  //   it('should get a recipe by id', (done) => {
  //     let recipe = new Recipe({
  //       name: 'Chocolate Cake',
  //       ingredients: ['flour', 'sugar', 'eggs', 'cocoa'],
  //       steps: ['Sift flour', 'Beat eggs', 'Bake']
  //     });
  //     recipe.save((err, recipe) => {
  //       chai.request(server)
  //         .get('/recipe/' + recipe.id)
  //         .send(recipe)
  //         .end((err, res) => {
  //           expect(res.status).to.equal(200);
  //           expect(typeof res.body).to.equal('object');
  //           // expect(res.body.id).to.equal(recipe.id);
  //           done();
  //         });
  //     });
  //   });
  // });
});
