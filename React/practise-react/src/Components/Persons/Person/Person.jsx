// TODO:: Understanding LifeCycle Hooks Working for React Setup/Working.
// ? Understanding React Adjacent JSX -

import React, { Component } from 'react';
import classes from './Person.module.css';
import Auxiliary from '../../../HigerOrderComponents/Auxiliary';
import withClass from '../../../HigerOrderComponents/withClass';

class Person extends Component
{
  render()
  {
    console.log('[Person.js] rendering...');
  
    // return (
    //   <div className={classes.Person}>
    //     <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
    //     <p>{this.props.children}</p>
    //     <input
    //       type="text"
    //       onChange={this.props.changed}
    //       value={this.props.name}
    //     />
    //   </div>
    // );

    // ! Understanding React Adjacent JSX Working -

    return (
      <Auxiliary>
        <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input
          key="1"
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Auxiliary>
    );
  }
}

// ! Implementing withClass Higher Order Component -

export default withClass(Person,classes.Person);
