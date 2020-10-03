import _ from 'lodash';

export default (state=[], action) => {
  switch(action.type){
    case 'FETCH_PLAYERS':
      return _.uniqBy([...state, ...action.payload], 'id');
    default:
      return state;
  }
}
