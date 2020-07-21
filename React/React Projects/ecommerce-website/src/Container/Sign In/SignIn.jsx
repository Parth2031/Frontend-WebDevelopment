import React, { Component } from 'react';

import './SignIn.scss';
import FormInput from '../../Components/Form Input/FormInput';
import CustomButton from '../../Components/Custom Button/CustomButton';
import { signInWithGoogle } from '../../Firebase/Firebase';

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
        <span>Sign in with your Email and Password</span>

        <form onSubmit={this.submitHandler}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.changeHandler}
            value={this.state.email}
            label='Email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.changeHandler}
            label='Password'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;