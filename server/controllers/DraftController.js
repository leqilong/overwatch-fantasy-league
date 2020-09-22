const Draft = require('../models/Draft');
const User = require('../models/User');

module.exports = {
  find: function(filter, callback){
    Draft.find(filter, function(err, results){
      if(err){
        callback(err, null);
          return;
        }
      callback(null, results);
    });
  },
  save: function(username, params, callback){
    const filter = {"username": username};
    const options = { upsert: true, new: true, setDefaultsOnInsert: true };
    const filteredParams = params.players.filter(player => player !== null);

    Draft.findOneAndUpdate(filter, {players: filteredParams}, options, function(err, result){
      if(err){
        callback(err, null);
        return;
      }
      callback(null, result);
    });
  },
  delete: function(username, params, callback){
    const filter = {"username": username};
    const playerToRemove = {"players": params}
    Draft.findOneAndUpdate(filter, {"$pull": playerToRemove}, {safe: true, new: true}, function(err, result){
      if (err){
        callback(err, null);
        return;
      }
      callback(null, result.players);
    })
  }
}