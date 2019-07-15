const fetch = require('node-fetch')

module.exports = (app) => {
  app.post('/predictions', (req, res) => {
    console.log(req.body);
    res.send(req.data);
  });
};
