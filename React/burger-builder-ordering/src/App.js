// TODO:: This project is based on Class Based React till now.

import React, { Component } from 'react';
// import './App.module.css';
import Auxiliary from '../src/HigerOrderComponents/Auxiliary';
import Layout from '../src/Components/Layouts/Layout';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';

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
