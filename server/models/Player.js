const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String, 
    require: true
  },
  role: {
    type: String,
    require: true
  }
})

mongoose.model('Player', playerSchema);

module.exports = mongoose.model('Player');