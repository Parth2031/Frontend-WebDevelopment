import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './Components/Header/Header';
import HomePage from './Components/Home Page/HomePage';
import ShopPage from './Container/Shop Page/ShopPage';
import SignInAndSignUpPage from './Components/SignIn and SignUp Page/SignIn-SignUp-Page';

function App()
{
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
