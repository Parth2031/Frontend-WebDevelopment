// TODO:: Setting up React Redux :-

// * createStore Component is a Redux Library which helps to create (Central) Store.
// * combineReducers Component is used fro combining multiple Reducers in a single Reducer.
// ? Provider is a helper Component in React Redux Library that helps to inject Store in React Components.

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider} from 'react-redux';
import counterReducer from '../src/Store/Reducers/CounterReducer';
import resultReducer from '../src/Store/Reducers/Result';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer
});

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
