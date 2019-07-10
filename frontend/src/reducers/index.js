import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import matchReducer from './matchReducer';


export default combineReducers({
  matches: matchReducer
});
