import React from 'react';
import { connect } from 'react-redux';

import './CartDropdown.scss'
import CartItem from '../Cart Item/CartItem';
import CustomButton from '../Custom Button/CustomButton';
import { selectCartItems } from '../../Store/Selectors/cartSelectors';

const cartDropdown = ({ cartItems }) => 
{
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        { cartItems.map( (cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        }
      </div>
      <CustomButton>Go To Checkout</CustomButton>
    </div>
  );
}

const mapStateToProps = (state) =>
{
  return {
    cartItems: selectCartItems(state)
  };
}

export default connect(mapStateToProps)(cartDropdown);