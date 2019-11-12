const fetch = require('node-fetch');
const generateFetchPlayersURL = require('../../util/GenerateOverwatchLeagueURL').generateFetchPlayersURL;

module.exports = (app) => {
  app.get('/players', (req, res) => {
    const playersURL = generateFetchPlayersURL();
    fetch(playersURL)
      .then(res => res.json())
      .then(data => {
        res.send(data['content']);
      })
      .catch(err => {
        res.redirect('/error');
      });
  });
};
