import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';

import classes from './Blog.css';
import axios from 'axios';

class Blog extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios.get('http://newsapi.org/v2/everything?q=bitcoin&from=2020-03-05&sortBy=publishedAt&apiKey=b7974a8453a74accbc4d01d2579a83bf').then((response) => {
      const filteredPosts = response.data.articles.slice(0, 4);
    //   const updatedPosts = filteredPosts.map((post) => {
    //     return { ...post, author: 'Nwangasam S.' };
    //   });
    //   this.setState({ posts: updatedPosts });
      this.setState({ posts: filteredPosts });
    })
    .catch(err => {
        console.log(err);
    })
  }

  render() {
    const posts = this.state.posts.map((post) => {
      return <Post key={post.id} title={post.title} author={post.author} />;
    });

    return (
      <div className={classes.Blog}>
        <section className={classes.Posts}>{posts}</section>
        <section>
          <FullPost />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
