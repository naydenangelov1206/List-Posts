import "./App.css";
import { useState } from "react";

import mockPosts from "./data/mockPosts";

import overlayOnOff from "./utils/overlayOnOff";

import Post from "./components/Post/Post.js";

function App() {
  const [posts, setPosts] = useState(mockPosts);

  const [formOverlay, setFormOverlay] = useState({
    addForm: false,
    editForm: false,
    comment: false,
  });

  const [postToEdit, setPostToEdit] = useState(null);
  const [postToComment, setPostToComment] = useState(null);

  const handleEditClick = post => {
    setPostToEdit(post);
    overlayOnOff("editForm", formOverlay, setFormOverlay);
  };
  const handleCommentClick = post => {
    setPostToComment(post);
    overlayOnOff("comment", formOverlay, setFormOverlay);
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
            onCommentClick={() => handleCommentClick(post)}
            postToComment={postToComment}
          ></Post>
        );
      })}
    </div>
  );
}

export default App;
