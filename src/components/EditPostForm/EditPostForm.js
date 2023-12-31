import styles from "../AddPostForm/AddPostForm.module.css";
import { useState } from "react";

import editPost from "../../services/editPost";

import overlayOnOff from "../../utils/overlayOnOff";

const EditPostForm = ({
  formOverlay,
  setFormOverlay,
  posts,
  setPosts,
  postToEdit,
}) => {
  const [editedPost, setEditedPost] = useState({
    title: postToEdit.title,
    imageUrl: postToEdit.imageUrl,
    status: postToEdit.status,
    comments: postToEdit.comments,
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
      <div className={styles.formContainer}>
        <form className={styles.addPostsForm}>
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

          <button
            type="submit"
            onClick={() =>
              editPost(
                posts,
                postToEdit.id,
                editedPost,
                setPosts,
                overlayOnOff,
                formOverlay,
                setFormOverlay
              )
            }
            className={styles.postButton}
          >
            Post
          </button>
        </form>

        <button
          onClick={() => overlayOnOff("editForm", formOverlay, setFormOverlay)}
          className={styles.cancelButton}
        >
          ❌
        </button>
      </div>
    </div>
  );
};

export default EditPostForm;
