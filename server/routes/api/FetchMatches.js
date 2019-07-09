const fetch = require('node-fetch');
const generateFetchMatchesURL = require('../../util/GenerateOverwatchLeagueURL').generateFetchMatchesURL;

module.exports = (app) => {
  app.get('/', (req, res) => {
    const matchesURL = generateFetchMatchesURL();
    fetch(matchesURL)
      .then(res => res.json())
      .then(data => {
        res.send({data});
      })
      .catch(err => {
        res.redirect('/error');
      });
  });
};
