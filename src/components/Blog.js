// src/components/Blog.js
import React from 'react';
import useApiData from '../hooks/useApiData';
import './Blog.css'; // Import the CSS file

const Blog = () => {
  const { data: blogPosts, loading, error } = useApiData('https://jsonplaceholder.typicode.com/posts');

  return (
    <div className="container">
      <h2>Blog Page</h2>
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">Error: {error.message}</p>}
      <ul>
        {blogPosts &&
          blogPosts.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Blog;
