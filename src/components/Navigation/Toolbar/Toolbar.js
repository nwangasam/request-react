import React from 'react';
import classes from './Toolbar.css';

import NavigationItems from '../NavigationItems/NavigationItems';

import Logo from '../../Logo/Logo';

const toolBar = (props) =>  (
    <header className={classes.Toolbar}>
        <Logo />
        <div>MENU</div>
        <nav>
            <NavigationItems />
        </nav>
    </header>
)

export default toolBar;
