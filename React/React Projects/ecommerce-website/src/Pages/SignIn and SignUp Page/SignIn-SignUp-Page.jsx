import React from 'react';

import { SignInAndSignUpContainer } from './SignIn-SignUp-PageSyles';
import SignIn from '../../Components/Sign In/SignIn';
import SignUp from '../../Components/Sign Up/SignUp';

const SignInAndSignUpPage = () => 
{
  return (
    <SignInAndSignUpContainer>
      <SignIn />
      <SignUp />
    </SignInAndSignUpContainer>
  );  
}

export default SignInAndSignUpPage;