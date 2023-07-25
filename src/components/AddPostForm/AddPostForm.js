import overlayOnOff from "../../utils/overlayOnOff";
import styles from "./AddPostForm.module.css";
import { useState } from "react";

const AddPostForm = ({ formOverlay, setFormOverlay }) => {
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

      <button
        type="submit"
        onClick={() => overlayOnOff("addForm", formOverlay, setFormOverlay)}
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
