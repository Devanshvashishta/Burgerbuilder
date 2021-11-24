import React from "react";
import Classes from "./Burger.module.css";
import Burgeringredient from "./BurgerIngredient/BurgerIngridient";

const Burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_,i)=>
        {
         return   <Burgeringredient key={igKey +    i} type={igKey} />;
        });
    }).reduce((arr, el)=>{
        return arr.concat(el)
    },[]);
    
    if (transformedIngredients.length === 0){
        transformedIngredients=<p>Please start adding ingredients!</p>
    }
    console.log(transformedIngredients); 
return( 
    <div className={Classes.Burger}>
        <Burgeringredient type="bread-top"/>
        {transformedIngredients}
        <Burgeringredient type="bread-bottom"/>
    </div>
);
};

export default Burger;