// TODO:: Understanding Components (.jsx) File Working :-
// * In this, we are using CSS Modules for Styling -->

import React from 'react';
import classes from './Person.module.css'

/*
! In order to do Dynamic Input, we use these brackets {Any Logic like function_name,javascript attribute properties}.
? We will recieve the Attributes from the Call Function/Component Name Tag as a single argument(props) ....
? ....  which could be used further as by properties name in the Tag.

TODO:: Methods & Properties Used for Event Listenener Attributes ->

* .children - It is a keyword in React which retrieves the Text written/Any Other Tag between the Component Name Tag.
? onClick = {props.attribute_name} is a Method Reference by App.js through which we can also execute same thing by props rather that state keyword.
? onChange = {props.attribute_name} is a Method that changes value as output as soon as we change it manually.

! NOTE ->> When using a Event Listener Attribute in .jsx files, It is called Passing Method Reference.
!          onChange Attribute is a type of Two Way Binding.  
*/

const person = (props) =>
{
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>I am {props.name} and I am {props.age} years old</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  );
}

export default person;