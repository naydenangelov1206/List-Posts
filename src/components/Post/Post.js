import styles from "./Post.module.css";
import overlayOnOff from "../../utils/overlayOnOff";

import deletePost from "../../services/deletePost";

import CommentForm from "../CommentForm/CommentForm";
import AddPostForm from "../AddPostForm/AddPostForm";
import EditPostForm from "../EditPostForm/EditPostForm";

const Post = ({
  post,
  setPosts,
  posts,
  formOverlay,
  setFormOverlay,
  onEditClick,
  postToEdit,
  onCommentClick,
  postToComment,
}) => {
  return (
    <div className={styles.postContainer}>
      <h2 className={styles.title}>{post.title}</h2>
      <div className={styles.buttonContainer}>
        <button onClick={onEditClick}>Edit Post</button>
        <button onClick={() => deletePost(post, setPosts, posts)}>
          Delete Post
        </button>
        <button onClick={onCommentClick}>Comment</button>
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

      {formOverlay.comment && (
        <CommentForm
          formOverlay={formOverlay}
          setFormOverlay={setFormOverlay}
          postToComment={postToComment}
          setPosts={setPosts}
        ></CommentForm>
      )}
      {formOverlay.addForm && (
        <AddPostForm
          formOverlay={formOverlay}
          setFormOverlay={setFormOverlay}
          posts={posts}
          setPosts={setPosts}
        ></AddPostForm>
      )}
      {formOverlay.editForm && (
        <EditPostForm
          formOverlay={formOverlay}
          setFormOverlay={setFormOverlay}
          posts={posts}
          setPosts={setPosts}
          postToEdit={postToEdit}
        ></EditPostForm>
      )}
    </div>
  );
};

export default Post;
