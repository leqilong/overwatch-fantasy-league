const fetch = require('node-fetch')

module.exports = (app) => {
  app.get('/predictions', (req, res) => {
    res.send('hi');
  });
};
