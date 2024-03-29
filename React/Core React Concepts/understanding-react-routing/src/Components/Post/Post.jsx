import React from 'react';
import './Post.css';

// ^ As BrowserRouter gives access to Router only to the direct access by Route Component and not all Components. So, we use withRouter.
// * withRouter is a Higher Order Component which makes any Child Components Router aware as it now can use Router Properties and Functionalaties.
// import { withRouter } from 'react-router-dom';

const post = (props) =>
{ 
  // console.log(props);

  return (
    <article className="Post" onClick={props.clicked}>
      <h1>{props.title}</h1>
      <div className="Info">
        <div className="Author">{props.author}</div>
      </div>
    </article>  
  );  
}

export default post;
// export default withRouter(post);