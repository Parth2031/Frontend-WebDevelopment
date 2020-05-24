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
