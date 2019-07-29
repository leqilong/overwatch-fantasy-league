import _ from 'lodash';

export default (state={}, action) => {
  switch(action.type){
    case 'FETCH_MATCHES':
      return {...state, ..._.mapKeys(action.payload, 'id')}
    case 'FETCH_MATCH':
      console.log('reducer:');
      console.log(action.payload);
      return {...state, [action.payload.id]: action.payload};
    default:
      return state;
  }
}
