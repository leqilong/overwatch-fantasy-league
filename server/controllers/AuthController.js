const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = {
  login: function(username, password, callback){
    let error = {};
    User.findOne({username: username}, function(err, user){
      if(err){
        error.message = err;
        error.statusCode = 500
        callback(error, null);
        return;
      }

      if(!user){
        error.message = "User not found";
        error.statusCode = 404
        callback(error, null);
        return;
      }else{
        user.comparePassword(password, function(err, isMatch){
          if(isMatch){
            const authToken = jwt.sign({username: user.username, _id: user._id}, process.env.JWTSECRET);
            callback(null, authToken);
          }else{
            error.message = "Password is incorrect";
            error.statusCode = 400
            callback(error, null);
          }
        });
      };
    });
  },

  register: function(username, password, callback){
    const newUser = new User({username, password});
    newUser.save(function(err, user){
      if(err){
        callback(err, null);
        return;
      }

      const authToken = jwt.sign({username: user.username, _id: user._id}, process.env.JWTSECRET);
      callback(null, authToken);
    });
  }
}
