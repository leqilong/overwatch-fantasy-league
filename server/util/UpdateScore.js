module.exports = {
  generateScore: function(data, prediction){
    let score = 0;
    if(data['state'] === 'CONCLUDED'){
      if(data['winner']['name'] === prediction['seriesWinner']){
        score += 1;
        if(prediction['seriesScoreTeam1'] && data['scores'][0]['value'] === prediction['seriesScoreTeam1'] && data['scores'][1]['value'] === prediction['seriesScoreTeam2']){
          score += 2;
        }else if (prediction['seriesScoreTeam1'] && data['scores'][0]['value'] !== prediction['seriesScoreTeam1']){
          score -= 1;
        }
      }
    }
    return score;
  }
}
