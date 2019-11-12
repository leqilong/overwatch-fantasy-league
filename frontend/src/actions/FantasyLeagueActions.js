import { FETCH_PLAYERS, FETCH_PLAYERS_STATS } from './Types';
import fantasy from '../apis/request';

export const fetchPlayers = () => async dispatch => {
  const response = await fantasy.get('/players');
  dispatch({type: FETCH_PLAYERS, payload: response.data});
}

export const fetchPlayersStats = () => async dispatch => {
  const response = await fantasy.get('/playersStats');
  dispatch({type: FETCH_PLAYERS_STATS, payload: response.data})
}
