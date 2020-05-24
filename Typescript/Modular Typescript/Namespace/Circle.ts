// TODO:: Working of a Namespace File :-
// ? We can also assign Namespace Keyword with Same Name in Different Files ->

namespace Maths 
{
  // * "PI" is a value defined only within this namespace and cannot be accessed outside this scope : 
  const PI = 3.14;

  export function calculateCircumference(diameter: number): number {
    return diameter * PI;
  }
  
  // ! Nested Namespace :->

  export namespace Area
  {
    export function circleArea(radius: number): number {
      return PI * radius * radius;    
    }
  }
}
