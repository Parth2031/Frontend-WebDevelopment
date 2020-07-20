import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './Components/Home Page/HomePage';
import ShopPage from './Container/Shop Page/ShopPage';

function App()
{
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
