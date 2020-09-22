const validator = require('validator');
const isEmpty = require('./IsEmpty');

module.exports = function validateRegisterInput(data){
  let errors = {};
  data.username = !isEmpty(data.username) ? data.username : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.passwordConfirm = isEmpty(data.passwordConfirm) ? data.passwordConfirm : '';

  if(!validator.isLength(data.username, {min: 2, max: 12})) {
    errors.username = 'Username must be between 2 to 12 characters';
  }

  if(validator.isEmpty(data.username)){
    errors.username = 'Username is required';
  }

  if(!validator.isLength(data.password, {min: 6, max: 30})) {
    errors.password = 'Password must be between 6 to 30 characters';
  }

  if(validator.isEmpty(data.password)) {
    errors.password = 'Password is required';
  }

  if(!validator.isLength(data.passwordConfirm, {min: 6, max: 30})) {
    errors.password = 'Password must be between 6 to 30 characters';
  }

  if(validator.isEmpty(data.passwordConfirm)) {
    errors.password = 'Password is required';
  }

  if(!validator.equals(data.password, data.passwordConfirm)){
    errors.passwordConfirm = 'Password and password confirmation must match';
  }

  return{
    errors,
    isValid: isEmpty(errors)
  }
}
