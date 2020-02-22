// TODO:: Promise function works quiet similar to the Callback Function but is used in Fetch API whereas Callback is used in AJAX.

const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' }
];

function createPost(post)
{
  // TODO:: Syntax of Promise function: return new Promise ( function () { .. });

  return new Promise( (resolve, reject) =>
  {
    setTimeout(function ()
    {
      posts.push(post);

      const error = false;

      if (!error) 
        resolve();
      
      else 
        reject('Error: Something went wrong');
      
    }, 2000);
  });
}

function getPosts()
{
  setTimeout( () =>
  {
    let output = '';
  
    posts.forEach( (post) => {
      output += `<li>${post.title}</li>`;
    });
  
    document.body.innerHTML = output;
  
  }, 1000);
}

// ! In this .then( function () used like in callback fn ) is used to call the Promise function similar to callback function but in callback ... 
// ! ... we don't need to any specific function while calling that function.
// ? Whereas, .catch() is used to call inside functionality of a function using Promise function. 

createPost({ title: 'Post Three', body: 'This is post three' }) .then(getPosts) .catch( (err) => { console.log(err); });