// TODO:: Understanding React Setup,Terms,Components & Working :-

/*
! Explanation of React -
? React is a Javascript Library for building user interface. User Interface are Components which are Custom HTML Elements.
* It contains almost all the Third Party Libraries which coulod make the program more optimized and efficient.
*/

// TODO:: Types of React Working :-

/*
! React Working are of two types -

? Basic React {Based on Class & importing of Component}. 
? React Hooks {Based on Functional Programming}.

* NOTE on React Hooks -->>

? It doesn't support "state" keyword and so React Hook Methods are it's alternative.
? In React Hooks, Non-Selected State Part is not merged as it only replaces the old State whereas, .....
? ..... in Class Based React, it is merged and not replaced.
*/

// ! Basic React Syntax :-

/*
  class App extends Component
  {
    state = {
      array_name: [
        { ..... }
      ]
    }
  
    render()
    {
      return (
        <div className="App">
          Any jsx files tags or normal html tags like ... 
          <Person />      ? <-- In this, Person is a Component(.jsx) which is called like this after importing it in App.js file.
        </div>
      );
    }
  }
*/

// ! React Hooks Syntax -

/*
  function App()
  {
    useState() is a React Hook Method ->

    const [arraynames] = useState({.... any string,object,array,etc});
  
    return (
      <div className="App">
        Any jsx files tags or normal html tags ...
      ? Similarly, To Basic React ...        
      </div>
    );
  }
*/

// TODO:: Types of Components :-

/*
! Two types of Components -

? Stateless/Presentational/Dumb Components : It should be preferred so that different components can be reused like Lego pieces, 
?                                             even if you don’t have immediate plans to reuse a component.

? Stateful/Container/Smart Components : They can be reusable also but need the logic to be same for reusable place.

* Difference between Types of Components ->>

? The literal difference is that one has state, and the other doesn’t. That means the stateful components are keeping track of changing data, 
? while stateless components print out what is given to them via props, or they always render the same thing.
*/

// ! Stateless Components Example -

/*
  const BooksList = ({books}) => 
  {
   return (
    <ul>
      {books.map(book => {
        return <li>book</li>
      })}
    </ul>
   )
  }
*/

// ! Stateful Components Example -

/*
  class App extends Component 
  {
   constructor() 
   {
     super()
     this.state = {
       books: []
     }
   }

   render() {
     <BooksList books={this.state.books} />
   }
  }
*/

// TODO:: Understanding Types of React Stying :-

/*
! Two Types of Styling -

? Inline Styling : In this, we could use Dynamic Style and use Style to particular portions of a file.
* NOTE -->          But it has it's limitations that we cannot use pseudo classes/media queries and many dynamic functionalities.

? Global (App.css) Styling : In this, we can put Dynamic Style's but a little difficult to do.
* NOTE -->          But here, if we apply style then it put Styles Globally, so it has it's limitation like this.
*/

// TODO:: Making Inline Style without Limitations and Effective :-

/*
! There are three ways to do that -

? Radium - A Third Party Library


? Styled-Components - Another Third Party Library

? CSS Modules - Built-In Setup (Similar to JS Modules)
* NOTE -> In this, we only convert the .css files into .module.css files and import them to .jsx/.js files with a name through   
*         which we can access them like props and it gives each class a different name which makes every class to have different name.
*/


// TODO:: React Files :- 

/*
! Explanation of React Files  - 

? React Components can be created by two ways -> 
* 1st way : Using App.js file as the Main File but is used to create small projects as it could create confusion.
* 2nd way : Creating .jsx files as it works like Modular Javascript for handling multiple files using import and export keywords.

! NOTE on JSX (Javascript Extension) Files ->>

? Since JSX is closer to JavaScript than to HTML, React DOM uses camelCase property naming convention instead of HTML attribute names.
? For example, class becomes className in JSX, and tabindex becomes tabIndex.

! Difference between props(.jsx) and state(App.js) -

* It is that props are passed from a parent component, but state is managed by the component itself.
* A component cannot change its props, but it can change its state.
*/

// TODO:: npm Commands (Terminal Commands) in order to install React App :-

/*
! React Setup (Terminal Commands) -

? npm install create-react-app -g : It is to globally install the Create React App Library which holds all React Dependencies.
? create-react-app anyfolder_name : It is to create a folder containing the React App Dependencies in that folder.

* Navigate to the created reaact app folder_name -> cd folder_name/
? npm run start : It is to run the Development Server.
? npm run build : It is a create a production build.
*/
