import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import './Post.scss';

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((res) => setPost(res));
  });

  if (post) {
    return (
      <div>
        <h1>Post details</h1>
        <h2>Title: {post.title}</h2>
        <div>Text: {post.body}</div>
      </div>
    );
  }
};

export default Post;
