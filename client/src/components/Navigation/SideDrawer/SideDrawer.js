import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../../UI/Backdrop/Backdrop';

const SideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close].join(' ')

    if(props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open].join(' ')
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    )
}

export default SideDrawer;