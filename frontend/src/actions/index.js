import predictions from '../apis/predictions';
import history from '../history';

export const fetchMatches = () => async (dispatch, getState) => {
  const response = await predictions.get('/');
  dispatch({type: 'FETCH_MATCHES', payload: response.data});
};

export const createPrediction = formValues => async dispatch => {
  //hard code user id for now until authentication is implemented
  const userId = 1;
  const response = await predictions.post('/predictions', {formValues, userId});
  dispatch({type: 'CREATE_PREDICTION', payload: response.data});
  history.push('/');
}
