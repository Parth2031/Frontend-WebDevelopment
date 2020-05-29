import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './Navigation Item/NavigationItem';

const navigationItems = (props) =>
{
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" exact>Burger Builder</NavigationItem>
      <NavigationItem link="/orders" >Orders</NavigationItem>
      {
        props.isAuthenticated ?
          <NavigationItem link="/logout" >Logout</NavigationItem> :
          <NavigationItem link="/authentication" >Authenticated</NavigationItem> 
          
      }
    </ul>
  );
}

export default navigationItems;