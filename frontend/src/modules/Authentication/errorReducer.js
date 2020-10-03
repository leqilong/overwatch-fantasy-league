const INITIAL_STATE = {};
export default function(state = INITIAL_STATE, action ) {
  switch(action.type) {
    case 'GET_ERRORS':
      return action.payload;
    case 'LOGIN_USER':
      return {...INITIAL_STATE};
    default:
      return state;
  }
}
