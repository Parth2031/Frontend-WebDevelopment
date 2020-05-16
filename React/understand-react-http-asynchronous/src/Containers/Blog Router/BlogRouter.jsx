// TODO:: Understanding React Routing :-

import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
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

  // TODO:: Link is another Component which simply creates a anchor tag in it's simplest form.
  
  /*
  ! Link Component Properties are -

  ? to = "/" : In it's simplest from is an anchor tag: <a href="/"></a>.
  * NOTE -> But it has it' sown functionalaties where using object, we can add Some More Properties to avoid unnecessary
  *         rendering of Multiple Page to jump from one link to another but only a Single Page. 
  *         It also avoids the state loss as re-render tends to loose state meaning all data on that page.
  */

  render()
  {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li><Link to = "/">Home</Link></li>
              <li><Link to = {
              {
                pathname: '/new-post',
                hash: '#submit',
                search: '?quick-submit=true'
                }}>New Post</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" component={NewPost} />
      </div>
    );
  }
}

export default BlogRouter;