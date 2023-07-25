import styles from "./AddPostForm.module.css";
import { useState } from "react";

import overlayOnOff from "../../utils/overlayOnOff";

import addNewPost from "../../services/addNewPost";

const AddPostForm = ({ formOverlay, setFormOverlay, posts, setPosts }) => {
  const [newPost, setNewPost] = useState({
    title: "",
    imageUrl: "",
    status: "",
    comments: [],
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  return (
    <div className={styles.overlay}>
      <form>
        <label htmlFor="title">
          Title:
          <input
            type="text"
            name="title"
            id="title"
            value={newPost.title}
            onChange={handleInputChange}
            placeholder="Title"
          />
        </label>

        <label htmlFor="imageUrl">
          ImageUrl:
          <input
            type="text"
            name="imageUrl"
            value={newPost.imageUrl}
            onChange={handleInputChange}
            id="imageUrl"
            placeholder="ImageUrl"
          />
        </label>

        <label htmlFor="status">
          Status:
          <input
            type="text"
            name="status"
            id="status"
            value={newPost.status}
            onChange={handleInputChange}
            placeholder="Status"
          />
        </label>
      </form>

      <button
        type="submit"
        onClick={() =>
          addNewPost(
            posts,
            setPosts,
            newPost,
            setNewPost,
            overlayOnOff,
            formOverlay,
            setFormOverlay
          )
        }
      >
        Post
      </button>

      <button
        onClick={() => overlayOnOff("addForm", formOverlay, setFormOverlay)}
      >
        ❌
      </button>
    </div>
  );
};

export default AddPostForm;
