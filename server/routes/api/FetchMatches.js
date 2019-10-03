const fetch = require('node-fetch');
const generateFetchMatchesURL = require('../../util/GenerateOverwatchLeagueURL').generateFetchMatchesURL;

module.exports = (app) => {
  app.get('/matches', (req, res) => {
    const matchesURL = generateFetchMatchesURL();
    fetch(matchesURL)
      .then(res => res.json())
      .then(data => {
        data['data']['stages'][5]['matches'][data['data']['stages'][5]['matches'].length - 1]['state'] = 'PENDING';
        data['data']['stages'][5]['matches'][data['data']['stages'][5]['matches'].length - 1]['startDate'] = '2019-12-29T01:00:00.000Z';
        data['data']['stages'][5]['matches'][data['data']['stages'][5]['matches'].length - 1]['startDateTS'] = 1577588201000;
        res.send(data['data']['stages'][5]['matches']);
      })
      .catch(err => {
        res.redirect('/error');
      });
  });
};
