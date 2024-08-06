const madge = require('madge');

madge('./src')
  .then((res) => {
    console.log('Circular dependencies:', res.circular());
  });
