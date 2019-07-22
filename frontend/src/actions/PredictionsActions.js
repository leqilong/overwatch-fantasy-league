import predictions from '../apis/predictions';
import history from '../history';
import _ from 'lodash';

//Matches
export const fetchMatches = () => async (dispatch, getState) => {
  const response = await predictions.get('/');
  const pastPredictions = getState().predictions;
  console.log('action creator fetchMatches pastPredictions: ')
  console.log(pastPredictions);
  let matches = response.data;
  if(!_.isEmpty(pastPredictions)){
    const predictedMatchIds = Object.keys(pastPredictions).map( pastPredictionKey => pastPredictions[pastPredictionKey].matchId);
    console.log('predictedMatchIds: ');
    console.log(predictedMatchIds);
    matches = response.data.map(match => {
        if (predictedMatchIds.includes(match.id)) {
          return {...match, isPredicted: true}
        } else {
          return match
        }
      }
    )
  }
  console.log('matches: ')
  console.log(matches);
  dispatch({type: 'FETCH_MATCHES', payload: matches});
};

export const fetchMatch = id => async dispatch => {
  const response = await predictions.get(`/matches/${id}`);
  dispatch({type: 'FETCH_STREAM', payload: response.data});
};

//Prediction
export const createPrediction = ({formValues, matchId}) => async (dispatch, getState) => {
  const {username} = getState().auth;
  const response = await predictions.post('/predictions', {...formValues, matchId, username});
  dispatch({type: 'CREATE_PREDICTION', payload: response.data});
  history.push('/');
};

export const fetchPredictions = () => async dispatch => {
  const response = await predictions.get('/predictions');
  dispatch({type: 'FETCH_PREDICTIONS', payload: response.data});
  // console.log('Fetch predictions action creator: ')
  // console.log(response.data);
};

export const fetchPrediction = id => async dispatch => {
  const response = await predictions.get(`/predictions/${id}`);
  dispatch({type: 'FETCH_PREDICTION', payload: response.data});
}

export const editPrediction = (id, formValues) => async (dispatch, getState) => {
  const {username} = getState().auth;
  const response = await predictions.patch(`/predictions/${id}`, {...formValues, username});
  dispatch({type: 'EDIT_PREDICTION', payload: response.data});
  history.push('/');
}

//Authentication
