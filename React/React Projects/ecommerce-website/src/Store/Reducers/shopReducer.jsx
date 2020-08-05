import * as actionTypes from '../Actions/actionTypes';

const intialState =
{
  collections: null,
  isFetching: false,
  errorMessage: undefined
};

const shopReducer = (state = intialState, action) =>
{
  switch (action.type)
  {
    // case actionTypes.UPDATE_COLLECTIONS: return { ...state, collections: action.payload };
    
    case actionTypes.FETCH_COLLECTIONS_START: return { ...state, isFetching: true };
    
    case actionTypes.FETCH_COLLECTIONS_SUCCESS: return { ...state, isFetching: false, collections: action.payload };
    
    case actionTypes.FETCH_COLLECTIONS_FAILURE: return { ...state, isFetching: false, errorMessage: action.payload };

    default: return state;
  }
};

export default shopReducer;