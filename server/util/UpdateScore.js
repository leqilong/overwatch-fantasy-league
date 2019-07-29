const fetch = require('node-fetch');
const generateFetchMatchURL = require('./GenerateOverwatchLeagueURL').generateFetchMatchURL;
module.exports = {
  generateScore: function(matchId, prediction){
    const matchURL = generateFetchMatchURL(matchId);
    let result = null;
    let score = 0;
    fetch(matchURL)
      .then(res => res.json())
      .then(data => {
        result = data;
      })
      .catch( err => {
        res.redirect('/error');
     });

     if(result){
       if(result['state'] === 'CONCLUDED'){
         if(result['winner']['name'] === prediction['seriesWinner']){
           score += 2;
           if(prediction['seriesScoreTeam1'] && result['scores'][0]['value'] === prediction['seriesScoreTeam1'] && result['scores'][1]['value'] === prediction['seriesScoreTeam2']){
             score += 3;
           }else if (prediction['seriesScoreTeam1'] && result['scores'][0]['value'] !== prediction['seriesScoreTeam1']){
             score -= 1;
           }
         }
       }
     }

     return score;
  }
}
