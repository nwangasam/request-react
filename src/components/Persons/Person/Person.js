import React, { Component } from 'react';
import classes from './Person.css'

class Person extends Component {

  constructor(props) {
    super(props);
    console.log('[Person.js] Inside constructor()')
  }
  
  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount()')
  }
  
  componentDidMount() {
    console.log('[Person.js] Inside componentDidMount()')
  }
  
  
  render() {
    console.log('[Person.js] Inside render()')
    
    return <div className={classes.Card}>
      <p>
        I'm <strong>{this.props.name}</strong> and I am <strong>{this.props.age}</strong>{' '}
        years old
      </p>
      <p>{this.props.children}</p>
      <input onChange={this.props.changed} className={classes.NameInput} type='text' value={this.props.name} />
      <div className={classes.Delete} onClick={this.props.clicked}>
        <span>&times;</span>
      </div>
    </div>
  }
}

export default Person;
