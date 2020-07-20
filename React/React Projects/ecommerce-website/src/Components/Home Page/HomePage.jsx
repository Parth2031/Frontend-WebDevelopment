import React from 'react';

import './HomePage.scss';
import Directory from '../../Container/Directory/Directory';

const homePage = () =>
{
  return (
    <div className="homepage">
      <Directory/>
    </div>
  );
}

export default homePage;