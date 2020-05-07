import React, { Component } from 'react';
import Auxiliary from '../../HigerOrderComponents/Auxiliary';
import Burger from '../../Components/Burger/Burger';

class BurgerBuilder extends Component 
{
  render()
  {
    return (
      <Auxiliary>
        <Burger />
        <div>Build Controls</div>
      </Auxiliary>
    );
  }
}

export default BurgerBuilder;