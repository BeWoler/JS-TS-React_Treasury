export type TUser = {
  name: string;
  username: string;
  email: string;
};

export type TUsersList = {
  users: TUser[];
};

export type TPost = {
  id: number;
  title: string;
  body: string;
};

export type TPostsList = {
  posts: TPost[];
};
