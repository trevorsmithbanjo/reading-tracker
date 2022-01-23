import { createSelector } from 'reselect';

// TODO Add proper type for state.
const selectUser = (state: any) => state.user;

const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser,
);

export default selectCurrentUser;
