// TODO:: Understanding Axios Library Improvement :-

// ? It is used for both - AJAX & Fetch API.
// * It is based on Promise Built-In Object.
// ! It is used to make code easier with additional advantages as it has Built-In Methods for Http Request.
/*
  * Axios Property -
  ?                  variable_name.data;

  * Axios Methods -
  ?                 axios.get(url);
  ?                 axios.post(url);
  ?                 axios.put(url);
  ?                 axios.delete(url);     and many more ....
*/

const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
const form = document.querySelector('#new-post form');
const fetchButton = document.querySelector('#available-posts button');
const postList = document.querySelector('ul');

// * NOTE - In Form Data, we had sendHttpRequest() Function to fetch the response from the API.

async function fetchPosts()
{
  try
  {
    // ! In this, responseData, we fetched the data from API using http request and sendHttpRequest() function.

    // const responseData = await sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com/posts');

    // TODO:: Whereas, in Axios Library, we don't need to write any function for data fetching by AJAX & Fetch API. 
    // ! Axios Library is better as it find's error automatically rather than us have to find using try and catch. 
    // * Axios Library also helps to avoid adding of "Headers" like "Content-Type" in the API.

    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const listOfPosts = response.data;
    
    for (const post of listOfPosts)
    {
      const postEl = document.importNode(postTemplate.content, true);
      postEl.querySelector('h2').textContent = post.title.toUpperCase();
      postEl.querySelector('p').textContent = post.body;
      postEl.querySelector('li').id = post.id;
      listElement.append(postEl);
    }
  }
  catch (error)
  {
    alert(error.message);
    console.log(error.response);
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

  const fd = new FormData(form);
  fd.append('title', title);
  fd.append('body', content);
  fd.append('userId', userId);

  // ! Axios Library also detects which which type of response is send to the API nd automatically sets itself according to it.  

  const response = await axios.post('https://jsonplaceholder.typicode.com/posts', post);
  // const response = await axios.post('https://jsonplaceholder.typicode.com/posts', fd);
  
  console.log("Axios Library Response");
  console.log(response);
}

fetchButton.addEventListener('click', fetchPosts);

form.addEventListener('submit', event =>
{
  const enteredTitle = event.currentTarget.querySelector('#title').value;
  const enteredContent = event.currentTarget.querySelector('#content').value;

  createPost(enteredTitle, enteredContent);

  event.preventDefault();
});

postList.addEventListener('click', event =>
{
  if (event.target.tagName === 'BUTTON')
  {
    const postId = event.target.closest('li').id;
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  }
});
