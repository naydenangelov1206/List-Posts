import { useState } from "react";
import mockPosts from "./data/mockPosts";

function App() {
  const [posts, setPosts] = useState(mockPosts);
  console.log(posts);

  return <h1>Test</h1>;
}

export default App;
