import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { CartDropdownContainer, CartDropdownButton, EmptyMessageContainer, CartItemsContainer } from './CartDropdownStyles';
import CartItem from '../Cart Item/CartItem';
import { selectCartItems } from '../../Store/Selectors/cartSelectors';
import { toggleCartHidden } from '../../Store/Actions/cartAction';

// & NOTE :-
// ? Returning dispatch property as a prop in that same component by mapStateToProp, which could be used similar to mapDispatchToProps.

const CartDropdown = ({ cartItems, history, dispatch }) => 
{
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        { cartItems.length ? 
          ( cartItems.map( cartItem => ( <CartItem key={cartItem.id} item={cartItem} /> ))) :
          (<EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>)
        }
      </CartItemsContainer>
      <CartDropdownButton
        onClick={ () =>
        {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}>
        GO TO CHECKOUT
      </CartDropdownButton>
    </CartDropdownContainer>
  );
}  

const mapStateToProps = createStructuredSelector ({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));