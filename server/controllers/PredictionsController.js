const Prediction = require('../models/Prediction');
const User = require('../models/User');
const UpdateScore = require('../util/UpdateScore');

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
    User.find({}, (err, users)=>{
      if(err){
        callback(err, null);
      }

      users.map(user=>{
        user.predictions.find({isTallied: false, matchEndDate: { $lt: new Date()}}, function(err, result){
            if(err){
              callback(err, null);
            }
            result.map(prediction => {
              const score = UpdateScore.generateScore(prediction.matchId, prediction);
              user.update({$inc: {score: score}}, function(err, result){
                if(err){
                  callback(err, null);
                }
              });
              prediction.update({$set:{isTallied: true}}, function(err,result){
                if(err){
                  callback(err, null);
                }

                callback(null, results);
              })
            })
        })
      })
    })
  }
}
