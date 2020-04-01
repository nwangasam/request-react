import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';

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
    return (
        <div className={classes.App}>
        <Cockpit 
          appTitle={this.props.title}
          toggle={this.togglePersonsHandler}
          persons={this.state.persons}
          showPersons={this.state.showPersons} />
        <Persons
            showPersons={this.state.showPersons}
            persons={this.state.persons} 
            clicked={this.deletePersonHander}
            changed={this.nameChangeHandler} />
      </div>
    );
  }
}

export default App;