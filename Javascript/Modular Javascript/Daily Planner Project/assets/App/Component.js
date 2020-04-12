// TODO:: Types of "export" keyword :-
/*
? Named Exports(Zero or more exports per module)
? Default Exports(One per module) - 
!                                   "default keyword" is used.         
*/

// * This function is used as an example if a different function/class is exported without "default" keyword. 

export function doSomething() { };

// TODO:: "default" keyword is used only in "export" and is used when we want send one module per file.
// ? NOTE - When we use "default" keyword, we don't require name of any class/function/variable,etc.

export default class
{
  constructor(hostElementId, insertBefore = false)
  {
    if (hostElementId) 
      this.hostElement = document.getElementById(hostElementId);
    else 
      this.hostElement = document.body;
  
    this.insertBefore = insertBefore;
  }

  detach()
  {
    if (this.element)
    {
      this.element.remove();
      // this.element.parentElement.removeChild(this.element);
    }
  }

  attach() {
    this.hostElement.insertAdjacentElement(this.insertBefore ? 'afterbegin' : 'beforeend',this.element);
  }
}