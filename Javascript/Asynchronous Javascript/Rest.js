// TODO:: Understanding HTTP Request, REST API & RESTful API :-

// ! Difference between URI, URL & URN :-

/*
? URI (Universal Resource Identifier) :->>
*                                          A compact sequence of characters that identifies an abstract or physical resources that
* provides a simple & extensible means for identifying a resource. [It sends a request for representing the next state]

? URL (Universal Resource Locator) :->>
*                                       It is a subset of URI that identifies a resource and explains how to access that resource by
* providing an explicit methods like https:// or fttps://.

? URN (Universal Resource Name)
*/

// ! REST API & RESTful API :-

/*
? REST API (Represential State Transfer API) depends on six constraints in order an API to be a REST API :->>

  Client Server Architecture
  Statelessness
  Cacheability
  Layered System
  Code on Demand
  Uniform Interface
    -> Resource Identification in Request
    -> Resource Manipulation through Representation
    -> Self-Descriptive Message
    -> Hypermedia as the Engine of the Application State

? RESTful API is Rest Services which runs on Web over http to give us access to resources.

* HTTP is a communications protocol that transports messages over a network. 
* SOAP is a protocol to exchange XML-based messages that can use HTTP to transport those messages. 
* Rest is a protocol to exchange any(XML or JSON) messages that can use HTTP to transport those messages. 
* REST is not necessarily tied to HTTP.

? Resource :-> The data contained at the end of the resource URI, Any information that can be named is called Resource. 
? Representation :-> Representation of the data obtained on access.
*/

// ! Types of Http Request :-

// ? GET Request - It retrieves data from a specified resource(API).
// ? POST Request - It is used create and submit data to be processed to a specified resource(API).
// ? UPDATE Request - It updates a specified resource pf (API).
// ? DELETE Request - It deletes a specified resource of (API).
// ? PUT Request - It creates a new resource or replaces a representation of the target resource with the request payload.

// ? HEAD Request - It is same as GET Request but does not a return a body and gets reponse headers from resource.
// ? OPTION Request - It return the supported http methods and gets the option available from this resource.
// ? PATCH Request - It updates and modifies the partial resources of (API).

// * NOTE - Difference between POST & PUT Request :

/*
  The difference between PUT and POST is that PUT is idempotent: calling it once or several times successively
  has the same effect (that is no side effect), where successive identical POST may have additional effects, 
  like passing an order several times.
*/

// ! HTTP Statuses :-

// ? 200: "OK"
// ? 201-300: "OK and Resource  is created"
// ? 401: "Unauthorized"
// ? 403: "Forbidden"
// ? 404: "Not Found"
// ? 405: "Method Not Allowed"
// ? 409: "Conflict"

// ! Other Types of Request - 

// * AJAX (Asynchronous Javascript and XML)
// * Fetch API (Bulit-In API to Vanilla JS)

// TODO:: Understanding API (Application Programming Interface) :-

/*
! It is a set of routines,protocols & tools for building software applications.
? It specifies how software components should interact. 
*/

