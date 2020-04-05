import React, { Component } from 'react';
import classes from './FullPost.css';

class FullPost extends Component {
    
    render () {
        let post = <p>Please Select a Post!</p>;
        post = (
            <div className={classes.FullPost}>
                <h1>Title</h1>
                <p>Content</p>
                <div className="Edit">
                    <button className={classes.Delete}>DELETE</button>
                </div>
            </div>
        )
        return post;
    }
}

export default FullPost;