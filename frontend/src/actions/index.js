import history from '../history';

export const fetchMatches = () => async dispatch => {
  const response = await fetch('/');
  dispatch({type: 'FETCH_MATCHES', payload: response.data});
};
