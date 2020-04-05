import React, { Component } from 'react';
import classes from './Post.css';

class Post extends Component {
    render () {
        return (
            <div className={classes.Post}>
                <h1>{this.props.title}</h1>
                <p>{this.props.author}</p>
            </div>
        );
    }
}

export default Post;