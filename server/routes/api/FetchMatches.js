const fetch = require('node-fetch');
const generateFetchMatchesURL = require('../../util/GenerateOverwatchLeagueURL').generateFetchMatchesURL;

module.exports = (app) => {
  app.get('/', (req, res) => {
    const matchesURL = generateFetchMatchesURL();
    fetch(matchesURL)
      .then(res => res.json())
      .then(data => {
        let matches = data['data']['stages'][4]['matches'];
        // matches.map(match => {
        //   match['id'] = match['id'].toString();
        // });
        // console.log(matches);
        res.send(matches);
      })
      .catch(err => {
        res.redirect('/error');
      });
  });
};
