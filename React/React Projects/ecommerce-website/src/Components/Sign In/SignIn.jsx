import React, { Component } from 'react';

import { SignInContainer, SignInTitle, ButtonsBarContainer } from './SignInStyles';
import FormInput from '../Form Input/FormInput';
import CustomButton from '../Custom Button/CustomButton';
import { auth, signInWithGoogle } from '../../Firebase/Firebase';

class SignIn extends Component
{
  state =
  {
    email: '',
    password: ''
  }

  submitHandler = async event =>
  {
    event.preventDefault();
   
    const { email, password } = this.state;

    try
    {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    }
    catch (error) {
      console.log(error);
    }
  };

  changeHandler = (event) =>
  {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render()
  {
    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
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
          <ButtonsBarContainer>
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    );
  }
}

export default SignIn;