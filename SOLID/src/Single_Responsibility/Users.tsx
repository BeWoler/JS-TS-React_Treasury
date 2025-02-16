import { useEffect, useState } from "react";
import { UsersList } from "./UsersList";
import { TUser } from "./type";

// The right approach, we separated rendering and data receiving, made them separate components

export const Users = () => {
  const [users, setUsers] = useState<TUser[]>([]);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        await fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((data) => setUsers(data));
      } catch (err) {
        console.error("Error loading users:", err);
      }
    };

    loadUsers();
  }, []);

  return <UsersList users={users} />;
};
