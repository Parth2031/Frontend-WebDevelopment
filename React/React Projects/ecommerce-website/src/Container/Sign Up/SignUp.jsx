import React, { Component } from 'react';

import './SignUp.scss';
import FormInput from '../../Components/Form Input/FormInput';
import CustomButton from '../../Components/Custom Button/CustomButton';
import { auth, createUserProfileDocument } from '../../Firebase/Firebase';

class SignUp extends Component
{
  state =
  {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  submitHandler = async event =>
  {
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword)
    {
      alert("Passwords don't Match");
      return;
    }

    try
    {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      await createUserProfileDocument(user, { displayName });

      this.setState(
      {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    }
    catch (error) {
      console.error(error);
    }

    event.preventDefault();
  };

  changeHandler = event =>
  {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render()
  {
    const { displayName, email, password, confirmPassword } = this.state;
  
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have a Account</h2>
        <span>Sign up with your Email and Password</span>
        <form className='sign-up-form' onSubmit={this.submitHandler}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.changeHandler}
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.changeHandler}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.changeHandler}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.changeHandler}
            label='Confirm Password'
            required
          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;