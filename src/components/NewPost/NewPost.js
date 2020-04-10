import React, { Component } from 'react';
import axios from 'axios';

import classes from './NewPost.css';

class NewPost extends Component {

    state = {
        title: "",
        content: "",
        author: "Nwanguma S."
    }
    
    postDataHandler = () => {
        const post = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author
        };
        axios.post('/posts', post)
        .then(response => {
            console.log(response.data);
        })
    }
    
  render() {
    return (
      <div className={classes.NewPost}>
        <h1>Add a post</h1>
        <div className={classes.Field}>
          <label>Title</label>
          <input type='text' value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} />
        </div>
        <div className={classes.Field}>
          <label>Content</label>
          <textarea
            row='4'
            value={this.state.content}
            onChange={(e) => this.setState({ content: e.target.value })}
          ></textarea>
        </div>
        <div className={classes.Field}>
          <label>Author</label>
          <select value={this.state.author} onChange={(e) => this.setState({ author: e.target.value })}>
            <option value='Sammy'>Sammy</option>
            <option value='Paul'>Paul</option>
          </select>
        </div>
        <button onClick={this.postDataHandler}>Add Post</button>
      </div>
    );
  }
}

export default NewPost;
