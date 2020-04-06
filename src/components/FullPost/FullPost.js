import React, { Component } from 'react';
import classes from './FullPost.css';
import axios from 'axios';

class FullPost extends Component {
  state = {
    loadedPost: null,
  };

  componentDidUpdate() {
    console.log(
      '[FullPost.js] From Inside FullPost]',
      this.loadedPost,
      this.props.postId
    );
    if (this.props.postId) {
      console.log(this.state.loadedPost);
      if (
        !this.state.loadedPost ||
        (this.state.loadedPost &&
          this.state.loadedPost.title !== this.props.postId)
      ) {
        axios
          .get(
            `http://newsapi.org/v2/everything?q="${this.props.postId}"&apiKey=b7974a8453a74accbc4d01d2579a83bf`
          )
          .then((response) => {
            this.setState({ loadedPost: response.data.articles[0] });
          });
      }
    }
  }

  render() {
    let post = (
      <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
        Please Select a Post!
      </p>
    );
    if (this.props.postId) {
      post = (
        <p style={{ textAlign: 'center', fontWeight: 'bold' }}>Loading...</p>
      );
    }
    if (this.state.loadedPost) {
      post = (
        <div className={classes.FullPost}>
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.content}</p>
          <p className={classes.Description}>
            {this.state.loadedPost.description}
          </p>
          <div className='Edit'>
            <button className={classes.Delete}>READ</button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;
