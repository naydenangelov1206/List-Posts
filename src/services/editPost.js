const editPost = (
  posts,
  postId,
  editedPost,
  setPosts,
  overlayOnOff,
  formOverlay,
  setFormOverlay
) => {
  const updatedPost = posts.map(post => {
    return post.id === postId ? { ...post, ...editedPost } : post;
  });

  setPosts(updatedPost);

  overlayOnOff("editForm", formOverlay, setFormOverlay);
};

export default editPost;
