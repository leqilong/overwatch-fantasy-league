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
    User.findOne(filter, function(err, user){
      if(err){
        callback(err, null);
        return;
      }
      Draft.create(params, function(err, result){
        if(err){
          callback(err, null);
          return;
        }

        console.log(result);
        user.draft = result;
        user.save();
        callback(null, result);
      });
    });
  }
}