// TODO:: Setting up React Redux :-

// * createStore Component is a Redux Library which helps to create (Central) Store.
// * combineReducers Component is used for combining multiple Reducers in a single Reducer.
// * applyMiddleware Component is used for working with Asynchronous Programming in Redux.
// ! compose Component is used as a Fallback for composeEnhancer which is basically a Setup for Redux Dev Tools.
// ? Provider is a helper Component in React Redux Library that helps to inject Store in React Components and it is Parent to everything.
// * thunk is Part of Redux Thunk (Third Party Library for Asynchronous Code as itself in Middleware).

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider} from 'react-redux';
import thunk from 'redux-thunk';

import counterReducer from '../src/Store/Reducers/CounterReducer';
import resultReducer from '../src/Store/Reducers/Result';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers (
{
  ctr: counterReducer,
  res: resultReducer
});

const logger = (store) =>
{
  return next =>
  {
    return action =>
    {
      console.log("Middleware Dispatching: ", action);
      const result = next(action);
      console.log("Middleware Next State: ", store.getState());
      return result;
    }  
  }  
};  

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
