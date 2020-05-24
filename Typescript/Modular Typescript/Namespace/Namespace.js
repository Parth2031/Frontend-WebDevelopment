"use strict";

// TODO:: Working of a Namespace File :-
// ? We can also assign Namespace Keyword with Same Name in Different Files ->

var Maths;
(function (Maths) {
    
    // * "PI" is a value defined only within this namespace and cannot be accessed outside this scope :
    
    const PI = 3.14;
    function calculateCircumference(diameter) {
        return diameter * PI;
    }
    Maths.calculateCircumference = calculateCircumference;
    
    // ! Nested Namespace :->
    
    let Area;
    (function (Area) {
        function circleArea(radius) {
            return PI * radius * radius;
        }
        Area.circleArea = circleArea;
    })(Area = Maths.Area || (Maths.Area = {}));
})(Maths || (Maths = {}));

// TODO:: Working of a Namespace File :-
// ? We can also assign Namespace Keyword with Same Name in Different Files ->

var Maths;
(function (Maths) {
    function calculateRectangle(length, breadth) {
        return length * breadth;
    }
    Maths.calculateRectangle = calculateRectangle;
})(Maths || (Maths = {}));

// TODO:: Examples of Typescript Namespace & Modules :-
// ! Syntax for Importing a Namespace File :->

/// <reference path="Circle.ts" />
/// <reference path="Rectangle.ts" />

// ! Importing Nested Namespace Files Syntax :->

const CircleArea = Maths.Area;

// ! Accessing Namespace Files ->

console.log(Maths.calculateCircumference(8));
console.log(Maths.calculateRectangle(4, 5));
console.log(CircleArea.circleArea(3));
const PI = 3;
console.log(PI);

// ! Namespace in a Single File -->

var Maths;
(function (Maths) {
    const square = 2;
    function multiply(value) {
        return value * square;
    }
    Maths.multiply = multiply;
})(Maths || (Maths = {}));
console.log(Maths.multiply(2));
