"use strict";
// TODO:: Working of a Namespace File :-
// ? We can also assign Namespace Keyword with Same Name in Different Files ->
var Maths;
(function (Maths) {
    function calculateRectangle(length, breadth) {
        return length * breadth;
    }
    Maths.calculateRectangle = calculateRectangle;
})(Maths || (Maths = {}));
