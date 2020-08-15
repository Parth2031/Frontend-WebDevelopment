// ^ This Higher Order Component is known as Lazy Loading/Code Splitting as it only Downloads the files/links that are 
// ^                                         opened and rest are not downloaded.  

import React, { Component } from 'react';

const asyncComponent = (importComponent) =>
{
  return class extends Component
  {
    state = {
      component: null
    }

    componentDidMount ()
    {
      importComponent()
        .then( (cmp) => {
          this.setState({ component: cmp.default });
        });
    }

    render()
    {
      const C = this.state.component;

      return C ? <C {...this.props} /> : null;
    }
  }
}

export default asyncComponent;