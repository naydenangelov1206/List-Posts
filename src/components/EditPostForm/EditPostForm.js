import styles from "../AddPostForm/AddPostForm.module.css";
import { useState } from "react";

const EditPostForm = () => {
  const [newPost, setNewPost] = useState({
    title: "",
    imageUrl: "",
    status: "",
    comments: [],
  });

  return (
    <div className={styles.overlay}>
      <form>
        <label htmlFor="title">
          Title:
          <input type="text" name="title" id="title" placeholder="Title" />
        </label>

        <label htmlFor="imageUrl">
          ImageUrl:
          <input
            type="text"
            name="imageUrl"
            id="imageUrl"
            placeholder="ImageUrl"
          />
        </label>

        <label htmlFor="status">
          Status:
          <input type="text" name="status" id="status" placeholder="Status" />
        </label>
      </form>

      <button type="submit">Post</button>

      <button>❌</button>
    </div>
  );
};

export default EditPostForm;
