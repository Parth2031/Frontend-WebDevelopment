// ^ Observer Pattern is a software design pattern in which an object, called the subject, maintains a list of its dependents, ...
// ^ ...called observers, and notifies them automatically of any state changes, usually by calling one of their methods.
// ? The Observer Pattern defines a one-to-many relationship. When one object updates, it notifies many other objects that it has been updated.

// ! Brief Explanation of Terms {Subject and Observer} :- 
/*
  Subject – This is the object that will send out a notification to all of the ‘observers’ who want / need to know that the subject was updated.
  In our case, the subject will be the application state object.

  Observers – These are the objects that want to know when the subject has changed.
  In our case, these will be the page elements that need to update when the application state changes.
*/

// TODO:: Observer Pattern Working :-

// ? class Subject 
// ? {
// ?   constructor() {
// ?     this.observers = [];
// ?   }

// *     Add an observer to this.observers.
// ?   addObserver(observer) {
// ?     this.observers.push(observer);
// ?   }

// *    Remove an observer from this.observers.
// ?   removeObserver(observer)
// ?   {
// ?     const removeIndex = this.observers.findIndex(obs => {
// ?       return observer === obs;
// ?     });
// ?     if (removeIndex !== -1) {
// ?       this.observers = this.observers.slice(removeIndex, 1);
// ?     }
// ?   }

// &    Loops over this.observers and calls the update method on each observer.
// ~    The state object will call this method everytime it is updated.
// ?   notify(data)
// ?   {
// ?     if (this.observers.length > 0) {
// ?       this.observers.forEach(observer => observer.update(data));
// ?     }
// ?   }
// ? }

// ! Observer Pattern Example :- 

class EventObserver
{
  constructor() {
    this.observers = [];
  }

  subscribe(fn)
  {
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  }

  unsubscribe(fn)
  {
    // & Filter out from the list whatever matches the callback function. 
    // ~ If there is no match, the callback gets to stay on the list.The filter returns a new list and reassigns the list of observers.
    
    this.observers = this.observers.filter(function (item)
    { 
      if (item !== fn) {
        return item;
      }
    });
    
    console.log(`You are now unsubscribed from ${fn.name}`);
  }

  fire()
  {
    this.observers.forEach( function (item) {
      item.call();
    });
  }
}

const click = new EventObserver();

// ! Event Listeners -

document.querySelector('.sub-ms').addEventListener('click', () => {
  click.subscribe(getCurMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', () => {
  click.unsubscribe(getCurMilliseconds);
});

document.querySelector('.sub-s').addEventListener('click', () => {
  click.subscribe(getCurSeconds);
});

document.querySelector('.unsub-s').addEventListener('click', () => {
  click.unsubscribe(getCurSeconds);
});

document.querySelector('.fire').addEventListener('click', () => {
  click.fire();
});

// ! Click Handler -

const getCurMilliseconds = () => {
  console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
}

const getCurSeconds = () => {
  console.log(`Current Seconds: ${new Date().getSeconds()}`);
}