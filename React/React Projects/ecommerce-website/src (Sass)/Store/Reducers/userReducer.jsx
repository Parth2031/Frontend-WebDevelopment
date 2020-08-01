import * as actionTypes from '../Actions/actionTypes';

const intialState = {
  currentUser: null
};

const userReducer = (state = intialState, action) =>
{
  switch (action.type)
  {
    case actionTypes.SET_CURRENT_USER : return { ...state, currentUser: action.payload };
    
    default: return state;
  }
};

export default userReducer;