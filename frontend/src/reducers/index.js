import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import matchReducer from './matchReducer';
import predictionReducer from './predictionReducer';


export default combineReducers({
  predictions: predictionReducer,
  matches: matchReducer,
  form: formReducer
});
