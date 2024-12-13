import { useContext } from "react";
import { PostsContext } from "../context/PostContext";
import PostCard from "./PostCard";

export default function PostsList() {
  const { posts } = useContext(PostsContext);

  return (
    <div className="row">
      {posts.map((post) => (
        <div key={post.id} className="col-md-4 mb-4">
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
}
