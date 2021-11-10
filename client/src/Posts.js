import React, { useEffect } from "react";
import { getPosts } from "../api/posts";

const Posts = ({ posts, setPosts }) => {

  useEffect(() => {
    (async () => {
      const newPosts = await getPosts();
      setPosts(newPosts);
    })();
  }, []);
}

  return (
    <div>
      {posts.map((post)=>{
        return (
          <div key={post.id}>

          </div>
        )
      })}
    </div>);

export default Posts;
