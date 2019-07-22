const INITIAL_STATE = {
  isLoggedIn: localStorage.getItem('token') ? true : false,
  username: localStorage.getItem('username') ? localStorage.getItem('username') : ''
}
export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case 'LOGIN_USER':
      return {...state, isLoggedIn: true, username: action.payload.username}
    case 'LOGOUT_USER':
      return {...state, isLoggedIn: false, username: ''}
    case 'REGISTER_USER':
      return {...state, isLoggedIn: false, username: ''}
    default:
      return state;
  }
}
