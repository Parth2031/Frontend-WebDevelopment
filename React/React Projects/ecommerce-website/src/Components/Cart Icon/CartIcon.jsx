import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { CartContainer, ShoppingIcon, ItemCountContainer } from './CartIconStyles';
import { toggleCartHidden } from '../../Store/Actions/cartAction';
import { selectCartItemsCount } from '../../Store/Selectors/cartSelectors';

const cartIcon = ({ toggleCartHidden, itemCount }) => 
{
  return (
    <CartContainer onClick={toggleCartHidden}>
      <ShoppingIcon />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartContainer>
  );
}

const mapStateToProps = createStructuredSelector ({
  itemCount: selectCartItemsCount
});

const mapDispatchToProps = (dispatch) => 
{
  return {
    toggleCartHidden: () => dispatch(toggleCartHidden())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(cartIcon);