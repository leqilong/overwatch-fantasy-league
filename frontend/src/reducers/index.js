import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import matchReducer from './matchReducer';
import predictionReducer from './predictionReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
export default combineReducers({
  predictions: predictionReducer,
  matches: matchReducer,
  form: formReducer,
  auth: authReducer,
  error: errorReducer
});
