import { FETCH_PLAYERS, FETCH_PLAYERS_STATS, GET_ROLE_FILTER, DRAFT_PLAYER, SAVE_DRAFT, FETCH_DRAFT, MAKE_CHANGE_IN_DRAFT, UNDRAFT_PLAYER } from './Types';
import fantasy from '../apis/request';

export const fetchPlayers = () => async dispatch => {
  const response = await fantasy.get('/players');
  dispatch({type: FETCH_PLAYERS, payload: response.data});
}

export const fetchPlayersStats = () => async dispatch => {
  const response = await fantasy.get('/playersStats');
  dispatch({type: FETCH_PLAYERS_STATS, payload: response.data})
}

export const getRoleFilter = (role) => async dispatch => {
  dispatch({type: GET_ROLE_FILTER, payload: role});
}

export const draftPlayer = player => async (dispatch, getState) => {
  const {username} = getState().auth;
  dispatch({type: DRAFT_PLAYER, payload: player});
  dispatch({type: MAKE_CHANGE_IN_DRAFT, payload: {username}});
}

export const saveDraft = formValues => async (dispatch, getState) => {
  const {username} = getState().auth;
  const response = await fantasy.put('/draft', {...formValues, username});
  dispatch({type: SAVE_DRAFT, payload: response.data});
}

export const fetchDraft = () => async (dispatch, getState) => {
  const {username} = getState().auth;
  const response = await fantasy.get('/draft', {username});
  console.log('fetch draft: ', response);
  if (response.data.length !== 0) {
    dispatch({type: FETCH_DRAFT, payload: response.data[0].players});
  }
}

export const undraftPlayer = player => async (dispatch, getState) => {
  const {username} = getState().auth;
  const response = await fantasy.delete('/draft', {data: {...player}});
  dispatch({type: UNDRAFT_PLAYER, payload: response.data});
  dispatch({type: MAKE_CHANGE_IN_DRAFT, payload: {username}});
}