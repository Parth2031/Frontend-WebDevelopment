import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './HeaderStyles';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../Firebase/Firebase';
import CartIcon from '../Cart Icon/CartIcon';
import CartDropdown from '../Cart Dropdown/CartDropdown';
import { selectCartHidden } from '../../Store/Selectors/cartSelectors';
import { selectCurrentUser } from '../../Store/Selectors/userSelectors';

const header = ({ currentUser, hidden }) =>
{
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>SHOP</OptionLink>
        <OptionLink to='/contact'>CONTACT</OptionLink>
        { currentUser ?
            (<OptionLink as='div' onClick={() => auth.signOut()}> SIGN OUT </OptionLink>) :
            (<OptionLink to='/signin'>SIGN IN</OptionLink>)
        }
        <CartIcon />
      </OptionsContainer>
      { hidden ? null : <CartDropdown /> }
    </HeaderContainer>
  );
}

const mapStateToProps = createStructuredSelector
({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(header);