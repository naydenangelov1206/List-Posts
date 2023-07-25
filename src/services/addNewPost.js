const addNewPost = (
  posts,
  setPosts,
  newPost,
  setNewPost,
  overlayOnOff,
  formOverlay,
  setFormOverlay
) => {
  const postToAdd = {
    id: posts.length + 1,
    title: newPost.title,
    imageUrl: newPost.imageUrl,
    status: newPost.status,
    comments: [],
  };

  setPosts([...posts, postToAdd]);

  setNewPost({
    title: "",
    imageUrl: "",
    status: "",
    comments: [],
  });

  overlayOnOff("addForm", formOverlay, setFormOverlay);
};

export default addNewPost;
