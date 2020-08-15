class easyHTTP
{
  constructor() {
    this.http = new XMLHttpRequest();
  }

  // ! Make an HTTP GET Request :-

  get(url, callback)
  {
    this.http.open('GET', url, true);
    
    // let self = this;           // & <-- It is used when we using normal functions as this pointer points towards the global object.

    this.http.onload = () =>
    {
      if (self.http.status === 200) 
        callback(null, this.http.responseText);                      // ~ In this, this is replaced by self.   

      else 
        callback('Error: ' + this.http.status);
    };

    this.http.send();
  }

  // ! Make an HTTP POST Request :-

  post(url, data, callback)
  {
    this.http.open('POST', url, true);
  
    this.http.setRequestHeader('Content-type', 'application/json');
  
    // let self = this;
  
    this.http.onload = () => {
      callback(null, this.http.responseText);
    };
    
    this.http.send(JSON.stringify(data));
  }
  
  // ! Make an HTTP PUT Request :-

  put(url, data, callback)
  {
    this.http.open('PUT', url, true);
  
    this.http.setRequestHeader('Content-type', 'application/json');
  
    // let self = this;
  
    this.http.onload = () => {
      callback(null, this.http.responseText);
    };

    this.http.send(JSON.stringify(data));
  }

  // ! Make an HTTP DELETE Request :-

  delete(url, callback)
  {
    this.http.open('DELETE', url, true);
   
    // let self = this;
   
    this.http.onload = () =>
    {
      if (this.http.status === 200) 
        callback(null, 'Post Deleted');
      
      else 
        callback('Error: ' + this.http.status);
    };

    this.http.send();
  }
}

