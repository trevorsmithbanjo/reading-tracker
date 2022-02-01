type User = {
  createdAt: number;
  displayName: string;
  email: string;
};

type UserAction = {
  type: string;
  payload: User;
};

type UserState = {
  currentUser: User | null;
};

type State = {
  user: UserState;
};

type DispatchType = (args: UserAction) => UserAction;
