// TODO:: In this, App.js is the main file where, we create our own Components{Custom HTML Elements}.
// * NOTE :- Alternative for Creating Components is creating .jsx files and importing it in Main File.

// ? This import is used for  React Hooks Working ->>
// import React,{ useState } from 'react';

import React,{ Component } from 'react';
// import './App.css';
import classes from './App.module.css';                   // ! <-- This file is imported to use CSS Modules.
// import Person from './Components/Person';
// import ErrorBoundary from './Components/ErrorBoundary';
import Persons from './Components/Persons/Persons';
import Cockpit from './Components/Cockpit/Cockpit';

// // -------------------------------------------------------------------------------------------------------------------------------------

// TODO:: Main Core Concepts Working :-

// class App extends Component
// {
//   // ! Syntax of React -
//   // ? return( <div className="App"> Any More HTML Elements like HTML File </div>);

//   // * NOTE - A state is a reserved keyword in App.js file which is used when ....
//   // *        .... a component needs state when some data associated with it changes over time.

//   /*
//   ! Difference between props(.jsx) and state(App.js) -

//   ? It is that props are passed from a parent component, but state is managed by the component itself. 
//   ? A component cannot change its props, but it can change its state.
//   */

//   state =
//   {
//     persons: [
//       { name: "Nitya", age: 20 },
//       { name: "Tanya", age: 20 },
//       { name: "Christina", age: 19 }
//     ],
//     otherState: "Some Value"
//   }

//   switchNameHandler = (newName) =>
//   {
//     this.setState
//     ({
//       persons: [
//         { name: newName, age: 20 },
//         { name: "Harshit", age: 20 },
//         { name: "Mrinal", age: 20 }        
//       ]
//     }); 
//   }

//   nameChangedHandler = (event) =>
//   {
//     this.setState
//     ({
//       persons: [
//         { name: "Parth", age: 20 },
//         { name: event.target.value, age: 20 },
//         { name: "Mrinal", age: 20 }        
//       ]
//     }); 
//   }

//   render()
//   {
//     const inlineStyle =
//     {
//       backgroundColor: 'white',
//       font: 'inherit',
//       border: '1px solid blue',
//       padding: '8px',
//       cursor: 'pointer'
//     }

//    /*
//    TODO:: Some NOTES on the Return Statement Portion -->>  
   
//    ? onClick is the property here,to use Event Listener and calling a method without () at end will only send a reference. .....
//    ?  .... And not immediately running the event as soon as file loads. 

//    * There are two ways of Dynamic Object Name Reference ->>
  
//    ? 1st way : <button onClick={this.switchNameHandler.bind(this, "Parth")} style={inlineStyle}>Switch Name</button>
//    ? 2nd way : <button onClick={() => this.switchNameHandler("Parth")}>Switch Name</button>

//    * 2nd way can be inefficient sometimes according to React Working.
  
//    ! Note -> It is the way to call a .jsx file in the Main File, if we don't want any thing inside it, else we could do the normal way also.
//    ?         Example -> <Person/> 
//    */

//     return (
//       <div className="App">
//         <h1>Understanding Basic React</h1>

//         {/* <button onClick={this.switchNameHandler}>Switch Name</button> */}

//         <button onClick={this.switchNameHandler.bind(this, "Parth")} style={inlineStyle}>Switch Name</button>
//         {/* <button onClick={() => this.switchNameHandler("Parth")}>Switch Name</button> */}
     
//         <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.switchNameHandler.bind(this,"Shrey")}/>
//         <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.nameChangedHandler}/>
//         <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
                
//         <Person name="Utkarsh" age="19">My Hobbies: Coding</Person>
//       </div>
//     );
//   }

//   // ! Alternative Syntax of React -
//   // ? return React.createElement('html element',configuration,'string of text');

//   // return React.createElement('div', { className: "App" }, React.createElement('h1',null, 'Hi,I am free')); 
// }

// export default App;

// // ---------------------------------------------------------------------------------------------------------------------------------------

// TODO:: Advanced Core Concepts Working :-

class App extends Component
{
  constructor(props)
  {
    super(props);
    console.log('[App.js] constructor');
  }

  state =
  {
    persons: [
      { id: 1, name: "Nitya", age: 20 },
      { id: 2, name: "Tanya", age: 20 },
      { id: 3, name: "Christina", age: 19 }
    ],
    showPersons: false
  }

