import predictions from '../apis/predictions';
import history from '../history';

export const fetchMatches = () => async (dispatch, getState) => {
  const response = await predictions.get('/');
  dispatch({type: 'FETCH_MATCHES', payload: response.data});
};

export const fetchMatch = id => async dispatch => {
  const response = await predictions.get(`/matches/${id}`);
  dispatch({type: 'FETCH_STREAM', payload: response.data});
};

export const createPrediction = ({formValues, match_id}) => async dispatch => {
  //hard code user id for now until authentication is implemented
  const userId = 1;
  const response = await predictions.post('/predictions', {...formValues, match_id, userId});
  dispatch({type: 'CREATE_PREDICTION', payload: response.data});
  history.push('/');
};

export const fetchPredictions = () => async dispatch => {
  const response = await predictions.get('/predictions');
  dispatch({type: 'FETCH_PREDICTIONS', payload: response.data});
};
