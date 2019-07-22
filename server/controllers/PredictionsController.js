const Prediction = require('../models/Prediction');
const User = require('../models/User');

module.exports = {
  find: function(filter, callback){
      Prediction.find(filter, function(err, results){
        if(err){
          callback(err, null);
            return;
          }
        callback(null, results);
      });
    },

  findByMatchId: function(filter, callback){
    Prediction.findOne(filter, function(err, results){
      if(err){
        callback(err, null);
        return;
        }
      callback(null, results);
    });
  },

  create: function(username, params, callback){
    const filter = {"username": username};
    User.findOne(filter, function(err, user){
      if(err){
        callback(err, null);
        return;
      }
      Prediction.create(params, function(err, result){
        if(err){
          callback(err, null);
          return;
        }
        user.predictions.push(result);
        user.save();
        callback(null, result);
      });
    });
  },

  update: function(filter, update, callback){
    Prediction.findOneAndUpdate(filter, update, function(err, result){
      if(err){
        callback(err, null);
        return
      }
      callback(null, result);
    });
  }
}
