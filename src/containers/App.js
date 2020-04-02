import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { id: 'klxl', name: 'Nwanguma Samuel', age: 22 },
        { id: 'iwasdf', name: 'Ebuka Spy', age: 19 },
        { id: 'oiwer', name: 'Chinonso Uwakwe', age: 16 }
      ],
      showPersons: false,
      toggleClicked: 0
    };
    console.log('[App.js] Inside constructor()')
  }
  
  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()')
  }
  
  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()')
  }
  // state = {
  //   persons: [
  //     { id: 'klxl', name: 'Nwanguma Samuel', age: 22 },
  //     { id: 'iwasdf', name: 'Ebuka Spy', age: 19 },
  //     { id: 'oiwer', name: 'Chinonso Uwakwe', age: 16 }
  //   ],
  //   showPersons: false
  // };

  componentWillUpdate (nextProps, nextState) {
      console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
  }

  shouldComponentUpdate (nextProps, nextState) {
      console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState);
      return nextState.persons !== this.state.persons || 
      nextState.showPersons !== this.state.showPersons;
  }

  componentDidUpdate () {
      console.log('[UPDATE App.js] Inside componentDidUpdate')
  }
  
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState((prevState, props) => ({
      showPersons: !doesShow,
      toggleClicked: prevState.toggleClicked + 1
    }))
  }
  
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
    console.log('[App.js] Inside render()');

    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
          persons={this.state.persons} 
          clicked={this.deletePersonHander}
          changed={this.nameChangeHandler} />
    }
    return (
        <Aux>
          <button onClick={() => this.setState({ showPersons: true })}>Show Persons</button>
        <Cockpit 
          appTitle={this.props.title}
          toggle={this.togglePersonsHandler}
          persons={this.state.persons}
          showPersons={this.state.showPersons} />
        {persons}
      </Aux>
    );
  }
}

export default withClass(App, classes.App);