import React from 'react';
import classes from './Post.css';

const post = (props) => {
        return (
            <article className={classes.Post} onClick={props.clicked}>
                <h1>{props.title}</h1>
                <p>{props.author}</p>
            </article>
        );
}

export default post;