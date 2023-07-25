import styles from "./CommentForm.module.css";
import overlayOnOff from "../../utils/overlayOnOff";

const CommentForm = ({ formOverlay, setFormOverlay }) => {
  return (
    <div className={styles.overlay}>
      <form>
        <label htmlFor="comment">
          Comment:
          <input type="text" name="comment" id="comment" />
        </label>

        <button
          type="submit"
          onClick={() => overlayOnOff("comment", formOverlay, setFormOverlay)}
        >
          Post
        </button>

        <button
          onClick={() => overlayOnOff("comment", formOverlay, setFormOverlay)}
        >
          ❌
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
