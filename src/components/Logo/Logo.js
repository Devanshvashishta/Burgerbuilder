import React from 'react';
import burgerlogo from '../../assests/images/burger-logo.png';
import Classes from './Logo.module.css';


 const Logo= (props) => (
      <div className={Classes.Logo} style={{height:props.height}}>
            <img src={burgerlogo} alt="MyBurger" />
        </div>
    );


export default Logo;
