import _ from 'lodash';

export default (state={}, action) => {
  switch(action.type){
    case 'CREATE_PREDICTION':
      return {...state, [action.payload.matchId]: action.payload};
    case 'FETCH_PREDICTIONS':
      return {...state, ..._.mapKeys(action.payload, 'matchId')}
    case 'FETCH_PREDICTION':
      return {...state, [action.payload.matchId]: action.payload}
    case 'EDIT_PREDICTION':
      return {...state, [action.payload.matchId]: action.payload}
    default:
      return state;
  }
}
