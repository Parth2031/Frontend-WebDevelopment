// TODO:: Promise function works quiet similar to the Callback Function but is used in Fetch API whereas Callback is used in AJAX.

const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' }
];

const createPost = (post) =>
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

const getPosts = () =>
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

const experiment = () => {
  console.log("Afer catch method, so if first .then() fails, it will still work");
}  

// * Promise Built-in Object Error Handling -> 

// TODO: NOTE :- Where, .then() works like try{....} and .catch() works like catch() {....}.

// ! In this .then( function () used like in callback fn ) is used to call the Promise function similar to callback function but in callback ... 
// ! ... we don't need to any specific function while calling that function.
// ? Whereas, .catch() is used to call inside functionality of a function using Promise function. 

// * NOTE :- Every .then() can have a .catch() or can also leave it.
// ? Afer catch method, so if first .then() fails, it will still work other remaining .then().

createPost({ title: 'Post Three', body: 'This is post three' })
  .then(getPosts)
  .catch((err) => { console.log(err); })
  .then(experiment);