import * as actionTypes from '../Actions/actionTypes';
import { addItemToCart } from '../Utility/cartUtility';

const intialState =
{
  hidden: true,
  cartItems: []
};

const cartReducer = (state = intialState, action) =>
{
  switch (action.type)
  {
    case actionTypes.TOGGLE_CART_HIDDEN: return {...state,  hidden: !state.hidden};
    
    case actionTypes.ADD_ITEM: return { ...state, cartItems: addItemToCart(state.cartItems, action.payload) };
    
    default: return state;
  }
};

export default cartReducer;