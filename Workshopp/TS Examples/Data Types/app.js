"use strict";
// TODO;; Examples of Typescript Data Types :-
// ! String -->
let myName = 'Parth';
// myName = 20;   
// console.log(myName); 
// ! Number -->
let myAge = 20.5;
// let myAge = "20";
// console.log(myAge);
// ! Boolean -->
let check = true;
// check = 1; 
// console.log(check);
// ! Array -->
let hobbies = ["Cooking", "Dancing"];
hobbies = [100];
// console.log(hobbies);
let work = ["Employee", "Staff"];
// console.log(work);
// ! Tuples -->
let address = ["work", 100];
// console.log(address);
// ! Enum -->
var Color;
(function (Color) {
    Color[Color["Green"] = 0] = "Green";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Red"] = 2] = "Red";
})(Color || (Color = {}));
let myColor = Color.Blue;
// console.log(myColor);
// ! Any -->
let car = "BMW";
// console.log(car);
car = { brand: "BMW", series: 3 };
// console.log(car);
// ! Functions -->
function returnMyName() {
    return myName;
}
// console.log(returnMyName());
function warnUser() {
    // console.log("This is my warning message");
}
warnUser();
function multiply(one, two) {
    return one * two;
}
// console.log(multiply(2, 3));
let myMultiply;
// myMultiply = warnUser;
// myMultiply();
myMultiply = multiply;
// console.log(myMultiply(4, 5));
// ! Object -->
let userData = {
    name: "Parth",
    age: 20
};
let complex = {
    data: [100, 20, 50],
    output: function (all) {
        return this.data;
    }
};
// console.log(complex);
// console.log(complex.output(true));
// ! Union -->
let password = "new";
password = 31;
// console.log(password);
// ! Check Types -->
let finalValue = 30;
if (typeof finalValue == "string") {
    console.log("Final Value is a Number");
}
// ! Never -->
function neverReturn() {
    throw new Error("An Error!");
}
// ! Nullable -->
let canBeNull = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
let bankAccount = {
    money: 2000,
    deposit(val) {
        this.money += val;
    }
};
let myself = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
// ! Rest & Spread Operators -->>
const numbers = [100, 67, 89, 34];
console.log(Math.max(33, 66, 45, -4));
console.log(Math.max(...numbers));
function makeArray(...args) {
    return args;
}
console.log(makeArray(1, 2, 5));
// ! Object Destructuring -->>
const employee = {
    userName: "Parth",
    age: 20
};
const { userName: Name, age: Current_Age } = employee;
console.log(Name, Current_Age);
