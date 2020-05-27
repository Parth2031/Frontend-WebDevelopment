// TODO:: Understanding React Setup,Terms,Components,Routing,Redux & Working :-

/*
! Explanation of React -
? React is a Javascript Library for building user interface. User Interface are Components which are Custom HTML Elements.
* It contains almost all the Third Party Libraries which coulod make the program more optimized and efficient.
*/

// // ----------------------------------------------------------------------------------------------------------------------------

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

// // ----------------------------------------------------------------------------------------------------------------------------

// TODO:: Some of the Buit-In React.methods() :-

/*
! Blue is for Class Based React & Green is for React Hooks ->

? React.createElement() : It means creating Elements in React but it's alternative is JSX Code which is wrapped in a single container.
?                         As only a single React.createElement is possible in a Component return statement. 

? React.createContext() : It is used to avoid the extra redundancy of sending some props from file A to C by avoiding passing from file C.

? React.createRefs() : It is used for using Special Properties(prop) like key is "ref" property which is used to pass reference of any
?                      element in JSX Code to point towards it.

* React.memo() : It is used only in React Hook as it is basically used for optimization aswith every changes in useEffect()
*                works but when we use this, it limits it down to not render everything. 
?     Syntax =>  export default React.memo(name of functional component)
*/

// // ----------------------------------------------------------------------------------------------------------------------------

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

// // ----------------------------------------------------------------------------------------------------------------------------

// TODO:: React Hook Built-In Methods :-

/*
! These are all Required to imported similar to {Component} -

? useState() : It is used for both defining and setting the state.
? useEffect() : It is majorly used for http request as it works all the even at mounting & also at updating state.
*     Syntax => useEffect ( () => { used for http request ... }, [])   
                Array is needed to implenent dependencies as if it is present/remains, then it will work only one time. 

? useRefs() : It is used for refs property alternative to React.createRefs() in Hooks.                
? useContext() : It is used as similarly to React.createContext(). 
*/

// // ----------------------------------------------------------------------------------------------------------------------------

// TODO:: Understanding Class Based React LifeCycle Hooks :-

/*
! NOTE - It is based on Class Based Components and not Supported by Funtional Components {React Hooks}.

* Types of LifeCycle Hooks Methods -->

! Mounting Methods ->
                     A component mounts when it is created and first inserted into the DOM i.e when it is rendered for the first time.

? constructor(props) : It is used to set the default configuration for a component.
? render() : It is DOM Working of the Javascript which works on JSX.
? componentDidMount() : It is the best place to make API calls since, at this point, the component has been mounted and is available to the DOM.
?                       Generally, componentDidMount is a good place to do all the setup you couldn’t have done without the DOM.

! Updating Methods ->
                      Components do not always remain in the same state after mounting.
                      Sometimes the underlying props could change and the component has to be re-rendered.
 
? shouldComponentUpdate(nextProps,nextState) : If it returns false, then componentDidUpdate will not be invoked.
* NOTE -->                                 It is also used for Optimization and it restricts Update when not needed used for checking conditions.
* It has an Alternative where instead of importing and extending { Component }, we can simply Import & Extend {PureComponents} works Similaryly.

? render() 
? componentDidUpdate(prevProps, prevState,snpashot) : 
?                            It is invoked immediately after updating occurs. This method is not called for the initial render.
?                            It as an opportunity to operate on the DOM when the component has been updated. 
?                            This is also a good place to do network requests as long as you compare the current props to previous props.

! Unmounting Methods ->

? componentWillUnmount() : It is invoked immediately before a component is unmounted and destroyed. 
?                          It is used to perform any necessary cleanup in this method such as invalidating timers, canceling network requests,etc.

! There are many Rarely used Lifecycle Hooks ->

? static getDerivedStateFromProps(props, state)
? getSnapshotBeforeUpdate(prevProps, prevState)
? static getDerivedStateFromError(error)
? componentDidCatch(error, info)
                                  .... and many more
*/

// // ----------------------------------------------------------------------------------------------------------------------------

// TODO:: React Routing Setup :-

/*
! Understanding React Routing -

? React Routing means Multi Pages feeling in a Single Page Application(SPA) where Multi Pages are rendered
?               through Routing by Javascript and not Multiple HTML Files.

* NOTE : To install React Router, we use Third Party Library -> npm install --save react-router react-router-dom 
*           where, "react-router-dom" Library is more important as most of the Components are part of it and not react-router.                      
*/

// // ----------------------------------------------------------------------------------------------------------------------------

// TODO:: React Redux Setup :-

/*
? State Management is usually Complex. So, we use React Redux to solve this problem.
* We have two Libraries :->> Redux (It is the library which is used for any Framework) & React Redux Library (Only for React).

! Understanding React Redux -

? React Redux is used for Complex State Management as passing a State Value to linked Component is still easy but passing a State Value
? to a whole other non-linked Component tends to be difficult as is dony by "Query Paramenters" but it is not a good way.
? So, we use React Redux which is a Third Party Library for setting a Global State Management which can be easy to manange.

* NOTE :- To install Redux & React Redux, we use Third Party Library's -> npm install --save redux
*                                                                         npm install --save react-redux 
*         To get Asynchronous Functionality in React Redux, "" ""      -> npm install --save redux-thunk                    
*/

// // ----------------------------------------------------------------------------------------------------------------------------

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
* Download File -> npm install --save radium

? Styled-Components - Another Third Party Library
* Download File -> npm install --save styled-component

? CSS Modules - Built-In Setup (Similar to JS Modules)
* NOTE -> In this, we only convert the .css files into .module.css files and import them to .jsx/.js files with a name through   
*         which we can access them like props and it gives each class a different name which makes every class to have different name.
*/

// // ----------------------------------------------------------------------------------------------------------------------------

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

// // ----------------------------------------------------------------------------------------------------------------------------

// TODO:: npm Commands (Terminal Commands) in order to install React App :-

/*
! React Setup (Terminal Commands) -

? npm install create-react-app -g : It is to globally install the Create React App Library which holds all React Dependencies.
? create-react-app anyfolder_name : It is to create a folder containing the React App Dependencies in that folder.

* Navigate to the created reaact app folder_name -> cd folder_name/
? npm run start : It is to run the Development Server.
? npm run build : It is a create a production build.
*/
