// TODO:: Understanding LifeCycle Hooks Working for React Setup/Working.
// ? Understanding React Adjacent JSX -

import React, { Component } from 'react';
import classes from './Person.module.css';
import Auxiliary from '../../../HigerOrderComponents/Auxiliary';
import withClass from '../../../HigerOrderComponents/withClass';

// * It is a Thord Party Library which is used to set the Prop Types by Developer - 
import PropTypes from 'prop-types';

class Person extends Component
{
  // ^ In this, we are using another Special Property(prop) like key is refs which is used for passing reference to any specific element.
  // & There are two ways to do it -> using React.createRef() or passing a ref with a function. Better is the 1st way.

  constructor(props) 
  {
    super(props);
    this.inputElementRefs = React.createRef();
  }

  componentDidMount()
  {
    // ~ Not such a better way as it is for Older Version of React :
    // this.inputElement.focus();

    this.inputElementRefs.current.focus();
  }

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
          // ~ Not such a better way as it for Older Version of React :
          // refs={(inputEl) => {this.inputElement = inputEl}}
          
          ref={this.inputElementRefs}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Auxiliary>
    );
  }
}

// ! Working of PropTypes Library - 

Person.propTypes =
{
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

// & Implementing withClass Higher Order Component -

export default withClass(Person,classes.Person);
