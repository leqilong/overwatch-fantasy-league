const validator = require('validator');
const isEmpty = require('./IsEmpty');

module.exports = function validateLoginInput(data){
  let errors = {};
  data.username = !isEmpty(data.username) ? data.username : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  if(validator.isEmpty(data.username)){
    errors.username = 'Username is required';
  }

  if(!validator.isLength(data.password, {min: 6, max: 30})) {
    errors.password = 'Password must be between 6 to 30 characters';
  }

  if(validator.isEmpty(data.password)) {
    errors.password = 'Password is required';
  }
  
  return{
    errors,
    isValid: isEmpty(errors)
  }
}
