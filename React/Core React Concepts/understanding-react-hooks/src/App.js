// TODO:: Understanding React Hooks :-

import React, { useContext } from 'react';

import Ingredients from './Components/Ingredients/Ingredients';
import Auth from './Components/Authentication/Auth';
import { AuthContext } from './Context/Auth-Context';
// import classes from './App.module.css';

const App = (props) =>
{
  const authContext = useContext(AuthContext);

  let content = <Auth />;

  if (authContext.isAuth) {
    content = <Ingredients />;
  }

  return content;
}

export default App;
