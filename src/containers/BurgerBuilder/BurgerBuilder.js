import React,{Component} from "react";
import Auxilary from "../../hoc/auxilary";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
    // constructor(props){
    //     super(props);
    //     this.state
    // }
    state ={
        
    }
render(){
    return(
        <Auxilary>
            <Burger />
            <div>Built Controls</div>
        </Auxilary>
    );
}
}


export default BurgerBuilder; 