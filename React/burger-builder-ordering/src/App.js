// TODO:: This project is based on Class Based React till now.

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'; 
// import './App.module.css';
import Layout from '../src/HigerOrderComponents/Layouts/Layout';
import BurgerBuilder from './Containers/Burger Builder/BurgerBuilder';
import Checkout from '../src/Containers/Checkout/Checkout';
// import Orders from '../src/Containers/Orders/Orders';

class App extends Component
{
  render()
  {
    return (
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            {/* <Route path="/orders" component={Orders} /> */}
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
        </Layout>
    );
  }
}

export default App;
