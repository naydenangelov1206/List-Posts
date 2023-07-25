import "./App.css";
import { useState } from "react";
import mockPosts from "./data/mockPosts";
import Post from "./components/Post/Post.js";

function App() {
  const [posts, setPosts] = useState(mockPosts);

  return (
    <div>
      {posts.map(post => {
        return <Post key={post.id} post={post}></Post>;
      })}
    </div>
  );
}

export default App;
