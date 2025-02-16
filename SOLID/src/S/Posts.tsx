import { useEffect, useState } from "react";
import { TPost } from "./type";
import { PostsList } from "./PostsList";

// The right approach, we separated rendering and data acquisition, made them separate components

export const Posts = () => {
  const [posts, setPosts] = useState<TPost[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        await fetch("https://jsonplaceholder.typicode.com/posts")
          .then((res) => res.json())
          .then((data) => setPosts(data));
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    loadPosts();
  }, []);

  return <PostsList posts={posts} />;
};
