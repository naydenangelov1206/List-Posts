import { useState } from "react";
import styles from "./CommentForm.module.css";

import overlayOnOff from "../../utils/overlayOnOff";

import addComment from "../../services/addComments";

const CommentForm = ({
  formOverlay,
  setFormOverlay,
  postToComment,
  setPosts,
}) => {
  const [newComment, setNewComment] = useState("");

  const handleCommentChange = e => {
    setNewComment(e.target.value);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.formContainer}>
        <form className={styles.commentForm}>
          <label htmlFor="comment">
            Comment:
            <input
              type="text"
              name="comment"
              id="comment"
              value={newComment}
              onChange={handleCommentChange}
            />
          </label>

          <button
            type="submit"
            onClick={() =>
              addComment(
                setNewComment,
                newComment,
                postToComment,
                setPosts,
                formOverlay,
                setFormOverlay
              )
            }
            className={styles.postButton}
          >
            Post
          </button>

          <button
            onClick={() => overlayOnOff("comment", formOverlay, setFormOverlay)}
            className={styles.cancelButton}
          >
            ❌
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommentForm;
