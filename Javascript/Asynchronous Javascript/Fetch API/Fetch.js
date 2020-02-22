var button_1 = document.querySelector("#button1");
var button_2 = document.querySelector("#button2");
var button_3 = document.querySelector("#button3");
var output = document.querySelector("#output");

button_1.addEventListener("click", getText);

button_2.addEventListener("click", getJson);

button_3.addEventListener("click", getExternal);

// ! Get local text file data :-

function getText()
{
  fetch("test.txt")

  // ! Shotest format to write using Arrow function as this makes res.text() to return. 
    
    .then(res => res.text())

    .then((data) =>
    {
      console.log(data);

      output.innerHTML = data;
    })

    .catch( (err) => {
      console.log(err);
    });
}


// ! Get local json data :-

function getJson()
{
  fetch("posts.json")
    
    .then( (res) => {
      return res.json();
    })

    .then((data) =>
    {
      console.log(data);
    
      let outputs = "";
    
      data.forEach( (post) => {
        outputs += `<li>${post.title}</li>`;
      });
     
      output.innerHTML = outputs;
    })
    
    .catch( (err) => {
      console.log(err);
    });
}


// ! Get from External API :-

function getExternal()
{
  fetch("https://api.github.com/users")
    
    .then((res) => {
      return res.json();
    })

    .then((data) =>
    {
      console.log(data);
    
      let outputs = "";
    
      data.forEach( (user) => {
        outputs += `<li>${user.login}</li>`;
      });

      output.innerHTML = outputs;
    })

    .catch( (err) => {
      console.log(err);
    });
}