import React,{ Component} from 'react';
import Auxilary from '../../../hoc/Auxilary/auxilary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component{
    // This could be a functional component,doesnt have to be a class/
    componentDidUpdate(){
        console.log('[OrderSummary] Did Update')
    }
    render(){
         

    const ingredientSummary = Object.keys(this.props.ingredients)
    .map(igKey => {
        return  (
        <li key={igKey}>
            <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
        </li>)
    });
    
    return (
        <Auxilary>
            <h3>Your Order</h3>
            <p>A delicious burger with followiing ingredeients:</p>
            <ul>
                    {ingredientSummary}
            </ul>
            <p><strong>{this.props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
            <Button btnType="Success"clicked={this.props.purchaseContinued}>CONTINUE</Button>

        </Auxilary>
    )
}
}

export default OrderSummary
