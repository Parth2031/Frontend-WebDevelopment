import React from 'react';
import Auxiliary from '../../HigerOrderComponents/Auxiliary';
import classes from './Layout.module.css';

const layout = (props) =>
{
  return (
    <Auxiliary>
      <div>Toolbar,SideDrawer</div>
      <main className={classes.Content}> {props.children} </main>
    </Auxiliary>
  ); 
}

export default layout;

