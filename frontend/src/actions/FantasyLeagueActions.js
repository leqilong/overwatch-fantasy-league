import { FETCH_PLAYERS, FETCH_PLAYERS_STATS, GET_ROLE_FILTER, DRAFT_PLAYER } from './Types';
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

export const draftPlayer = player => async dispatch => {
  dispatch({type: DRAFT_PLAYER, payload: player});
}
