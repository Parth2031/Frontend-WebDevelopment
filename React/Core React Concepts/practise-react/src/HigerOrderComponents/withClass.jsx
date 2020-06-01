// TODO:: Another Type of Higher Order Component -

import React from 'react';

const withClass = (WrappedComponent, className) =>
{
  // ! {...props} is used to Spread all the props present in Person Component like name =".." age="..", etc format.

  return props => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  );
};

export default withClass;
