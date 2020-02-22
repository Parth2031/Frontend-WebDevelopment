// TODO:: XHR Properties :-

// ? onreadystatechange: Defines a function to be called when the readyState property changes.
// ? responseText:	Returns the response data as a string.
// ? readyState:	Holds the status of the XMLHttpRequest.                             <-- Explained Below
// ? status:	Returns the status-number of a request.                                 <-- Explained Below
// ? statusText:	Returns the status-text (e.g. "OK" or "Not Found").
// ? responseXML:	Returns the response data as XML data.

// TODO:: ReadyState Values :- 

// ! 0: request not initialized 
// ! 1: server connection established
// ! 2: request received 
// ! 3: processing request 
// ! 4: request finished and response is ready

// TODO:: HTTP Statuses :-

// ! 200: "OK"
// ! 403: "Forbidden"
// ! 404: "Not Found"

var button = document.querySelector("#button");
var output = document.querySelector("#output");

button.addEventListener("click", LoadData);

function LoadData()
{
  // ! Create an XHR Object for fetching the data from client to server :-

  const xhr = new XMLHttpRequest();

  // !  -> Open property is used to specify the request.
  // TODO:: Syntax -> variable_name of object.open (method,url,async,user,psw);	
  // ? Specified request :- 
  /*                            method: the request type: "GET" or "POST"
                                url: the file location
                                async: true(asynchronous) or false(synchronous)
                                user: optional user name
                                psw: optional password
  */
  
  xhr.open('GET', 'data.txt', true);

  // console.log('READYSTATE', xhr.readyState);

  // ! Optional - Used for spinners/loaders :->

  // xhr.onprogress = function() {
  //   console.log('READYSTATE', xhr.readyState);
  // }

  // ! .onload method is used to run when the file loads.

  xhr.onload = function()
  {
    console.log('READYSTATE', xhr.readyState);
  
    if (this.status === 200)
    {
      console.log(this.responseText);
      document.getElementById("output").innerHTML = `<h1> ${this.responseText} </h1>`;
    }
  }

  // ! Alternative method used to be done for the above onload method ->

  // xhr.onreadystatechange = function()
  // {
  //   console.log('READYSTATE', xhr.readyState);
  
  //   if (this.status === 200 && this.readyState === 4)
  //     console.log(this.responseText);
  // }

  xhr.onerror = () => {
    console.log('Request error...');
  }

  // ! Used to send the fetched data to client.

  xhr.send();
}
