import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {

    constructor (props) {
        super(props);
        console.log('[Persons.js] Inside constructor()', props)
      }
      
      componentWillMount () {
        console.log('[Persons.js] Inside componentWillMount()')
      }
      
      componentDidMount () {
        console.log('[Persons.js] Inside componentDidMount()')
      }

      // Update Component Lifecycles Hooks
    componentWillReceiveProps (nextProps) {
        console.log('[UPDATE Persons.js] Inside componentWillReceiveProps', nextProps)
    }
        
    componentWillUpdate (nextProps, nextState) {
        console.log('[UPDATE Persons.js] Inside componentWillUpdate', nextProps, nextState);
    }
    
    shouldComponentUpdate (nextProps, nextState) {
        console.log('[UPDATE Persons.js] Inside shouldComponentUpdate', nextProps, nextState);
        return nextProps.persons !== this.props.persons;
    }

    componentDidUpdate () {
        console.log('[UPDATE] Inside componentDidUpdate')
    }
    
    render() {
        console.log('[Persons.js] Inside render()')
            return this.props.persons.map((person, index) => {
                return <Person
                position={index}
                key={person.id}
                clicked={() => this.props.clicked(person.id)}
                changed={event => this.props.changed(event, person.id)}
                name={person.name}
                age={person.age}
              />
            })
    }
} 

export default Persons;
