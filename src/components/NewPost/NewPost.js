import React, { Component } from 'react';

import classes from './NewPost.css';

class NewPost extends Component {
    render () {
        return (
            <div className={classes.NewPost}>
                <h1>Add a Post</h1>
                <form>
                    <div className={classes.Field}>
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" />
                    </div>

                    <div className={classes.Field}>
                        <label htmlFor="content">Content</label>
                        <textarea></textarea>
                    </div>

                    <div className={classes.Field}>
                        <label htmlFor="author">Author</label>
                        <select name="author">
                            <option>Chidera</option>
                            <option>Sammy</option>
                            <option>Andrei</option>
                        </select>
                    </div>

                    <input type="submit" value="Add Post" />
                </form>
            </div>
        );
    }
}

export default NewPost;