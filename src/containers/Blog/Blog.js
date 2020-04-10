import React, { Component } from 'react';
import axios from '../../axios';

import classes from './Blog.css';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';

class Blog extends Component {

  state = {
    posts: [],
    selectedPostId: null,
    error: false, 
    errorMessage: ''
  }

  componentDidMount () {
    axios.get('/posts')
      .then(response => {
        const posts = response.data.splice(0, 4);
        const updatedPosts = posts.map(post => {
          return {...post, author: "Nwanguma S."}
        })
        this.setState({ posts: updatedPosts })
      })
      .catch(err => {
        this.setState({ error: true, errorMessage: err.message });
        console.log(err);
      })
  }

  selectedPostHandler = (id) => {
    this.setState({ selectedPostId: id })
  }

  render () {
    let posts = <p style={{ textAlign: 'center', color: 'red' }}>{this.state.errorMessage}!</p>

    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return <Post 
                  key={post.title} 
                  title={post.title} 
                  author={post.author} 
                  clicked={() => this.selectedPostHandler(post.id)}/>
      })
    }
    
    return (
      <div className={classes.Blog}>
        <section>
          <div className={classes.Posts}>{posts}</div>
        </section>
        <section>
          <FullPost id={this.state.selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
