import predictions from '../apis/predictions';
import history from '../history';
import _ from 'lodash';
import { FETCH_MATCHES, FETCH_MATCH, CREATE_PREDICTION, FETCH_PREDICTIONS, FETCH_PREDICTION, EDIT_PREDICTION, FETCH_LEADERS } from './Types';

//Matches
export const fetchMatches = () => async (dispatch, getState) => {
  const response = await predictions.get('/matches');
  const pastPredictions = getState().predictions;
  let matches = response.data;
  if(!_.isEmpty(pastPredictions)){
    const predictedMatchIds = Object.keys(pastPredictions).map( pastPredictionKey => pastPredictions[pastPredictionKey].matchId);
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
