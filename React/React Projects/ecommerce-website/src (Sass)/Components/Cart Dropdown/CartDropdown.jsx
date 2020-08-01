import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import './CartDropdown.scss'
import CartItem from '../Cart Item/CartItem';
import CustomButton from '../Custom Button/CustomButton';
import { selectCartItems } from '../../Store/Selectors/cartSelectors';
import { toggleCartHidden } from '../../Store/Actions/cartAction';

// * NOTE :-
// ? Returning dispatch property as a prop in that same component by mapStateToProp, which could be used similar to mapDispatchToProps.

const CartDropdown = ({ cartItems, history, dispatch }) => 
{
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        { cartItems.length ?
          ( cartItems.map( cartItem => ( <CartItem key={cartItem.id} item={cartItem} /> ))) : 
          ( <span className='empty-message'>Your cart is Empty</span> )
        }
      </div>
      <CustomButton onClick={ () =>
      {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}>
      GO TO CHECKOUT
      </CustomButton>
    </div>
  );
}  

const mapStateToProps = createStructuredSelector ({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));