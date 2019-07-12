const fetch = require('node-fetch');
const generateFetchMatchURL = require('../../util/GenerateOverwatchLeagueURL').generateFetchMatchURL;

module.exports = (app) => {
  app.get('/matches/:id', (req, res) => {
    const matchURL = generateFetchMatchURL(id);
    fetch(matchURL)
      .then(res => res.json())
      .then(data => {
        res.send(data);
      })
      .catch( err => {
        res.redirect('/error');
      });
  });
};
