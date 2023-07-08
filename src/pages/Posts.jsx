import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Posts.scss";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => res.json())
      .then((res) => {
        setPosts(res);
      });
  }, []);

  const openPost = (id) => {
    navigate(`/posts/${id}`);
  };

  if (posts.length) {
    return (
      <>
        <h1>Posts</h1>
        <div className="posts">
          {posts.map((post) => (
            <div
              className="post"
              key={post.id}
              onClick={() => openPost(post.id)}
            >
              <div className="title">{post.title}</div>
              <div className="body">{post.body.slice(0, 75)}...</div>
              <div className="link">Read more</div>
            </div>
          ))}
        </div>
      </>
    );
  }
};

export default Posts;
