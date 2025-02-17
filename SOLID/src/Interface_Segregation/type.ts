export interface IUserActions {
  fetchUser: () => void;
  updateUser: () => void;
  login: () => void;
}

export interface IUserData {
  fetchUser: () => void;
  updateUser: () => void;
}

export interface IAuthActions {
  login: () => void;
}
