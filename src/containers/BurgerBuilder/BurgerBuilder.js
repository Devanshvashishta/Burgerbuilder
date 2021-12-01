import React,{Component} from "react";
import Auxilary from "../../hoc/auxilary";
import Burger from "../../components/Burger/Burger";
import BuiltControls from "../../components/Burger/BuiltControls/BuiltControls";
   
const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7,
};

class BurgerBuilder extends Component {
    // constructor(props){
    //     super(props);
    //     this.state
    // }
    state ={
            ingredients:{
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0,
            },
            totalPrice: 4
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {  ...this.state.ingredients  };
        updatedIngredients[type]=updatedCount; 
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice,ingredients:updatedIngredients});


    }

    removeIngredientHandler = (type) => {

    }
render(){
    return(
        <Auxilary>
            <Burger ingredients={this.state.ingredients}/>
            <BuiltControls ingredientAdded={this.addIngredientHandler}/>
        </Auxilary>
    );
}
}


export default BurgerBuilder; 