const mockPosts = [
  {
    id: 1,
    title: "First Post",
    status: "Test Post 1.",
    imageId: 1,
    imageUrl:
      "https://cms.hugofox.com//resources/images/a0fea022-8ec7-4a37-b4e7-214846e7656f.jpg",
    comments: [
      {
        id: 1,
        text: "Test comment 1",
        userImage: "https://img.freepik.com/free-icon/user_318-504048.jpg",
        userName: "userName1",
      },
      {
        id: 2,
        text: "Test comment 2",
        userImage: "https://img.freepik.com/free-icon/user_318-504048.jpg",
        userName: "userName2",
      },
    ],
  },
  {
    id: 2,
    title: "Second Post",
    status: "Test Post 2.",
    imageId: 2,
    imageUrl:
      "https://cms.hugofox.com//resources/images/a0fea022-8ec7-4a37-b4e7-214846e7656f.jpg",
    comments: [
      {
        id: 1,
        text: "Test comment 3",
        userImage: "https://img.freepik.com/free-icon/user_318-504048.jpg",
        userName: "userName3",
      },
    ],
  },
];

export default mockPosts;
