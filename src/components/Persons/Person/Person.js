import React from 'react';
import classes from './Person.css'

const person = props => {
  
   return (
    <div className={classes.Card}>
      <p>
        I'm <strong>{props.name}</strong> and I am <strong>{props.age}</strong>{' '}
        years old
      </p>
      <p>{props.children}</p>
      <input onChange={props.changed} className={classes.NameInput} type='text' value={props.name} />
      <div className={classes.Delete} onClick={props.clicked}>
        <span>&times;</span>
      </div>
    </div>
  );
};

export default person;
