import React from 'react';
import Classes from './DrawerToggle.module.css'

function DrawerToggle(props) {
    return (
        <div onClick={props.clicked} className={Classes.DrawerToggle}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default DrawerToggle
