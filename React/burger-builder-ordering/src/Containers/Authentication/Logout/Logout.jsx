import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../../../Store/Actions/actionIndex';

class Logout extends Component 
{
  render()
  {
    return (
      <div>
       
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
{
  return {
    onLogout: dispatch(actionCreators.authLogout())
  };
}

export default connect(null,mapDispatchToProps)(Logout);