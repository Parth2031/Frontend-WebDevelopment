import React from 'react';

import { HomePageContainer } from './HomePageStyles';
import Directory from '../../Components/Directory/Directory';

const homePage = () =>
{
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
}

export default homePage;