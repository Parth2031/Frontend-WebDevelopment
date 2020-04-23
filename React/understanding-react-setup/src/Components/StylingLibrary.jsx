// TODO:: Understanding Working of Third Party Libraries -->

// TODO:: Radium Library Working :-

import React from 'react';
import Radium, { StyleRoot } from 'radium';            // ! <-- Third Party Library which solves inline Styling Limitations.

/*
! Radium Library Functionalities :
? When using keyframes, media queries, etc, we need to enclose the complete return statement logic in StyleRoot and ...
? .... also make the export statements as Higher Order Components only then we can it's functionalities. 

* But for pseudo classes, we don't need to use either of the Above Working.
*/

const stylingLibrary = (props) =>
{
  const inlineStyle =
  {
    backgroundColor: 'green',
    color: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',

    // ! We use colons('') as it is not a valid Javascript Syntax and we can use all pseudo classes by Radium Library ->

    ':hover': {
      backgroundColor: 'yellow',
      color: 'black'
    },
    '@media (min-width: 500px)': {
      width: '450px'
    }  
  }

  return (
    <StyleRoot>
      <div style={inlineStyle}>
        <p onClick={props.click}>I am {props.name} and I am {props.age} years old</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name} />
      </div>
    </StyleRoot>  
  );
}

// ! Radium(App) is a Higher Order Component which gives Components some extra added functionalities -->
export default Radium(stylingLibrary);

// // ------------------------------------------------------------------------------------------------------------------------------------

// TODO:: Styled Component Library Working :-

import React from 'react';
import styled from 'styled-components';

/*
! Styled Components Functionalities -

? Every Component created in this works on Tagged Template Literal and Syntax --> styled.html_element.
? They works like an HTML Element Tag in itself and works like a typical CSS File Syntax.

* But defining every Component outside the Main File Structure or Main Functions.
*/

const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
    width: 450px;
  }
`;


const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
  }
`;

const person = props =>
{
  return (
    // <div className="Person" style={style}>
    
    <StyledDiv>
      <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
      <StyledButton alt={this.state.showPersons}>Button Component</StyledButton>
    </StyledDiv>
  );
};

export default person;
