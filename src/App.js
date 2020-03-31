import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';
import Radium, { StyleRoot } from 'radium';

class App extends Component {
  state = {
    persons: [
      { id: 'klxl', name: 'Nwanguma Samuel', age: 22 },
      { id: 'iwasdf', name: 'Ebuka Spy', age: 19 },
      { id: 'oiwer', name: 'Chinonso Uwakwe', age: 16 }
    ],
    showPersons: false
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonHander = personId => {
    const persons = [...this.state.persons];

    const personIndex = persons.findIndex(p => {
      return p.id === personId;
    });

    persons.splice(personIndex, 1);

    this.setState({ persons: persons });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons });
  };

  render() {
    const style = {
      backgroundColor: '#fff',
      padding: '12px 18px',
      color: 'blueviolet',
      fontSize: '18px',
      cursor: 'pointer',
      margin: '16px 0 20px',
      border: 'none',
      boxShadow: '0px 3px 16px rgba(0,0,0,.15)',
      // border: '1.5px solid blueviolet',
      outline: 'none',
      ':hover': {
        backgroundColor: 'green',
        color: '#fff'
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div style={{ textAlign: 'left' }}>
          {this.state.persons.map(person => {
            return (
              <Person
                clicked={() => this.deletePersonHander(person.id)}
                changed={event => this.nameChangeHandler(event, person.id)}
                key={person.id}
                name={person.name}
                age={person.age}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = 'blueviolet';
      style.boxShadow = 'inset 0px 3px 8px rgba(0,0,0,.2) inset 0px -3px 8px rgba(0,0,0,.2)';
      style.color = '#fff';
      style.border = 'transparent';
      style[':hover'] = {
        backgroundColor: 'red',
        color: '#fff'
      }
    }

    // Show dynamic styles
    const classes = [];

    if (this.state.persons.length <= 2) classes.push('red');
    if (this.state.persons.length <= 1) classes.push('bold');

    // Show dynamic sub-heading
    let subHeading;

    if (this.state.persons.length > 0) {
      subHeading = (
        <p className={classes.join(' ')}>
          Below include a lists of some friends!
          <b>
            <em>({this.state.persons.length})</em>
          </b>
        </p>
      );
    } else {
      subHeading = <p clasName='red'>No person left :(</p>
    }

    return (
      <StyleRoot>
        <div className='App'>
        <h1>
          Welcome, <br />
          to my React app
        </h1>
        {subHeading}
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);