import fantasy from '../../apis/request';

const FETCH_PLAYERS = 'FETCH_PLAYERS';
const FETCH_PLAYERS_STATS = 'FETCH_PLAYERS_STATS';
const GET_ROLE_FILTER = 'GET_ROLE_FILTER';
const DRAFT_PLAYER = 'DRAFT_PLAYER';
const UNDRAFT_PLAYER = 'UNDRAFT_PLAYER';
const SAVE_DRAFT = 'SAVE_DRAFT';
const FETCH_DRAFT = 'FETCH_DRAFT';

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

export const saveDraft = formValues => async (dispatch, getState) => {
  const {username} = getState().auth;
  const response = await fantasy.put('/draft', {...formValues, username});
  dispatch({type: SAVE_DRAFT, payload: response.data});
}

export const fetchDraft = () => async (dispatch, getState) => {
  const {username} = getState().auth;
  const response = await fantasy.get('/draft', {username});
  if (response.data.length !== 0) {
    dispatch({type: FETCH_DRAFT, payload: response.data[0].players});
  }
}

export const undraftPlayer = player => async dispatch => {
  const response = await fantasy.delete('/draft', {data: {...player}});
  dispatch({type: UNDRAFT_PLAYER, payload: response.data});
}