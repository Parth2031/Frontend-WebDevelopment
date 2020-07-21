import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import { auth } from './Firebase/Firebase';
import Header from './Components/Header/Header';
import HomePage from './Components/Home Page/HomePage';
import ShopPage from './Container/Shop Page/ShopPage';
import SignInAndSignUpPage from './Components/SignIn and SignUp Page/SignIn-SignUp-Page';

class App extends Component
{
  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null;

  componentDidMount()
  {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( user => 
    {
      this.setState({ currentUser: user });

    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render()
  {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }  
}

export default App;
