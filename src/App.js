import "./App.css";
import { useState } from "react";
import Post from "./components/Post/Post.js";
import mockPosts from "./data/mockPosts";
import overlayOnOff from "./utils/overlayOnOff";

function App() {
  const [posts, setPosts] = useState(mockPosts);

  const [formOverlay, setFormOverlay] = useState({
    addForm: false,
    editForm: false,
    comment: false,
  });

  const [postToEdit, setPostToEdit] = useState(null);

  const handleEditClick = post => {
    setPostToEdit(post);
    overlayOnOff("editForm", formOverlay, setFormOverlay);
  };

  return (
    <div>
      <div>
        <button
          onClick={() => overlayOnOff("addForm", formOverlay, setFormOverlay)}
        >
          Add New Post
        </button>
      </div>
      {posts.map(post => {
        return (
          <Post
            key={post.id}
            post={post}
            setPosts={setPosts}
            posts={posts}
            formOverlay={formOverlay}
            setFormOverlay={setFormOverlay}
            onEditClick={() => handleEditClick(post)}
            postToEdit={postToEdit}
          ></Post>
        );
      })}
    </div>
  );
}

export default App;
