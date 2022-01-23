import UserActionTypes from './user.types';

// TODO Add proper type for user.
const setCurrentUser = (user: any) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

export default { setCurrentUser };
