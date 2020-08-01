import React from 'react';

import { CustomButtonContainer } from './CustomButtonStyles';

const customButton = ({ children, ...props }) => 
{
  return (
    <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
  );
}

export default customButton;