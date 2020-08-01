import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';
import { auth, createUserProfileDocument } from './Firebase/Firebase';
import Header from './Components/Header/Header';
import HomePage from './Pages/Home Page/HomePage';
import ShopPage from './Pages/Shop Page/ShopPage';
import SignInAndSignUpPage from './Pages/SignIn and SignUp Page/SignIn-SignUp-Page';
import CheckoutPage from './Pages/Checkout Page/CheckoutPage';
import { setCurrentUser } from './Store/Actions/userAction';
import { selectCurrentUser } from './Store/Selectors/userSelectors';

class App extends Component
{
  unsubscribeFromAuth = null;

  componentDidMount()
  {
    const { setCurrentUser } = this.props; 

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => 
    {
      if (userAuth)
      {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot( snapShot =>
        {
          setCurrentUser(
          {
              id: snapShot.id,
              ...snapShot.data()
          }, () => console.log(this.props));
        });
      }
      else
        setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render()
  {
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' render={ () => this.props.currentUser ? ( <Redirect to='/' />) : (<SignInAndSignUpPage />) }/> 
        </Switch>
      </div>
    );
  }  
}


const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
});


const mapDispatchToProps = (dispatch) =>
{
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
