// TODO:: It is only used where we want to load Large Amount of Chunck of Code only.

import React, { Component, Suspense } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import User from './Containers/User';
import Welcome from './Containers/Welcome';

const Posts = React.lazy(() => import('./Containers/Posts'));

class App extends Component
{
  state = { showPosts: false };

  modeHandler = () =>
  {
    this.setState(prevState => {
      return { showPosts: !prevState.showPosts };
    });
  };

  render()
  {
    return (
      
      // ! Alternative Working of Suspense Component as it can used also elsewhere besides React.lazy()

      <React.Fragment>
        <button onClick={this.modeHandler}>Toggle Mode</button>
        {this.state.showPosts ? (
          <Suspense fallback={<div>Loading...</div>}>
            <Posts />
          </Suspense>
        ) : (
            <User />
          )}
      </React.Fragment>

      // <BrowserRouter>
      //   <React.Fragment>
      //     <nav>
      //       <NavLink to="/user">User Page</NavLink> |&nbsp;
      //       <NavLink to="/posts">Posts Page</NavLink>
      //     </nav>
      //     <Route path="/" component={Welcome} exact />
      //     <Route path="/user" component={User} />
      //     <Route path="/posts" render={() =>
      //       <Suspense fallback={ <div>Loading...</div> }>
      //         <Posts/>
      //       </Suspense>} />
      //   </React.Fragment>
      // </BrowserRouter>
    );
  }
}

export default App;