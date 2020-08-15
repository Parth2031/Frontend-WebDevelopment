// TODO:: Reflect API is an alternative to Object as it holds some extra methods and properties.
// ? NOTE :- Reflect is not a function object, so it's not constructible. So, we cannot call it using "new" keyword.

// * Syntax of Reflect - Reflect.methods()/.properties;

/*
! Difference between Object & Reflect API Built-In Methods -

? defineProperty(target, propertyKey, attributes) ->
^ Object.defineProperty() : It returns the object that was passed to the function.  ....
^ .... Returns a TypeError if the property was not successfully defined on the object.
^ Reflect.defineProperty() returns true if the property was defined on the object and false if it was not.

? defineProperties() ->
^ Object.defineProperties() : It returns the objects that were passed to the function.  ....
^ .... Returns a TypeError if any properties were not successfully defined on the object.	
^ Reflect.defineProperies() :  N/A

? set(target, propertyKey, value[, receiver])	->
^ Object.set() : N/A	
^ Reflect.set() : It returns true if the property was set successfully on the object and false if it was not. ....
^ .... Throws a TypeError if the target was not an Object.

? get(target, propertyKey[, receiver]) ->
^ Object.get() :	N/A	
^ Reflect.get() : It returns the value of the property. Throws a TypeError if the target was not an Object.

? deleteProperty(target, propertyKey) ->
^ Object.deleteProperty() : N/A	
^ Reflect.deleteProperty() returns true if the property was deleted from the object and false if it was not.

? getOwnPropertyDescriptor(target, propertyKey) ->
^ Object.getOwnPropertyDescriptor() : It returns a property descriptor of the given property if it exists on the object argument passed in, ....
^ .... and returns undefined if it does not exist. However, if an object is not passed in as the first argument, it will be coerced into an object.	

? Reflect.getOwnPropertyDescriptor() : It returns a property descriptor of the given property if it exists on the object. ....
^ .... Returns undefined if it does not exist, and a TypeError if anything other than an object (a primitive) is passed in as the first argument.

? getOwnPropertyDescriptors() ->
^	Object.getOwnPropertyDescriptors() : It returns an object containing a property descriptor of each passed-in object. ....
^ .... Returns an empty object if the passed-in object has no owned property descriptors.	
^ Reflect.getOwnPropertyDescriptors() : N/A.

? getPrototypeOf(target) ->
^	Object.getPrototypeOf() : It returns the prototype of the given object. Returns null if there are no inherited properties. ....
^ .... Throws a TypeError for non-objects in ES5, but coerces non-objects in ES2015.	

& Reflect.getPrototypeOf() returns the prototype of the given object. Returns null if there are no inherited properties, ....
& .... and throws a TypeError for non-objects.

? setPrototypeOf(target, prototype) ->
^	Object.setPrototypeOf() : It returns the object itself if its prototype was set successfully. ....
^ .... Throws a TypeError if the prototype being set was anything other than an Object or null, 
^ .... or if the prototype for the object being modified is non-extensible. 	

& Reflect.setPrototypeOf() : It returns true if the prototype was successfully set on the object and ....
& .... false if it wasn't (including if the prototype is non-extensible). Throws a TypeError if the target passed in was not an Object, 
& .... or if the prototype being set was anything other than an Object or null.

? isExtensible(target) ->
^ Object.isExtensible() : It returns true if the object is extensible, and false if it is not. ....
^ .... Throws a TypeError in ES5 if the first argument is not an object (a primitive). 
^ .... In ES2015, it will be coerced into a non-extensible, ordinary object and will return false.

& Reflect.isExtensible() : It returns true if the object is extensible, and false if it is not. ....
& .... Throws a TypeError if the first argument is not an object (a primitive).

? preventExtensions(target) ->
^ Object.preventExtensions() : It returns the object that is being made non-extensible. ....
^ .... Throws a TypeErrorin ES5 if the argument is not an object (a primitive).
^ .... In ES2015, treats the argument as a non-extensible, ordinary object and returns the object itself.

& Reflect.preventExtensions() returns true if the object has been made non-extensible, and false if it has not. ....
& .... Throws a TypeError if the argument is not an object (a primitive).

? keys(target) ->
^	Object.keys() returns an Array of strings that map to the target object's own (enumerable) property keys. ....
^ .... Throws a TypeError in ES5 if the target is not an object, but coerces non-object targets into objects in ES2015.	

& Reflect.keys() : N/A

? ownKeys(target) ->
^ Object.ownkeys() : N/A
^	Reflect.ownKeys() : It returns an Array of property names that map to the target object's own property keys. ....
^ .... Throws a TypeError if the target is not an Object.
*/

// ! Example of Reflect API - 

const course = {
  title: 'JavaScript - The Complete Guide'
};

Reflect.setPrototypeOf(course, { toString() { return this.title; } });
// Reflect.deleteProperty(course, 'title');

// ~ In this, we can see form above difference that Object doesn't have any method like this. So,it uses "delete" keyword.

// Object.deleteProperty(course, 'title');
// delete course.title;

console.log(course);