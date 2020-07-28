import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

// ! 'storage' Refers to Local Storage -> 

import storage from 'redux-persist/lib/storage';

import userReducer from './userReducer';
import cartReducer from './cartReducer';
import shopReducer from './shopReducer';
import directoryReducer from './directoryReducer';

const persistConfig =
{
  key: 'root',
  storage,
  whitelist: ['cart']
};

const rootReducer =  combineReducers(
{
  user: userReducer,
  cart: cartReducer,
    shop: shopReducer,
    directory: directoryReducer
});

export default persistReducer(persistConfig, rootReducer);
