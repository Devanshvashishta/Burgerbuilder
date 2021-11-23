import React from "react";
import Classes from "./Burger.module.css";
import Burgeringredient from "./BurgerIngredient/BurgerIngridient";

const Burger = (props) => {
return( 
    <div className={Classes.Burger}>
        <Burgeringredient type="bread-top"/>
        <Burgeringredient type="cheese"/>
        <Burgeringredient type="meat"/>
        <Burgeringredient type="bread-bottom"/>
    </div>
);
};

export default Burger;