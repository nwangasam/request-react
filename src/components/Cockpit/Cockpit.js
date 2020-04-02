import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';

const Cockpit = props => {
  let subHeading;
  let btnClasses = classes.Button;
  const assignedClasses = [];

  if (props.persons.length <= 2) assignedClasses.push(classes.Red);
  if (props.persons.length <= 1) assignedClasses.push(classes.Bold);
  if (props.showPersons) {
      btnClasses = [classes.Red, classes.Button].join(' ');
  }
  if (props.persons.length > 0) {
    subHeading = (
      <p className={assignedClasses.join(' ')}>
        Below include a lists of some friends!
        <b>
          <em>({props.persons.length})</em>
        </b>
      </p>
    );
  } else {
    subHeading = (
      <p className={classes.Red}>No person left :( Refresh this page.</p>
    );
  }

  return (
    <Aux>
      {/* <h1>Welcome, <br /> to my React app</h1> */}
      <h1>{props.appTitle}</h1>
      {subHeading}
      <button className={btnClasses} onClick={props.toggle}>
        Toggle Persons</button>
    </Aux>
  );
};

export default Cockpit;
