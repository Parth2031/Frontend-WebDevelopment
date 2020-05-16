// TODO:: It is the Global File which makes any changes to this file getting impact to every other file in src Folder.

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

// ? Setting up the Default Set Up for all the Files as we are currently only fetching the data from a Single API.
// * NOTE -> But for Multiple API accessing, we create a new file as axios.js in which we use instance method. 

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

// ! Interceptors are used to possibly catch all requests before they are sent and modify them so in order to set up a Error Handling System. 

axios.interceptors.request.use( request =>
{
  console.log(request);
  // * Edit request Configuration if needed.
  
  return request;
},
  error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use( response =>
{
  console.log(response);
  // * Edit request Configuration if needed.

  return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

ReactDOM.render(<React.StrictMode> <App /> </React.StrictMode> , document.getElementById( 'root' ) );
registerServiceWorker();
