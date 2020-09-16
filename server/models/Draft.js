const mongoose = require('mongoose');
const playerSchema = require('./Player').schema;

const draftSchema = new mongoose.Schema({
  username: {
    type: String
  },
  players: {
    type: [playerSchema]
  }
})

mongoose.model('Draft', draftSchema);

module.exports = mongoose.model('Draft');

