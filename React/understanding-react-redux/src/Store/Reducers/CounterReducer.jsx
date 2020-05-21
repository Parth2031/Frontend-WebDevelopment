// TODO:: Settind Up Reducer of Redux Library :-

import * as actionTypes from '../../Store/Actions';

const initialState = {
  counter: 0
}

const reducer = (state = initialState, action) =>
{
  switch (action.type)
  {
    case actionTypes.INCREMENT: // const newState = Object.assign({}, state);    // ! <-- Alternative way to Spread Operator
                                // newState.counter = state.counter + 1;
                                // return newState;
                                return {
                                  ...state,
                                  counter: state.counter + 1
                                }
                      
    case actionTypes.DECREMENT: return {
                                  ...state,
                                  counter: state.counter - 1
                                }
                      
    case actionTypes.ADD: return {
                            ...state, 
                            counter: state.counter + action.value
                          }
                
    case actionTypes.SUBTRACT: return {
                                 ...state,
                                 counter: state.counter - action.value
                               }
    
    default: break;                 
  }

  return state;
};

export default reducer;