import React from 'react';

import './SignIn-SignUp-Page.scss';
import SignIn from '../../Components/Sign In/SignIn';
import SignUp from '../../Components/Sign Up/SignUp';

const SignInAndSignUpPage = () => 
{
  return (
    <div className='sign-in-and-sign-up'>
      <SignIn />
      <SignUp />
    </div>
  );  
}

export default SignInAndSignUpPage;