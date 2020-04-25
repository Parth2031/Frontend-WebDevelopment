// TODO:: Error Boundary is an Error Handling in React Apps, it is a Built-In Higher Order Component.

// ! ErrorBoundary is a Higher Order Component which gives Components some extra added functionalities.
// ? It is used in only at Developer Stage and produces these errors only at Build Stage.

import React, { Component } from 'react';

class ErrorBoundary extends Component
{
  state = {
    hasError: false,
    errorMessage: ''
  }

  componentDidCatch = (error, info) => {
    this.setState({ hasError: true, errorMessage: error });
  }

  render()
  {
    if (this.state.hasError) 
      return <h1>{this.state.errorMessage}</h1>;
    else 
      return this.props.children;
  }
}

export default ErrorBoundary;