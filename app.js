const mongoose = require('mongoose');
const server = require('./server');

mongoose.connect('mongodb://localhost/recipes', {}, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected to recipes DB');
  }
});

server.listen(8080, () => {
    console.log('server listening on port 8080');
});
