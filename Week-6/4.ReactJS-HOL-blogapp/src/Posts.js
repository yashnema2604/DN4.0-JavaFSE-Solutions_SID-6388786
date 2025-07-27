import React from 'react';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    // Initialize state
    this.state = {
      posts: [],
      hasError: false
    };
  }

  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => this.setState({ posts: data }))
      .catch(error => console.error("Fetch error:", error));
  }

  componentDidMount() {
    this.loadPosts();
  }

  render() {
    return (
      <div>
        <h2>Posts</h2>
        {this.state.posts.map(post => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    alert("An error occurred in Posts component.");
    console.error("Caught error:", error, info);
  }
}

export default Posts;
