import React, { Component } from 'react';
import axios from 'axios';

import classes from './Blog.css';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';

class Blog extends Component {

  state = {
    posts: [],
    selectedPostId: null
  }

  componentDidMount () {
    axios.get('http://jsonplaceholder.typicode.com/posts')
      .then(response => {
        const posts = response.data.splice(0, 4);
        const updatedPosts = posts.map(post => {
          return {...post, author: "Nwanguma S."}
        })
        this.setState({ posts: updatedPosts })
      })
      .catch(err => { console.log(err) })
  }

  selectedPostHandler = (id) => {
    this.setState({ selectedPostId: id })
  }

  render () {

    const posts = this.state.posts.map(post => {
      return <Post 
                key={post.title} 
                title={post.title} 
                author={post.author} 
                clicked={() => this.selectedPostHandler(post.id)}/>
    })
    
    return (
      <div className={classes.Blog}>
        <section>
          <div className={classes.Posts}>{posts}</div>
        </section>
        <section>
          <FullPost id={this.state.selectedPostId} />
        </section>
        <section>
          NEW POST
        </section>
      </div>
    );
  }
}

export default Blog;
