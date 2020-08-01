import * as actionTypes from '../Actions/actionTypes';

const intialState = {
  collections: null
};

const shopReducer = (state = intialState, action) =>
{
  switch (action.type)
  {
    case actionTypes.UPDATE_COLLECTIONS: return { ...state, collections: action.payload };
    
    default: return state;
  }
};

export default shopReducer;