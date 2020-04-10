// TODO:: Understanding Form Data :-

/*
TODO:: Form Data is called as Built-in Object by "new" keyword.
* It works on AJAX as well as Fetch API to make code easy and understandable.
? The FormData interface provides a way to easily construct a set of key/value pairs representing form fields and their values, 
? which can then be easily sent using the XMLHttpRequest.send() method. 
! It uses the same format a form would use if the encoding type were set to "multipart/form-data".
*/

// TODO :: Form Data Methods -

/*
? FormData.append() - Appends a new value onto an existing key inside a FormData object, or adds the key if it does not already exist.
? FormData.delete() - Deletes a key/value pair from a FormData object.
? FormData.entries() - Returns an iterator allowing to go through all key/value pairs contained in this object.
? FormData.get() - Returns the first value associated with a given key from within a FormData object.
? FormData.getAll()- Returns an array of all the values associated with a given key from within a FormData.
? FormData.has() - Returns a boolean stating whether a FormData object contains a certain key.
? FormData.keys() - Returns an iterator allowing to go through all keys of the key/value pairs contained in this object.
? FormData.set() - Sets a new value for an existing key inside a FormData object, or adds the key/value if it does not already exist.
? FormData.values() - Returns an iterator allowing to go through all values  contained in this object.
*/

// ! Example of Form Data - 

const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
const form = document.querySelector('#new-post form');
const fetchButton = document.querySelector('#available-posts button');
const postList = document.querySelector('ul');

function sendHttpRequest(method, url, data)
{
  // const promise = new Promise((resolve, reject) => {
  // const xhr = new XMLHttpRequest();
  // xhr.setRequestHeader('Content-Type', 'application/json');

  //   xhr.open(method, url);

  //   xhr.responseType = 'json';

  //   xhr.onload = function() {
  //     if (xhr.status >= 200 && xhr.status < 300) {
  //       resolve(xhr.response);
  //     } else {
  // xhr.response;
  //       reject(new Error('Something went wrong!'));
  //     }
  //     // const listOfPosts = JSON.parse(xhr.response);
  //   };

  //   xhr.onerror = function() {
  //     reject(new Error('Failed to send request!'));
  //   };

  //   xhr.send(JSON.stringify(data));
  // });

  // return promise;

  return fetch(url,
  {
    method: method,
    // body: JSON.stringify(data),
    body: data,
    // headers: {
    //   'Content-Type': 'application/json'
    // }
  })
    .then(response =>
    {
      if (response.status >= 200 && response.status < 300) 
        return response.json();
      
      else
      {
        return response.json().then(errData =>
        {
          console.log(errData);
          throw new Error('Something went wrong - server-side.');
        });
      }
    })
    .catch(error =>
    {
      console.log(error);
      throw new Error('Something went wrong!');
    });
}

async function fetchPosts()
{
  try
  {
    const responseData = await sendHttpRequest('GET','https://jsonplaceholder.typicode.com/posts');
    const listOfPosts = responseData;
    
    for (const post of listOfPosts)
    {
      const postEl = document.importNode(postTemplate.content, true);
      postEl.querySelector('h2').textContent = post.title.toUpperCase();
      postEl.querySelector('p').textContent = post.body;
      postEl.querySelector('li').id = post.id;
      listElement.append(postEl);
    }
  }
  catch (error) {
    alert(error.message);
  }
}

async function createPost(title, content)
{
  const userId = Math.random();
  const post =
  {
    title: title,
    body: content,
    userId: userId
  };

  // ! Working of Form Data :

  const fd = new FormData(form);
  // fd.append('title', title);
  // fd.append('body', content);
  fd.append('userId', userId);

  sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts', fd);
}

fetchButton.addEventListener('click', fetchPosts);

form.addEventListener('submit', event =>
{
  event.preventDefault();
  const enteredTitle = event.currentTarget.querySelector('#title').value;
  const enteredContent = event.currentTarget.querySelector('#content').value;

  createPost(enteredTitle, enteredContent);
});

postList.addEventListener('click', event =>
{
  if (event.target.tagName === 'BUTTON')
  {
    const postId = event.target.closest('li').id;
    sendHttpRequest('DELETE',`https://jsonplaceholder.typicode.com/posts/${postId}`);
  }
});