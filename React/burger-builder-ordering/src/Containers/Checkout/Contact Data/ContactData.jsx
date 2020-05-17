import React, { Component } from 'react';
import axios from '../../../axios-order';
import Button from '../../../Components/UI/Button/Button';
import Spinner from '../../../Components/UI/Spinner/Spinner';
import classes from './ContactData.module.css';

class ContactData extends Component
{
  state =
  {
    name: '',
    email: '',
    address: 
    {
      street: '',
      postalCode: ''
    },
    loading: false
  }

  // TODO:: Setting up the Data on Database (Firebase) and also Fetching it :- 

  orderHandler = (event) =>
  {
    this.setState({ loading: true });

    const order =
    {
      ingredients: this.state.ingredients,
      price: this.state.price,             // ! <-- This should be updated at the Database to get Total Price as it is not the correct way.
      customer:
      {
        name: 'Parth',
        address:
        {
          street: 'Joshi Colony',
          zipCode: 110091,
          country: 'India'
        },
        email: 'rastogiparth85@gmail.com'
      },
      deliveryMethod: 'fastest'
    }

    // ! /orders.json is the Format needed for Firebase Database as it stores in this format only.

    axios.post('/orders.json', order)
      .then((response) =>
      {
        console.log(response);
        this.setState({ loading: false });
        this.props.history.push('/');
      })
      .catch((error) =>
      {
        console.log(error);
        this.setState({ loading: false, purchasing: false });
      }); 
    
    event.preventDefault();
  }

  render()
  {
    let form =
    (
      <form>
        <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
        <input className={classes.Input} type="email" name="email" placeholder="Your Mail" />
        <input className={classes.Input} type="text" name="street" placeholder="Street" />
        <input className={classes.Input} type="text" name="postal" placeholder="Postal Code" />
        <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
      </form>
    );
    
    if (this.state.loading) {
      form = <Spinner />;
    }

    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;