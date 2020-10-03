export default (state = {}, action) => {
  switch(action.type){
    case 'SAVE_DRAFT':
      return {...state, isSuccessfullySaved: true, username: action.payload.username}
    case 'DRAFT_PLAYER':
    case 'UNDRAFT_PLAYER':
      return {...state, isSuccessfullySaved: false, username: action.payload.username}
    default:
      return state;
  }
}