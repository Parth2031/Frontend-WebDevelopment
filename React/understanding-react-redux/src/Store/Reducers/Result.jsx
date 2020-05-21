// TODO:: Settind Up Reducer of Redux Library :-

import * as actionTypes from '../../Store/Actions';

const initialState = {
  results: []
}

const reducer = (state = initialState, action) =>
{
  switch (action.type)
  {
    case actionTypes.STORE_RESULT: return {
                                     ...state,
                                     results: state.results.concat({id: new Date(), value: action.result})
                                   }
     
    case actionTypes.DELETE_RESULT: const updatedArray = state.results.filter( (result) => result.id !== action.resultElementId);
                                    return {
                                      ...state,
                                      results: updatedArray 
                                    } 
                       
    default: break;                 
  }

  return state;
};

export default reducer;