// TODO:: Understanding Both HTTP AJAX & React Routing ->

import React, { Component } from 'react';

// * BrowserRouter Component let's us access the React Router DOM Library to it's full extent without this we can't use React Router.
import { BrowserRouter } from 'react-router-dom';

// import Blog from './Containers/Blog/Blog';
import BlogRouter from '../src/Containers/Blog Router/BlogRouter';

class App extends Component
{
  /*
  ! Understanding Blog which is HTTP AJAX -->

  ? return (
  ?   <div className="App">
  ?     <Blog />                       <--- Where, all it's files are in Components Folder and not Container Folder 
  ?   </div >
  ? );
  */

  render()
  {
    return (
      <BrowserRouter>
        <div className="App">
          <BlogRouter/> 
        </div>
      </BrowserRouter>  
    );
  }
}

export default App;
