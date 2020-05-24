// TODO:: Examples of Typescript Namespace & Modules :-

// ! Syntax for Importing a Namespace File :->

/// <reference path="Circle.ts" />
/// <reference path="Rectangle.ts" />

// ! Importing Nested Namespace Files Syntax :->

const CircleArea = Maths.Area;

// ! Accessing Namespace Files ->

console.log(Maths.calculateCircumference(8));
console.log(Maths.calculateRectangle(4, 5));

// * Accessing IMpoted Nested Namespace File :

console.log(CircleArea.circleArea(3));

const PI = 3;
console.log(PI);

// ! Namespace in a Single File -->

namespace Maths
{
  const square = 2;

  export function multiply(value: number): number {
    return value * square;
  }
}

console.log(Maths.multiply(2));