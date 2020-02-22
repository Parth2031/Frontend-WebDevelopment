// TODO:: In a library, we make the overall layout in order to other javascript to fetch the data.

class easyHTTP
{
  constructor() {
    this.http = new XMLHttpRequest();
  }
}

// ! Make an HTTP GET Request :-

easyHTTP.prototype.get = function (url, callback)
{
  this.http.open('GET', url, true);

  // TODO:: If, we used the normal functions then "this" keyword will point the global scope but in order to point the "this" keyword ....
  // TODO:: ... to class constructor so we used arrow function as it binds the "this" keyword to class(local scope).

  // let self = this;                 // ! This would have been used when we were using normal function in order to point the class.

  this.http.onload = () =>
  {
    // if (self.http.status === 200)                     // ! Normal function case if used.

    if (this.http.status === 200) 
      callback(null, this.http.responseText);
    
    else 
      callback('Error: ' + this.http.status);
  }

  this.http.send();
}

// ! Make an HTTP POST Request :-

easyHTTP.prototype.post = function (url, data, callback)
{
  this.http.open('POST', url, true);
 
  this.http.setRequestHeader('Content-type', 'application/json');

  // let self = this;

  this.http.onload = () => {
    callback(null, this.http.responseText);
  }

  this.http.send(JSON.stringify(data));
}


// ! Make an HTTP PUT Request :-

easyHTTP.prototype.put = function (url, data, callback)
{
  this.http.open('PUT', url, true);
 
  this.http.setRequestHeader('Content-type', 'application/json');

  this.http.onload = () => {
    callback(null, this.http.responseText);
  }

  this.http.send(JSON.stringify(data));
}

// ! Make an HTTP DELETE Request :-

easyHTTP.prototype.delete = function (url, callback)
{
  this.http.open('DELETE', url, true);

  this.http.onload = () =>
  {
    if (this.http.status === 200) 
      callback(null, 'Post Deleted');
    
    else 
      callback('Error: ' + this.http.status);
  }

  this.http.send();
}
