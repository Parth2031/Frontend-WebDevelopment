// TODO:: Understanding React Routing :-

import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Route, NavLink, Switch } from 'react-router-dom';
import './BlogRouter.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class BlogRouter extends Component
{
  // TODO:: Route is a Component which get's rendered only when route matches the URL. 

  /*
  ? Route Component Properties are -
  
  * path = "/" : This means that anything starting with "/" which matches URL and so it will rendered.
  * exact keyword : It just specifies the only needed path mentioned and not the starting.
  * component = {name of component} : It let' you enter the Component that needs to be rendered when matches the URL

  ! Example of Route Component Working -> 

  ?  <Route path="/" exact render={() => <h1>Home</h1>} />
  ?  <Route path="/" render={() => <h1>Home 2</h1>} /> 
  */

  // TODO:: NavLink is another Component which simply creates a anchor tag in it's simplest form with extra functionalaties over Link Component.
  
  /*
  ! Link/NavLink Component Properties are -

  ? to = "/" : In it's simplest from is an anchor tag: <a href="/"></a>.
  * NOTE -> But it has it' sown functionalaties where using object, we can add Some More Properties to avoid unnecessary
  *         rendering of Multiple Page to jump from one link to another but only a Single Page. 
  *         It also avoids the state loss as re-render tends to loose state meaning all data on that page.
  *         It always works as Absolute Path and not Relative Path.
  
  ! Absolute Path means that it's always appended right after your domain.
  ? Example : By default, if you just enter to="/some-path"  or to="some-path".

  ! Relative Path means if your component is already loaded given a specific path (e.g. posts ) and you then want to append 
  !                                             something to that existing path (so that you, for example, get /posts/new ).
  ? Example : If you're on a component loaded via /posts , to="new"  would lead to example.com/new , NOT example.com/posts/new .

  * Note : So in order to convert "to" property as Relative Path Based, we use this format : pathname: this.props.match.url + '/new-post'.
  
  ? exact keyword : It just specifies the only needed path mentioned and not the starting.
  */
  
  // TODO:: Switch Component is used to only load a Single Route at a time but in a specific order only.

  render()
  {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li> <NavLink to="/posts/" exact activeClassName="active" activeStyle={{ color: '#f1730c', textDecoration: 'underline' 
              }}> Posts</NavLink></li>
              <li><NavLink to = {
              {
                pathname: '/new-post',
                // pathname: this.props.match.url + '/new-post',
                hash: '#submit',
                search: '?quick-submit=true'
                }}>New Post</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/new-post" component={NewPost} />
          <Route path="/posts/" component={Posts} />
        </Switch>
      </div>
    );
  }
}

export default BlogRouter;