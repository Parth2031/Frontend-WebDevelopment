// TODO:: In this, App.js is the main file where, we create our own Components{Custom HTML Elements}.
// * NOTE :- Alternative for Creating Components is creating .jsx files.

// ? This import is used for  React Hooks Working -

// import React,{ useState } from 'react';

import React,{ Component } from 'react';
import './App.css';
import Person from './Components/Person';

class App extends Component
{
  // ! Syntax of React -
  // ? return( <div className="App"> Any More HTML Elements like HTML File </div>);

  // * NOTE - A state is a reserved keyword in App.js file which is used when ....
  // *        .... a component needs state when some data associated with it changes over time.

  /*
  ! Difference between props(.jsx) and state(App.js) -

  ? It is that props are passed from a parent component, but state is managed by the component itself. 
  ? A component cannot change its props, but it can change its state.
  */

  state =
  {
    persons: [
      { name: "Nitya", age: 20 },
      { name: "Tanya", age: 20 },
      { name: "Christina", age: 19 }
    ],
    otherState: "Some Value"
  }

  switchNameHandler = (newName) =>
  {
    this.setState
    ({
      persons: [
        { name: newName, age: 20 },
        { name: "Harshit", age: 20 },
        { name: "Mrinal", age: 20 }        
      ]
    }); 
  }

  nameChangedHandler = (event) =>
  {
    this.setState
    ({
      persons: [
        { name: "Parth", age: 20 },
        { name: event.target.value, age: 20 },
        { name: "Mrinal", age: 20 }        
      ]
    }); 
  }

  render()
  {
    const inlineStyle =
    {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

   /*
   TODO:: Some NOTES on the Return Statement Portion -->>  
   
   ? onClick is the property here,to use Event Listener and calling a method without () at end will only send a reference. .....
   ?  .... And not immediately running the event as soon as file loads. 

   * There are two ways of Dynamic Object Name Reference ->>
  
   ? 1st way : <button onClick={this.switchNameHandler.bind(this, "Parth")} style={inlineStyle}>Switch Name</button>
   ? 2nd way : <button onClick={() => this.switchNameHandler("Parth")}>Switch Name</button>

   * 2nd way can be inefficient sometimes according to React Working.
  
   ! Note -> It is the way to call a .jsx file in the Main File, if we don't want any thing inside it, else we could do the normal way also.
   ?         Example -> <Person/> 
   */

    return (
      <div className="App">
        <h1>Understanding Basic React</h1>

        {/* <button onClick={this.switchNameHandler}>Switch Name</button> */}

        <button onClick={this.switchNameHandler.bind(this, "Parth")} style={inlineStyle}>Switch Name</button>
        {/* <button onClick={() => this.switchNameHandler("Parth")}>Switch Name</button> */}
     
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.switchNameHandler.bind(this,"Shrey")}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.nameChangedHandler}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
                
        <Person name="Utkarsh" age="19">My Hobbies: Coding</Person>
      </div>
    );
  }

  // ! Alternative Syntax of React -
  // ? return React.createElement('html element',configuration,'string of text');

  // return React.createElement('div', { className: "App" }, React.createElement('h1',null, 'Hi,I am free')); 
}

export default App;

// // ---------------------------------------------------------------------------------------------------------------------------------------

// TODO:: React Hooks Working :-

/*
! In Newer Version of React, it is based on Functional Programming so, we use here React Hooks.
* NOTE -->> In React Hooks, the otherState is not merged as it only replaces the old State whereas,
*              in Class Based React, it is merged and not replaced.

? useState(in this, we can change string,object,array,etc) is Defined Method of React Hooks.
*/

// function app()
// {
//   const [personsState, setPersonsState] = useState
//   ({
//       persons: [
//         { name: "Nitya", age: 20 },
//         { name: "Tanya", age: 20 },
//         { name: "Christina", age: 19 }
//       ],
//       otherState: "Some Other Value"
//     });

//   const [otherState] = useState('Some Value');

//   console.log(personsState, otherState);

//   const switchNameHandler = () =>
//   {
//     setPersonsState
//     ({
//       persons: [
//         { name: "Parth", age: 20 },
//         { name: "Mrinal", age: 20 },
//         { name: "Christina", age: 20 }
//       ],
//       // otherState:personsState.otherState
//     });
//   }

//   return (
//     <div className="App">
//       <h1>Understanding React Hook</h1>

//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
//       <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />

//       <Person name="Utkarsh" age="19">My Hobbies: Coding</Person>

//       <button onClick={switchNameHandler}>Switch Name</button>
//     </div>
//   );
// }

// export default app;