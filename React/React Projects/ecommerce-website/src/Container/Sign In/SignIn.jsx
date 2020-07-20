import React, { Component } from 'react';

import './SignIn.scss';
import FormInput from '../../Components/Form Input/FormInput';
import CustomButton from '../../Components/Custom Button/CustomButton';

class SignIn extends Component
{
  state =
  {
    email: '',
    password: ''
  }

  submitHandler = (event) =>
  {
    this.setState({ email: '', password: '' });
    event.preventDefault();
  };

  changeHandler = (event) =>
  {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render()
  {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.submitHandler}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.changeHandler}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.changeHandler}
            label='password'
            required
          />
          <CustomButton type='submit'> Sign in </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;