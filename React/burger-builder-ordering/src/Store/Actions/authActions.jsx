import * as actionTypes from './actionTypes';
import axios from 'axios';

const authSuccess = (token, userId) =>
{
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId
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

export const authLogout = () =>
{
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const checkAuthTimeout = (expirationTime) =>
{
  return (dispatch) =>
  {
    setTimeout( () => {   
      dispatch(authLogout());
    }, expirationTime * 1000);
  }
};

export const auth = (email, password, isSignup) =>
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

    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBWjuyxGROILTNBWB0lX89d6cqlW3TMdXM';

    if (!isSignup)
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBWjuyxGROILTNBWB0lX89d6cqlW3TMdXM';
    
    axios.post(url, authData)
      .then( (response) => 
      {
        console.log(response);

        dispatch((authSuccess(response.data.idToken, response.data.localId)));  
        dispatch(checkAuthTimeout(response.data.expiresIn));
      })
      
      .catch((err) =>
      {
        console.log(err.response);

        dispatch(authFail(err.response.data.error));
      }); 
  };
};