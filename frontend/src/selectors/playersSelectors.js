import { createSelector } from 'reselect';

const getPlayers = state => state.players;
const getRoleFilter = state => state.roleFilter;

export const getVisiblePlayers = createSelector(
  [getRoleFilter, getPlayers],
  (roleFilter, players) => {
    return roleFilter === 'all' ? players : players.filter(player => player.attributes.role === roleFilter);
  }
)
