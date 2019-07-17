const mongoose = require('mongoose');

const predictionSchema = new mongoose.Schema({
  match_id: {
    type: Number,
    required: true
  },
  user_id: {
    type: Number,
    required: true
  },
  seriesWinner: {
    type: String,
    required: true
  },
  seriesScoreTeam1: Number,
  seriesScoreTeam2: Number,
  map1Winner: String,
  map2Winner: String,
  map3Winner: String,
  map4Winner: String
})

mongoose.model('Prediction', predictionSchema);

module.exports = mongoose.model('Prediction');
