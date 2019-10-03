const fetch = require('node-fetch');
const generateFetchMatchURL = require('../../util/GenerateOverwatchLeagueURL').generateFetchMatchURL;

module.exports = (app) => {
  app.get('/matches/:id', (req, res) => {
    const matchURL = generateFetchMatchURL(req.params.id);
    fetch(matchURL)
      .then(res => res.json())
      .then(data => {
        if (req.params.id === 30157){
          data['state'] = 'PENDING';
          data['startDate'] = '2019-12-29T01:00:00.000Z';
          data['startDateTS'] = 1577588201000;
        }
        res.send(data);
      })
      .catch( err => {
        res.redirect('/error');
      });
  });
};
