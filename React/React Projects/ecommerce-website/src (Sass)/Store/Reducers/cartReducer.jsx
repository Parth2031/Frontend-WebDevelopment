import * as actionTypes from '../Actions/actionTypes';
import { addItemToCart, removeItemFromCart } from '../Utility/cartUtility';

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
  
    case actionTypes.REMOVE_ITEM: return { ...state, cartItems: removeItemFromCart(state.cartItems, action.payload) };

    case actionTypes.CLEAR_ITEM_FROM_CART: return {
                                             ...state,
                                             cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
                                           }
     
    default: return state;
  }
};

export default cartReducer;