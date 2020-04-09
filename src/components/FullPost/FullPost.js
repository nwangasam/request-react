import React, { Component } from 'react';
import axios from 'axios';

import classes from './FullPost.css';

class FullPost extends Component {
  state = {
    loadedPost: null,
  };

  componentDidUpdate() {
    if (this.props.id) {
      if (
        !this.state.loadedPost ||
        (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)
      ) {
        axios
          .get('http://jsonplaceholder.typicode.com/posts/' + this.props.id)
          .then((response) => {
            this.setState({ loadedPost: response.data });
          })
          .catch((err) => console.log(err));
      }
    }
  }

  deletePostHandler = () => {
    axios.delete('http://jsonplaceholder.typicode.com/posts/' + this.props.id)
      .then(console.log)
  }

  render() {

    let post = <p style={{ textAlign: 'center' }}>Please select a post</p>
    
    if (this.props.id) post = <p style={{ textAlign: 'center' }}>Loading...</p>

    if (this.state.loadedPost) {
      post = (
        <div className={classes.FullPost}>
        <h1>{this.state.loadedPost.title}</h1>
        <p>{this.state.loadedPost.body}</p>
        <div className={classes.Edit}>
          <button onClick={this.deletePostHandler} className={classes.Delete}>Delete</button>
        </div>
      </div>
      )
    }

    return post;
  }
}

export default FullPost;
