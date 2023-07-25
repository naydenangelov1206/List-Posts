import styles from "../AddPostForm/AddPostForm.module.css";
import { useState } from "react";

import editPost from "../../services/editPost";

import overlayOnOff from "../../utils/overlayOnOff";

const EditPostForm = ({
  formOverlay,
  setFormOverlay,
  posts,
  setPosts,
  post,
}) => {
  const [editedPost, setEditedPost] = useState({
    title: post.title,
    imageUrl: post.imageUrl,
    status: post.status,
    comments: post.comments,
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setEditedPost(prevState => ({
      ...prevState,
      [name]: value,
    }));
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
            value={editedPost.title}
            onChange={handleInputChange}
            placeholder="Title"
          />
        </label>

        <label htmlFor="imageUrl">
          ImageUrl:
          <input
            type="text"
            name="imageUrl"
            value={editedPost.imageUrl}
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
            value={editedPost.status}
            onChange={handleInputChange}
            placeholder="Status"
          />
        </label>
      </form>

      <button
        type="submit"
        onClick={() =>
          editPost(
            posts,
            post.id,
            editedPost,
            setPosts,
            overlayOnOff,
            formOverlay,
            setFormOverlay
          )
        }
      >
        Post
      </button>

      <button
        onClick={() => overlayOnOff("editForm", formOverlay, setFormOverlay)}
      >
        ❌
      </button>
    </div>
  );
};

export default EditPostForm;
