import React from 'react';
import Classes from "./BuiltControls.module.css";
import BuiltControl from './BuiltControl/BuiltControl';
                                             

const controls = [
    {label: 'Salad', type: 'salad'}, 
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
    
 ];

function BuiltControls(props) {
    return (
        <div className={Classes.BuiltControls}>
            <p>Current Price:<strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(cntr => (
                <BuiltControl 
                key={cntr.label}
                 label={cntr.label}
                 added={() => props.ingredientAdded(cntr.type)}  
                 removed={()=> props.ingredientRemoved(cntr.type)} 
                 disable={props.disabled[cntr.type]}/>
            ))}
            <button className={Classes.OrderButton}
            disabled={!props.purchasable} onClick={props.ordered}>ORDER NOW</button>

        </div>
    )
}

export default BuiltControls
