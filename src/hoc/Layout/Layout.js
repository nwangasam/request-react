import React, { Component } from 'react';
import classes from './Layout.css';
import Aux from '../Auxiliary/Auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/UI/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false })
    }
    sideDrawerOpenHandler = (prevState) => {
        this.setState(() => ({ showSideDrawer: !prevState.showSideDrawer }))
    }

    
    render () {
        return (
            <Aux>
                <Toolbar 
                    drawerToggleClicked={this.sideDrawerOpenHandler} />
                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    { this.props.children }
                </main>
            </Aux>
        );
    }
}

export default Layout;