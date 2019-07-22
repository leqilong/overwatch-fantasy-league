const mongoose = require('mongoose');

const predictionSchema = new mongoose.Schema({
  matchId: {
    type: Number,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  seriesWinner: {
    type: String,
    required: true
  },
  seriesScoreTeam1: Number,
  seriesScoreTeam2: Number
})

mongoose.model('Prediction', predictionSchema);

module.exports = mongoose.model('Prediction');
