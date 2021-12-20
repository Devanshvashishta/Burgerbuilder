import React from 'react';
import Classes from './Toolbar.module.css';
import Logo from '../../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

function Toolbar(props) {
    return (
        <header className={Classes.Toolbar}>
            <DrawerToggle  clicked={props.drawerToggleClicked} />
           <div> <Logo className={Classes.Logo}/></div>
            <nav className={Classes.DesktopOnly}><NavigationItems /></nav>
        </header>
    )
}

export default Toolbar
