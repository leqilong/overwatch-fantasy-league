const Prediction = require('../models/Prediction');

module.exports = {
    find: function(params, callback){
        Prediction.find(params,'_id match_id user_id', function(err, results){
            if(err){
                callback(err, null);
                return;
            }
            callback(null, results);
        })
    },

    findById: function(id, callback){
        Prediction.findById(id, function(err, results){
            if(err){
                callback(err, null);
                return;
            }
            callback(null, results);
        })
    }
}
