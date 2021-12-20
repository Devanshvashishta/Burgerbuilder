import React,{Component} from "react";
import Auxilary from "../Auxilary/auxilary";
import classes from './Layout.module.css';
import Toolbar from "../../components/UI/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/UI/Navigation/SideDrawer/SideDrawer";

class layout extends Component{
    state ={
        showSideDrawer: true 
    }

    sideDrawerClosedHandler = () =>{
          this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState)=>{
            return {showSideDrawer: !prevState.showSideDrawer}})
    }
    render(){
        return(
    <Auxilary>  
    <Toolbar   drawerToggleClicked={this.sideDrawerToggleHandler}/>
    <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
    <main className={classes.Content}>
        {this.props.children}
    </main>
    </Auxilary>
        )
    }
};

export default layout;