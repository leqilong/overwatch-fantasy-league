export default (state = {}, action) => {
  switch(action.type){
    case 'SAVE_DRAFT':
      return {...state, isSuccessfullySaved: true, username: action.payload.username}
    case 'MAKE_CHANGE_IN_DRAFT':
      return {...state, isSuccessfullySaved: false, username: action.payload.username}
    default:
      return state;
  }
}