import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = props => {
  const style = {
    '@media (min-width: 800px)': {
      display: 'inline-block',
      maxWidth: '250px',
      backgroundColor: 'blueviolet',
      verticalAlign: 'top',
      margin: '1rem',
      textAlign: 'center'
    }
  };

  return (
    <div className='Person' style={style}>
      <p>
        I'm <strong>{props.name}</strong> and I am <strong>{props.age}</strong>{' '}
        years old
      </p>
      <p>{props.children}</p>
      <input onChange={props.changed} type='text' value={props.name} />
      <div className='delete' onClick={props.clicked}>
        <span>&times;</span>
      </div>
    </div>
  );
};

export default Radium(person);