  static getDerivedStateFromProps(props, state)
  {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
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

  // ! NOTE -> In this, we updated the function using reference concepts to update value for all input text box.

  nameChangedHandler = (event, id) =>
  {
    const personIndex = this.state.persons.findIndex(p => p.id === id);

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const people = [...this.state.persons];
    people[personIndex] = person;

    this.setState({ persons: people }); 
  }
  
  togglePersonsHandler = () =>
  {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  deletePersonHandler = (personIndex) =>
  {
    // ! In this, it creates a copy of the array and not create changes on the original array.
    // const persons = this.state.persons.slice();

    // ! Alternative Way to slice() method ->
    const persons = [...this.state.persons];
    
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  render()
  {
    let persons = null;
    
    // ! It is used to access the classes from CSS Modules ->
    // ? It is now converted to a whole New Component for Dynamic Styling ->>
    // let buttonClass = '';

    // ! NOTE -->> It shows as an Alternative Way to Ternary Opertor and can use the Conditions :-

    // if (this.state.showPersons) 
    // {
    //   persons = (
    //     <div>
    //       <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.switchNameHandler.bind(this, "Shrey")} />
    //       <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.nameChangedHandler} />
    //       <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
    //     </div> 
    //   );
    // }  

    // ! In this, (Better Alternative to Above Working) using Dynamic Method & Reference Concepts to the Above Logic ->
    
    // if (this.state.showPersons) 
    // {
    //   persons = (
    //     <div>
    //       {
    //         this.state.persons.map((person, index) =>
    //         {
    //           return <Person
    //             click={() => this.deletePersonHandler(index)}
    //             name={person.name}
    //             age={person.age}
    //             key={person.id}            // ! <-- Key Property is used to Uniquely Identify Objects Value by using some sort of ID.
    //             changed={(event) => this.nameChangedHandler(event,person.id)} />   
    //         })
    //       }
    //     </div> 
    //   );

    //   // ! Dynamic Inline Styling ->

    //   buttonClass = classes.Red;
    // }  

    // ! (Better Alternative to Above Working) Optimizing and Creating Components to Increase Extra Functionalities -->

    if (this.state.showPersons) {
      persons = (<Persons persons={this.state.persons} clicked={this.deletePersonHandler} changed={this.nameChangedHandler} />);
    }

    // TODO: Understanding ErrorBoundary Component Working -> 

    // if (this.state.showPersons) 
    // {
    //   persons = (
    //     <div>
    //       {
    //         this.state.persons.map((person, index) =>
    //         {
    //           // ! NOTE -> "key" property is used only at the outer Tag Only.

    //           return <ErrorBoundary key={person.id}>                
    //                     <Person
    //                       click={() => this.deletePersonHandler(index)}
    //                       name={person.name}
    //                       age={person.age}
    //                       changed={(event) => this.nameChangedHandler(event, person.id)} /> 
    //                  </ErrorBoundary>
    //         })
    //       }
    //     </div> 
    //   );
    // }  

    // ! Creating a CSS ClassList ->
    // ? It is now converted to a whole New Component for better Performance->>

    // const assignedClasses = [];

    // if (this.state.persons.length <= 2) {
    //   assignedClasses.push(classes.red);
    // }

    // if (this.state.persons.length <= 1) {
    //   assignedClasses.push(classes.bold);
    // }

    /*
     TODO:: Some NOTES on return statement -->>

     * Below Syntax shows that it looks like HTML but it is actually in Javascript so, we use Curly Braces as we could put Conditions 
     ! NOTE-> But we cannot use if else statements in return statement but only ternary opertor on some condition.
     ?  { Condition ? JSX Code : null } 

     * NOTE -> 
     ? In CSS Modules, Instead of calling .css file like this -> "App", we call it like .jsx file with accessing their class like like props.

     ! NOTE -->
     * Cockpit Component is used to Reduce the render() function processing as it takes more time and less efficient.
     ? this.props : It is used when we use class based components and importing from index.js as a prop name and value.  

     TODO:: NOTES oustide for return statement -->>

     ! Alternative Method to the Above Case :-> 
     * NOTE -> It is by using If Else.. Statements outside the Return Statement but Inside render(). 
     ? In order to access them, Syntax --> {function_name/array_name} in the Return Statement.
     *                          Example ->> {persons}
    */

    return (
      <div className={classes.App}>
        
        {/* <h1>Understanding Basic React</h1>
        <p className={assignedClasses.join(' ')}>Understanding Dynamic classNames Working</p>
        <button className={buttonClass} onClick={this.togglePersonsHandler}>Toggle Person's</button>
          */}
        
        {/* {
          this.state.showPersons === true ?  
           <div>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.switchNameHandler.bind(this, "Shrey")} />
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.nameChangedHandler} />
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
           </div> : null
        } */}

        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />         
        {persons}
      </div>
    );
  }
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