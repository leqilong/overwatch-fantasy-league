import { createSelector } from 'reselect';

const getPlayers = state => state.players;
const getRoleFilter = state => state.roleFilter;
const getDraft = state => state.draft;

export const getVisiblePlayers = createSelector(
  [getRoleFilter, getPlayers],
  (roleFilter, players) => {
    return roleFilter === 'all' ? players : players.filter(player => player.attributes.role === roleFilter);
  }
);

export const getCurrentlyDraftedTankPlayers = createSelector(
  getDraft,
  draft => draft.filter(player => player.role === 'tank').slice(-2)
);

export const getCurrentlyDraftedDamagePlayers = createSelector(
  getDraft,
  draft => draft.filter(player => player.role === 'offense').slice(-2)
);

export const getCurrentlyDraftedSupportPlayers = createSelector(
  getDraft,
  draft => draft.filter(player => player.role === 'support').slice(-2)
);
