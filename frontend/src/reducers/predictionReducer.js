import _ from 'lodash';

export default (state={}, action) => {
  switch(action.type){
    case 'CREATE_PREDICTION':
      return {...state, isPredicted: true, [action.payload.id]: action.payload};
    case 'FETCH_PREDICTIONS':
      return {...state, ..._.mapKeys(action.payload, 'match_id')}
    default:
      return state;
  }
}
