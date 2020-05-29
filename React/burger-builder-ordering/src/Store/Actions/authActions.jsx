import * as actionTypes from './actionTypes';
import axios from 'axios';

const authSuccess = (authData) =>
{
  return {
    type: actionTypes.AUTH_SUCCESS,
    authData: authData
  };
};

const authFail = (error) =>
{
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};

const authStart = () =>
{
  return {
    type: actionTypes.AUTH_START
  };
};

export const auth = (email, password) =>
{
  return (dispatch) =>
  {
    dispatch(authStart());

    const authData = 
    {
      email: email,
      password: password,
      returnSecureToken: true
    }
    
    axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBWjuyxGROILTNBWB0lX89d6cqlW3TMdXM', authData)
      .then( (response) => 
      {
        console.log(response);

        dispatch((authSuccess(response.data)));  
      })
      
      .catch((error) =>
      {
        console.log(error);

        dispatch(authFail(error));
      }); 
  };
};