// TODO:: Typescript Modules is similar ( Same ) to Javascript ES6 Modules :-
// ? But it just requires, Module Loader which is SysemJS ( A Third Party Library ).

import * as Circle from "./Maths/Circle";
import area from "./Maths/Rectangles";

console.log(Circle.PI);
console.log(Circle.calculateCirumcumference(10));
console.log(area(20, 50));

// // --------------------------------------------------------------------------------------------------------------------------------

// TODO:: Working of a Third Party Library :-

import "lodash";

const customers = ['Max', 'Manuel', 'Anna'];
const activeCustomers = ['Max', 'Manuel'];

const inactiveCustomers = _.difference(customers, activeCustomers);

console.log("Difference of Array: ");
console.log(inactiveCustomers);