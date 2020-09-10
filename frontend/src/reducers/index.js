import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import matchReducer from './matchReducer';
import predictionReducer from './predictionReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import userReducer from './userReducer';
import playerReducer from './playerReducer';
import statsReducer from './statsReducer';
import roleFilterReducer from './roleFilterReducer';
import draftReducer from './draftReducer';
import draftSavedReducer from './draftSavedReducer';

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
