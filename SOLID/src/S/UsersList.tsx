import { FC } from "react";
import { TUsersList } from "./type";

// The right approach, we separated rendering and data acquisition, made them separate components

export const UsersList: FC<TUsersList> = ({ users }) => {
  return (
    <div>
      <h2>Users</h2>
      <div>
        {users.map((user) => (
          <div key={user.email}>
            {user.name} - {user.email}
          </div>
        ))}
      </div>
    </div>
  );
};
