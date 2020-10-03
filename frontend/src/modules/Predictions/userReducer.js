import _ from 'lodash';

export default (state={}, action) => {
  switch(action.type){
    case 'FETCH_LEADERS':
      return {...state, ..._.mapKeys(action.payload, 'username')};
    default:
      return state;
  }
}
