import predictions from '../../apis/request';
import history from '../../history';
import _ from 'lodash';

const FETCH_MATCHES = 'FETCH_MATCHES';
const FETCH_MATCH = 'FETCH_MATCH';
const CREATE_PREDICTION = 'CREATE_PREDICTION';
const FETCH_PREDICTIONS = 'FETCH_PREDICTIONS';
const FETCH_PREDICTION = 'FETCH_PREDICTION';
const EDIT_PREDICTION = 'EDIT_PREDICTION';
const FETCH_LEADERS = 'FETCH_LEADERS';

//Matches
export const fetchMatches = () => async (dispatch, getState) => {
  const response = await predictions.get('/matches');
  const pastPredictions = getState().predictions;
  let matches = response.data;
  if(!_.isEmpty(pastPredictions)){
    const predictedMatchIds = Object.keys(pastPredictions).map(pastPredictionKey => pastPredictions[pastPredictionKey].matchId);
    matches = response.data.map(match => {
        if (predictedMatchIds.includes(match.id)) {
          return {...match, isPredicted: true}
        } else {
          return match
        }
      }
    )
  }
  dispatch({type: FETCH_MATCHES, payload: matches});
};

export const fetchMatch = id => async dispatch => {
  const response = await predictions.get(`/matches/${id}`);
  dispatch({type: FETCH_MATCH, payload: response.data});
};

//Prediction
export const createPrediction = ({formValues, matchId, matchEndDate}) => async (dispatch, getState) => {
  const {username} = getState().auth;
  const response = await predictions.post('/predictions', {...formValues, matchId, matchEndDate, username});
  dispatch({type: CREATE_PREDICTION, payload: response.data});
  history.push('/matches');
};

export const fetchPredictions = () => async dispatch => {
  const response = await predictions.get('/predictions');
  dispatch({type: FETCH_PREDICTIONS, payload: response.data});
};

export const fetchPrediction = id => async dispatch => {
  const response = await predictions.get(`/predictions/${id}`);
  dispatch({type: FETCH_PREDICTION, payload: response.data});
}

export const editPrediction = (id, formValues) => async (dispatch, getState) => {
  const {username} = getState().auth;
  const response = await predictions.patch(`/predictions/${id}`, {...formValues, username});
  dispatch({type: EDIT_PREDICTION, payload: response.data});
  history.push('/matches');
}

//Leaderboard
export const fetchLeaders = () => async dispatch => {
  const response = await predictions.get('/leaders');
  dispatch({type: FETCH_LEADERS, payload: response.data})
}
