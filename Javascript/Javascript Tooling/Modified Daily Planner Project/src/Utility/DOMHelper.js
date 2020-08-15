console.log('DOM Helper executing!');

export class DOMHelper
{
  static clearEventListeners(element)
  {
    // ^ Node.cloneNode(true) - It returns a duplicate of the node on which this method was called.
    const clonedElement = element.cloneNode(true);

    // ^ ChildNode.replaceWith() - This method replaces this ChildNode in the children list of its parent with a set of Node or DOMString objects.
    element.replaceWith(clonedElement);

    return clonedElement;
  }

  static moveElement(elementId, newDestinationSelector)
  {
    const element = document.getElementById(elementId);
    const destinationElement = document.querySelector(newDestinationSelector);
  
    destinationElement.append(element);

    // * The Element interface's scrollIntoView() method scrolls the element's parent container such that the element ....
    // * .... on which scrollIntoView() is called is visible to the user.
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// ? In this, the functions are exported and not the class so as to import them at when they are only needed in the Project.

// export function clearEventListeners(element)
// {
//   const clonedElement = element.cloneNode(true);
//   element.replaceWith(clonedElement);

//   return clonedElement;
// }

// export function moveElement(elementId, newDestinationSelector)
// {
//   const element = document.getElementById(elementId);
//   const destinationElement = document.querySelector(newDestinationSelector);
//   destinationElement.append(element);

//   element.scrollIntoView({ behavior: 'smooth' });
// }
