// TODO:: Understanding HTTP Request :-

// * NOTE :- Difference beteen Http Request and REST API :

/*
? REST API (Represential State Transfer API) which mainly depends on HTTP Request.

  HTTP is a communications protocol that transports messages over a network. 
  SOAP is a protocol to exchange XML-based messages that can use HTTP to transport those messages. 
  Rest is a protocol to exchange any(XML or JSON) messages that can use HTTP to transport those messages. 
  REST is not necessarily tied to HTTP.
*/

// ! Types of Http Request :-

// ? GET Request - It retrieves data from a specified resource(API).
// ? POST Request - It is used to submit data to be processed to a specified resource(API).
// ? UPDATE Request - It updates a specified resource(API).
// ? DELETE Request - It deletes a specified resource(API).
// ? PUT Request - It creates a new resource or replaces a representation of the target resource with the request payload.

// ? HEAD Request - It is same as GET Request but does not a return a body.
// ? OPTION Request - It return the supported http methods.
// ? PATCH Request - It updates the partial resources.

// * NOTE - Difference between POST & PUT Request :

/*
  The difference between PUT and POST is that PUT is idempotent: calling it once or several times successively
  has the same effect (that is no side effect), where successive identical POST may have additional effects, 
  like passing an order several times.
*/

// ! HTTP Statuses :-

// ? 200: "OK"
// ? 201-300: "OK and Resource  is creted"
// ? 403: "Forbidden"
// ? 404: "Not Found"

// ! Other Types of Request - 

// * AJAX (Asynchronous Javascript and XML)
// * Fetch API (Bulit-In API to Vanilla JS)

// TODO:: Understanding API (Application Programming Interface) :-

/*
! It is a set of routines,protocols & tools for building software applications.
? It specifies how software components should interact. 
*/

