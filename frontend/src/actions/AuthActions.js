import predictions from '../apis/predictions';
import history from '../history';
import { LOGIN_USER, REGISTER_USER, LOGOUT_USER } from './Types';

export const submitLogin = (formValues) => async dispatch => {
  const response = await predictions.post('/login', formValues)
                                    .catch(error => {
                                      console.log(error.response.data);
                                      dispatch({
                                        type: 'GET_ERRORS',
                                        payload: error.response.data
                                      })
                                      history.push('/login');
                                    });
  if(response){
    localStorage.setItem('username', response.data.username);
    localStorage.setItem('token', response.data.tokenId);
    dispatch({type: LOGIN_USER, payload: response.data});
    history.push('/matches');
  }
}

export const submitRegister = (formValues) => async dispatch => {
  const response = await predictions.post('/register', formValues)
                                    .catch(error => {
                                      dispatch({
                                        type: 'GET_ERRORS',
                                        payload: error.response.data
                                      })
                                      history.push('/register');
                                    });
  if(response){
    localStorage.setItem('username', response.data.username);
    localStorage.setItem('token', response.data.tokenId);
    dispatch({type: REGISTER_USER, payload: response.data});
    history.push('/login');
  }
}

export const logoutUser = () => async dispatch => {
  localStorage.removeItem('username');
  localStorage.removeItem('token');
  dispatch({type: LOGOUT_USER})
  history.push('/matches');
}
