import styles from "./Post.module.css";
import { useState } from "react";
import CommentForm from "../CommentForm/CommentForm";
import AddPostForm from "../AddPostForm/AddPostForm";

const Post = ({ post }) => {
  const [formOverlay, setFormOverlay] = useState({
    addForm: true,
    editForm: false,
    comment: false,
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
      {formOverlay.addForm && <AddPostForm></AddPostForm>}
    </div>
  );
};
export default Post;
