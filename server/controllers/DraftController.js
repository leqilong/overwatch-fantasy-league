const Draft = require('../models/Draft');
const User = require('../models/User');

module.exports = {
  find: function(filter, callback){
    Draft.find(filter, function(err, results){
      if(err){
        callback(err, null);
          return;
        }
      console.log('FIND!!!!', results);
      callback(null, results[0].players);
    });
  },
  save: function(username, params, callback){
    const filter = {"username": username};
    const options = { upsert: true, new: true, setDefaultsOnInsert: true };

    Draft.findOneAndUpdate(filter, params, options, function(err, result){
      if(err){
        callback(err, null);
        return;
      }
      console.log('UPDATE!!!!', result);
      callback(null, result);
    });
  }
}