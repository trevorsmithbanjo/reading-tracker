import UserActionTypes from './user.types';

const setCurrentUser = (user: User) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

export default { setCurrentUser };
