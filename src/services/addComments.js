import overlayOnOff from "../utils/overlayOnOff";

const addComment = (
  setNewComment,
  newComment,
  post,
  setPosts,
  formOverlay,
  setFormOverlay
) => {
  const updatedPost = {
    ...post,
    comments: [
      ...post.comments,
      {
        id: post.comments.length + 1,
        text: newComment,
        userImage: "https://img.freepik.com/free-icon/user_318-504048.jpg",
        userName: "userName" + post.comments.length + 1,
      },
    ],
  };

  setPosts(prevPosts => {
    return prevPosts.map(p => (p.id === post.id ? updatedPost : p));
  });

  setNewComment("");

  overlayOnOff("comment", formOverlay, setFormOverlay);
};

export default addComment;
