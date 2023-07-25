import styles from "./CommentForm.module.css";

const CommentForm = () => {
  return (
    <div className={styles.overlay}>
      <form>
        <label htmlFor="comment">
          Comment:
          <input type="text" name="comment" id="comment" />
        </label>

        <button type="submit">Post</button>

        <button>❌</button>
      </form>
    </div>
  );
};

export default CommentForm;
