// TODO:: A Module can be considered as similar to a Singleton Class in an object oriented language.
// ? In a Module, all the variables defined are visible only in the module.
// & Methods in a module have scope and access to the shared private data and private methods.Thus implementing a closure.
// ~ The methods defined in a JavaScript Module are also known as Privileged methods.

/* 
  Essentially the module pattern is a combination of several JavaScript design patterns:
       * Namespaces
       * Immediate functions
       * Private and public methods
*/

// ! An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
// ? IIFE is a design pattern which is also known as a Self - Executing Anonymous Function and contains two major parts:

/*
  The first is the anonymous function with lexical scope enclosed within the Grouping Operator().
  This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
  The second part creates the immediately invoked function expression() through which the JavaScript engine will directly interpret the function.
*/

// ^ IIFE Syntax :-

// ? (function ()
// ? {
// ?   Here, we Declare Private Variables and Functions.
// *                  Statements ..
// ?   return {
// ?      Here, we Declare Public Variables and Functions.
// *                   Statements..    
// ?   }
// ? })();


// & STANDARD MODULE PATTERN Example :-

const UICtrl = ( function ()
{
  let text = 'Design Pattern:';

  const changeText = () =>
  {
    const element = document.querySelector('h1');
    element.textContent = text;
  }

  return {
    callChangeText: () =>
    {
      changeText();
      // console.log(text);
    }
  }
})();

UICtrl.callChangeText();
// UICtrl.changeText();          // ! It is not valid as it is part of Private Member and cannot be directly accessible in Global Scope.

// console.log(UICtrl.text);      // ~ It is undefined as it is showing that Private member is not defined for Global Scope.

// & REVEALING MODULE PATTERN Example :-

const ItemCtrl = ( function ()
{
  let data = [];

  function add(item)
  {
    data.push(item);
    console.log('Item Added....');
  }

  function get(id)
  {
    return data.find( item => {
      return item.id === id;
    });
  }

  return {
    add: add,
    // get: get   // * If we comment this out, it becomes a Private Member which cannot be called in Global Scope else it is accessible.
  }
})();

ItemCtrl.add({id: 1, name: 'John'});
ItemCtrl.add({id: 2, name: 'Mark'});
console.log(ItemCtrl.get(2));