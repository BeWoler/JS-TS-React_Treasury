import { useEffect, useState } from "react";
import { TPost, TUser } from "./type";

// Bad example, the component solves several tasks, it receives both posts and users and renders them
// The correct principle is to separate the logic and rendering component and separate getting users and posts

export const BadExample = () => {
  const [users, setUsers] = useState<TUser[]>([]);
  const [posts, setPosts] = useState<TPost[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        await fetch("https://jsonplaceholder.typicode.com/posts")
          .then((res) => res.json())
          .then((data) => setPosts(data));

        await fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((data) => setUsers(data));
      } catch (error) {
        console.error("Error fetching posts and users:", error);
      }
    };

    getData();
  }, []);

  return (
    <>
      <div>
        <h2>Posts</h2>
        <div>
          {posts.map((post) => (
            <div key={post.id}>
              {post.title} - {post.body}
            </div>
          ))}
        </div>
      </div>
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
    </>
  );
};
