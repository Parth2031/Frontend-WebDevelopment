// TODO:: This project is based on Class Based React till now.

import React, { Component } from 'react';
// import './App.module.css';
import Auxiliary from '../src/HigerOrderComponents/Auxiliary/Auxiliary';
import Layout from '../src/HigerOrderComponents/Layouts/Layout';
import BurgerBuilder from './Containers/Burger Builder/BurgerBuilder';

class App extends Component
{
  render()
  {
    return (
      <Auxiliary>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </Auxiliary>
    );
  }
}

export default App;
