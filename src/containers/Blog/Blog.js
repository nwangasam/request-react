import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';

import classes from './Blog.css';
import axios from 'axios';

class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: null
  };

  componentDidMount() {
    axios
      .get(
        'http://newsapi.org/v2/everything?q=coronavirus&from=2020-03-05&sortBy=publishedAt&apiKey=b7974a8453a74accbc4d01d2579a83bf'
      )
      .then((response) => {
          console.log("Sending Request to server...")
        const filteredPosts = response.data.articles.slice(0, 4);
          const updatedPosts = filteredPosts.map((post, i) => {
            return { ...post, id:  Math.random() + i }
          });
          this.setState({ posts: updatedPosts });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  selectedPostHandler = (id) => {
      this.setState({ selectedPostId: id })
  };

  render() {
    const posts = this.state.posts.map((post, i) => {
      return (
        <Post
          key={i}
          title={post.title}
          author={post.author}
          clicked={() => this.selectedPostHandler(post.title)}
        />
      );
    });

    return (
      <div className={classes.Blog}>
        <section className={classes.Posts}>{posts}</section>
        <section>
          <FullPost postId={this.state.selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
