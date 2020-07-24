import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Header.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../Firebase/Firebase';
import CartIcon from '../Cart Icon/CartIcon';
import CartDropdown from '../Cart Dropdown/CartDropdown';

const header = ({ currentUser, hidden }) =>
{
  return (
    <div className='header'>
      <Link className='logo-container' to='/'> <Logo className='logo' /> </Link>
      <div className='options'>
        <Link className='option' to='/shop'>SHOP</Link>
        <Link className='option' to='/contact'>CONTACT</Link>
        { currentUser ?
          ( <div className='option' onClick={() => auth.signOut()}> SIGN OUT </div> ) :
          ( <Link className='option' to='/signin'> SIGN IN </Link> )
        }
        <CartIcon />
      </div>
        {hidden ? null : <CartDropdown />}
    </div>
  );
}

const mapStateToProps = (state) =>
{
  return {
    currentUser: state.user.currentUser,
    hidden: state.cart.hidden
  } 
};

export default connect(mapStateToProps)(header);