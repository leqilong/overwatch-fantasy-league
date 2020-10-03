export default (state='', action) => {
  switch(action.type){
    case 'GET_ROLE_FILTER':
      return action.payload;
    default:
      return state;
  }
}
