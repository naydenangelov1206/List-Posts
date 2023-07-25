const deletePost = (post, setPosts, posts) => {
  const updatePosts = posts.filter(p => p.id !== post.id);
  setPosts(updatePosts);
};

export default deletePost;
