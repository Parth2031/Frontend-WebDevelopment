"use strict";
// TODO:: Typescript Modules is similar ( Same ) to Javascript ES6 Modules :-
// ? But it just requires, Module Loader which is SysemJS ( A Third Party Library ).
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Circle = __importStar(require("./Maths/Circle"));
const Rectangles_1 = __importDefault(require("./Maths/Rectangles"));
console.log(Circle.PI);
console.log(Circle.calculateCirumcumference(10));
console.log(Rectangles_1.default(20, 50));
// // --------------------------------------------------------------------------------------------------------------------------------
// TODO:: Working of a Third Party Library :-
require("lodash");
const lodash_1 = __importDefault(require("lodash"));
const customers = ['Max', 'Manuel', 'Anna'];
const activeCustomers = ['Max', 'Manuel'];
const inactiveCustomers = lodash_1.default.difference(customers, activeCustomers);
console.log("Difference of Array: ");
console.log(inactiveCustomers);
