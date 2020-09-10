import _ from 'lodash';

export default (state=[], action) => {
  switch(action.type){
    case 'DRAFT_PLAYER':
      return [..._.uniqBy([...state, ...[action.payload]], 'id')];
    case 'FETCH_DRAFT':
      return {...state, ..._.mapKeys(action.payload, 'id')};
    default:
      return state;
  }
}
