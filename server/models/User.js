const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const predictionSchema = require('./Prediction').schema;

const SALT_WORK_FACTOR = 10;

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  predictions: [predictionSchema]
})


userSchema.methods.comparePassword = function comparePassword(password, callback){
  bcrypt.compare(password, this.password, function(err, res){
    callback(err,res);
  });
};

userSchema.pre('save', function saveHook(next){
  const user = this;
  if(!user.isModified('password')){
    return next();
  }
  return bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
    if (err) {return next(err); }
    return bcrypt.hash(user.password, salt, function(hashError, hash){
      if(hashError){return next(hashError); }
      user.password = hash;
      return next();
    })
  })
});

mongoose.model('User', userSchema);

module.exports = mongoose.model('User');
