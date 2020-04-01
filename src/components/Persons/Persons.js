import React from 'react';
import Person from './Person/Person';

const Persons = props => {
    if (props.showPersons) {
        return props.persons.map(person => {
            return <Person
            key={person.id}
            clicked={() => props.clicked(person.id)}
            changed={event => props.changed(event, person.id)}
            name={person.name}
            age={person.age}
          />
        })
    } else {
        return null;
    }
};

export default Persons;
