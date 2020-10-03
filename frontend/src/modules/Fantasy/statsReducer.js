export default (state={}, action) => {
  switch(action.type){
    case 'FETCH_PLAYERS_STATS':
      return {...state, ...action.payload.reduce((accu, item) => ({...accu, [item['playerId']]: item}), {})}
    default:
      return state;
  }
}

