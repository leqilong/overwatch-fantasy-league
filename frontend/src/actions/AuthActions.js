import predictions from '../apis/predictions';
import history from '../history';

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
    dispatch({type: 'LOGIN_USER', payload: response.data});
    console.log('action submitLogin:');
    console.log(localStorage.getItem('token'));
    console.log('response.data');
    console.log(response.data);
    history.push('/');
  }
}

export const submitRegister = (formValues) => async dispatch => {
  console.log(formValues);
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
    dispatch({type: 'REGISTER_USER', payload: response.data});
    history.push('/login');
  }
}

export const logoutUser = () => async dispatch => {
  localStorage.removeItem('username');
  localStorage.removeItem('token');
  dispatch({type: 'LOGOUT_USER'})
}
