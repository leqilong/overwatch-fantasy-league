import _ from 'lodash';

export default (state=[], action) => {
  switch(action.type){
    case 'DRAFT_PLAYER':
      return [..._.uniqBy([...state, ...[action.payload]], 'id')];
    case 'UNDRAFT_PLAYER':
      return [...action.payload];
    case 'FETCH_DRAFT':
      return [...action.payload];
    default:
      return state;
  }
}
