import React,{Component} from "react";
import Auxilary from "../../hoc/auxilary";
import Burger from "../../components/Burger/Burger";

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
            }
    }
render(){
    return(
        <Auxilary>
            <Burger ingredients={this.state.ingredients}/>
            <div>Built Controls</div>
        </Auxilary>
    );
}
}


export default BurgerBuilder; 