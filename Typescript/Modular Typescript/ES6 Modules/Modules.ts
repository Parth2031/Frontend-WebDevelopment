// TODO:: Typescript Modules is similar ( Same ) to Javascript ES6 Modules :-
// ? But it just requires, Module Loader which is SysemJS ( A Third Party Library ).

import * as Circle from "./Maths/Circle";
import area from "./Maths/Rectangles";

console.log(Circle.PI);
console.log(Circle.calculateCirumcumference(10));
console.log(area(20, 50));