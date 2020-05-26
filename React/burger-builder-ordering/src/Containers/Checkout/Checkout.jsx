// TODO:: Managing Global State using React Redux :-

import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../Components/Order/Checkout Summary/CheckoutSummary';
import ContactData from './Contact Data/ContactData';

class Checkout extends Component
{
  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  }

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  }

  render()
  {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.props.ings}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler} />
        <Route
          path={this.props.match.path + '/contact-data'}
          component={ContactData}/>
      </div>
    );
  }
}

// TODO:: Setting Up React Redux Linking -->>

const mapStateToProps = (state) =>
{
  return {
    ings: state.ingredients
  }
} 

export default connect(mapStateToProps)(Checkout);