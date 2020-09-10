const mongoose = require('mongoose');

const draftSchema = new mongoose.Schema({
  username: {
    type: String
  },
  tank1: {
    type: Number
  },
  tank2: {
    type: Number
  },
  damage1: {
    type: Number
  },
  damage2: {
    type: Number
  },
  support1: {
    type: Number
  },
  support2: {
    type: Number
  }
})

mongoose.model('Draft', draftSchema);

module.exports = mongoose.model('Draft');

