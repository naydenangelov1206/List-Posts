import styles from "./Post.module.css";
import CommentForm from "../CommentForm/CommentForm";
import { useState } from "react";

const Post = ({ post }) => {
  const [formOverlay, setFormOverlay] = useState({
    addForm: false,
    editForm: false,
    comment: true,
  });

  return (
    <div className={styles.postContainer}>
      <h2 className={styles.title}>{post.title}</h2>
      <div className={styles.buttonContainer}>
        <button>Edit Post</button>
        <button>Delete Post</button>
        <button>Comment</button>
      </div>
      <img src={post.imageUrl} className={styles.postImage}></img>
      <p className={styles.content}>{post.status}</p>
      <div>
        {post.comments.map(comment => {
          return (
            <div key={comment.id}>
              <div className={styles.comment}>
                <img src={comment.userImage} alt="user-avatar" width={20} />:
                {comment.userName}
              </div>
              <p>{comment.text}</p>
            </div>
          );
        })}
      </div>

      {formOverlay.comment && <CommentForm></CommentForm>}
    </div>
  );
};
export default Post;
