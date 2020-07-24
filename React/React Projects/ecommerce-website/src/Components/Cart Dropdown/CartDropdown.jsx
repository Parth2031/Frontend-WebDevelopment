import React from 'react';

import './CartDropdown.scss'
import CustomButton from '../Custom Button/CustomButton';

const cartDropdown = () => 
{
  return (
    <div className='cart-dropdown'>
      <div className='cart-items' />
      <CustomButton>Go To Checkout</CustomButton>
    </div>
  );
}

export default cartDropdown;