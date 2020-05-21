import React from 'react';
import classes from './CounterOutput.module.css';

const counterOutput = (props) => 
{
  return (
    <div className={classes.CounterOutput}>
      Current Counter: {props.value}
    </div>
  );
}
    
export default counterOutput;