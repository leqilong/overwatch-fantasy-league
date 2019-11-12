const fetch = require('node-fetch');
const generateFetchPlayersStatsURL = require('../../util/GenerateOverwatchLeagueURL').generateFetchPlayersStatsURL;

module.exports = (app) => {
  app.get('/playersStats', (req, res) => {
    const playersStatsURL = generateFetchPlayersStatsURL();
    fetch(playersStatsURL)
      .then(res => res.json())
      .then(data => {
        res.send(data['data']);
      })
      .catch(err => {
        res.redirect('/error');
      });
  });
};
