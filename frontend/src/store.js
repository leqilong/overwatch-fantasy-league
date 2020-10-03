import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import matchReducer from './modules/Predictions/matchReducer';
import predictionReducer from './modules/Predictions/predictionReducer';
import authReducer from './modules/Authentication/authReducer';
import errorReducer from './modules/Authentication/errorReducer';
import userReducer from './modules/Predictions/userReducer';
import playerReducer from './modules/Fantasy/playerReducer';
import statsReducer from './modules/Fantasy/statsReducer';
import roleFilterReducer from './modules/Fantasy/roleFilterReducer';
import draftReducer from './modules/Fantasy/draftReducer';
import draftSavedReducer from './modules/Fantasy/draftSavedReducer';

export default combineReducers({
  predictions: predictionReducer,
  matches: matchReducer,
  form: formReducer,
  auth: authReducer,
  error: errorReducer,
  users: userReducer,
  players: playerReducer,
  stats: statsReducer,
  roleFilter: roleFilterReducer,
  draft: draftReducer,
  draftSaved: draftSavedReducer
});
