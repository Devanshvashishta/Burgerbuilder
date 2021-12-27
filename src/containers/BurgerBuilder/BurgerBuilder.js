import React,{Component} from "react";
import Auxilary from "../../hoc/Auxilary/auxilary";
import Burger from "../../components/Burger/Burger";
import BuiltControls from "../../components/Burger/BuiltControls/BuiltControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Spinner from "../../components/UI/Spinner/Spinner";

   
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
            ingredients: null,
            totalPrice: 4,
            purchasable: false,
            purchasing: false,
            Loading: false,
            error: false, 
    }

    componentDidMount(){
        axios.get('https://react-my-burger-34eaf-default-rtdb.firebaseio.com/ingredients.json')
        .then(response => { this.setState({ingredients: response.data})})
        .catch(error => {this.setState({error: true})});
    }

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
        .map(  igKey =>  {
            return ingredients[igKey];
        }).reduce((sum,el)=>{return sum + el;
        },0);
        this.setState({purchasable : sum>0} );
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
        this.updatePurchaseState(updatedIngredients);

    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount - 1;
        const updatedIngredients = {  ...this.state.ingredients  };
        updatedIngredients[type]=updatedCount; 
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice,ingredients:updatedIngredients});
        this.updatePurchaseState(updatedIngredients);


    }

    purchaseHandler = () => {
this.setState({purchasing: true})
    };

    purchaseCancelHandler =() => {
this.setState({purchasing: false})
    };

    purchaseContinueHandler =()=>{
       // alert('You Continue!');
       this.setState({Loading: true});
       const order = {
           ingrredients: this.state.ingredients,
           price: this.state.totalPrice,
           customer: {
               name: 'Devansh Vashishta',
               address: {
                   street: 'Main Market',
                   zip: '124507',
                   country: 'Germany'
               },
               email: 'devansh@gmail.com',
            },
            deliveryMethod: 'fastest',
           };
       
       axios.post('/orders.json', order)
       .then( response => {this.setState({Loading: false, purchasing: false});})
       .catch(error => {this.setState({Loading: false, purchasing: false});});   
    }

render(){
    const disabledInfo = {
        ...this.state.ingredients
    };

    for(let key in disabledInfo){
        disabledInfo[key] = disabledInfo[key] <= 0
    }

    let orderSummary = null; 

   
    let burger =   this.state.error ? <p>Ingredients can't be loaded !</p> : <Spinner />
if(this.state.ingredients){
    burger =(<Auxilary>
        <Burger ingredients={this.state.ingredients}/>
        <BuiltControls ingredientAdded={this.addIngredientHandler} ingredientRemoved={this.removeIngredientHandler}
        disabled={disabledInfo}
        price={this.state.totalPrice}
        purchasable={this.state.purchasable} 
        ordered={this.purchaseHandler} /> 
        </Auxilary>   )  ; 
        orderSummary = <OrderSummary  ingredients={this.state.ingredients} 
        purchaseCanceled={this.purchaseCancelHandler}
        purchaseContinued= {this.purchaseContinueHandler }
        price={this.state.totalPrice} />
}
if(this.state.Loading){

    orderSummary= <Spinner />;
}

    return(
        <Auxilary>
            <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
              {orderSummary}
            </Modal>
            {burger }
        </Auxilary>
    );
}
}


export default withErrorHandler(BurgerBuilder,axios); 