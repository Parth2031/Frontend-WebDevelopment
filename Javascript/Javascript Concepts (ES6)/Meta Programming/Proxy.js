// TODO:: Proxy API is used to define custom behavior for fundamental operations (e.g. property lookup, assignment, enumeration, 
// ^      function invocation, etc). Since, it is used as traps in object where you could catch the data and later be fetched.

/*
* NOTE : Proxy API containing get() & set() are getters and setter but with more flexibility as they are not bound to be worked 
*        in a certain way only.
? Syntax ->> const variable_name = new Proxy(target,handler);
?            where, target -> object & handler -> propertyName.
& Similar Built-In Methods to Reflect API.    
*/

// ! Example of Proxy API -

const courseHandler =
{
  get(obj, propertyName)
  {
    console.log(propertyName);
  
    if (propertyName === 'length') 
      return 0;

    return obj[propertyName] || 'NOT FOUND';
  },

  set(obj, propertyName, newValue)
  {
    console.log('Sending data ...');
  
    if (propertyName === 'rating') 
      return;
    
    obj[propertyName] = newValue;
  }
};

const pCourse = new Proxy(course, courseHandler);
pCourse.rating = 5;

console.log(pCourse.title, pCourse.length, pCourse.rating);