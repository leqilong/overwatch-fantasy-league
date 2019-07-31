const fetch = require('node-fetch');
const Prediction = require('../models/Prediction');
const User = require('../models/User');
const UpdateScore = require('../util/UpdateScore');
const generateFetchMatchURL = require('../util/GenerateOverwatchLeagueURL').generateFetchMatchURL;

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
  },

  updateScores: function(callback){
    Prediction.find({isTallied: false, matchEndDate: {$lt: new Date()}}, function(err, result){
      if(err){
        callback(err, null);
      }
      result.map(prediction => {
        const matchURL = generateFetchMatchURL(prediction.matchId);
        fetch(matchURL)
          .then(res => res.json())
          .then(data => {
            const score = UpdateScore.generateScore(data, prediction);
            User.findOneAndUpdate({username: prediction.username}, {$inc: {score: score}}, function(err, user){
              if(err){
                callback(err, null);
              }
            })

            prediction.isTallied = true;
            prediction.save(function (err) {
              if(err) {
                callback(err, null);
              }
            });
         })
          .catch( err => {
            callback(err, null)
         });
      })

      User.find({}, function(err, result){
        if(err){
          callback(err, null);
        }
        callback(null, result);
      })
    })
  }
}
