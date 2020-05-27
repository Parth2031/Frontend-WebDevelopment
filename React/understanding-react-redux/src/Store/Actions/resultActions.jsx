import * as actionTypes from './actionTypes';

// ! Aynchronoous Code in React Redux using Redux Thunk ->

export const saveResult = (res) =>
{
  return {
    type: actionTypes.STORE_RESULT,
    result: res
  };
};

export const storeResult = (res) =>
{
  // ! getState() is used for accessing old State but it should be avoided most of the times :

  return (dispatch, getState) =>
  {
    setTimeout( () =>
    {
      // const oldCounter = getState().ctr.counter;
      // console.log(oldCounter);

      dispatch(saveResult(res));
    }, 2000)  
  };
}

// //                                         --                                                                                

export const deleteResult = (id) =>
{
  return {
    type: actionTypes.DELETE_RESULT,
    resultElementId: id
  };
};