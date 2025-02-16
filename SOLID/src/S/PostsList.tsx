import { FC } from "react";
import { TPostsList } from "./type";

// The right approach, we separated rendering and data acquisition, made them separate components

export const PostsList: FC<TPostsList> = ({ posts }) => {
  return (
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
  );
};
