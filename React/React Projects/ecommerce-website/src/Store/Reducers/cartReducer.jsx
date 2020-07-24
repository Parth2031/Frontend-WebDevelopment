import * as actionTypes from '../Actions/actionTypes';

const intialState = {
  hidden: true
};

const cartReducer = (state = intialState, action) =>
{
  switch (action.type)
  {
    case actionTypes.TOGGLE_CART_HIDDEN: return {...state,  hidden: !state.hidden};
    
    default: return state;
  }
};

export default cartReducer;