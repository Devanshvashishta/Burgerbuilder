import React from 'react';
import Classes from './BuiltControl.module.css'; 

function BuiltControl(props) {
    return (
        <div className={Classes.BuildControl}>
            <div className={Classes.Label}>{props.label}</div>
            <button className={Classes.Less} onClick={props.removed} disabled={props.disable}>Less</button>
            <button className={Classes.More} onClick={props.added}>More</button>
        </div>
    )
}

export default BuiltControl
