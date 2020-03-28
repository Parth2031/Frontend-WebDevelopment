// ! Creating a Object in Array :-

const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' }
];

// ! Now, in this basically, we are synchonously calling a function resulting that a new createPost() was not able to be called. 

// function createPost(post)
// {
//   setTimeout(function() {
//     posts.push(post);
//   }, 2000);
// }

// function getPosts()
// {
//   setTimeout(function ()
//   {
//     let output = '';
  
//     posts.forEach(function (post) {
//       output += `<li>${post.title}</li>`;
//     });

//     document.querySelector(".show").innerHTML = output;
  
//   }, 1000);
// }

// createPost({title: 'Post Three', body: 'This is post three'});

// getPosts();

// ! Whereas, in this basically, we are asynchonously calling a function resulting that a new createPost() was able to be called.

// TODO:: In order to use callback functions, we send the function to be performed as an argument to the function, 
// TODO:: where it's functional are to be applied. By sending as argument named "callback" and then later as callback() in that function.

function createPost(post, callback)
{
  setTimeout(function ()
  {
    posts.push(post);
    callback();       // ? It can also send the arguments of function createPost to getPost function by sending parameter in callback(post).
  }, 2000);
}


function getPosts()
{
  setTimeout(function ()
  {
    let output = '';

    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`;
    });

    document.querySelector(".show").innerHTML = output;
  
  }, 1000);
}

createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);