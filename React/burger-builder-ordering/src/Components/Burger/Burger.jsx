import React from 'react';
import classes from './Burger.module.css';
import Ingredients from '../Burger/Ingredients/Ingredients';
// import Auxiliary from '../../HigerOrderComponents/Auxiliary';

const burger = (props) =>
{
  return (
    <div className={classes.Burger}>
      <Ingredients type="bread-top" />
      <Ingredients type="cheese" />
      <Ingredients type="meat" />
      <Ingredients type="salad" />
      {/* <Ingredients type="bacon" /> */}
      <Ingredients type="bread-bottom" />
    </div>
  );
}

export default burger;