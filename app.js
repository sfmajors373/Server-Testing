const mongoose = require('mongoose');
const server = require('./server');
mongoose.Promise = global.Promise;
// const connect = mongoose.connect(
//   'mongodb://localhost/recipes',
//   { useMongoClient: true }
// );

mongoose.connect('mongodb://localhost/recipes', { useMongoClient: true }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected to recipes DB');
  }
});

server.listen(8080, () => {
    console.log('server listening on port 8080');
});
