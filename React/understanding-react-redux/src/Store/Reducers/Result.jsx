// TODO:: Settind Up Reducer of Redux Library :-

import * as actionTypes from '../Actions/actionTypes';
import { updateObject } from '../Utility';

const initialState = {
  results: []
}

const deleteResult = (state, action) =>
{
  const updatedArray = state.results.filter((result) => result.id !== action.resultElementId);
  return updateObject(state, { results: updatedArray });                              
};

const reducer = (state = initialState, action) =>
{
  switch (action.type)
  {
    case actionTypes.STORE_RESULT: return updateObject(state, { results: state.results.concat({ id: new Date(), value: action.result }) });
     
    case actionTypes.DELETE_RESULT: return deleteResult(state, action);
                       
    default: break;                 
  }

  return state;
};

export default reducer;