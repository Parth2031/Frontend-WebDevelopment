import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './CartIcon.scss';
import { toggleCartHidden } from '../../Store/Actions/cartAction';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { selectCartItemsCount } from '../../Store/Selectors/cartSelectors';

const cartIcon = ({ toggleCartHidden, itemCount }) => 
{
  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
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