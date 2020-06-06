"use strict";
// TODO:: Examples of Typescript Interfaces :-
;
var person = {
    firstName: "Parth",
    age: 20,
    hobbies: ["Cooking", "Sports"],
    greeting: function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
};
function greet(person) {
    console.log("Hello " + person.firstName);
    console.log(person.hobbies[0]);
}
function changeName(person) {
    person.firstName = "Mrinal";
}
// greet({ firstName: "Parth"});
greet(person);
person.greeting("Rastogi");
changeName(person);
greet(person);
// ! Class with Interfaces -->
var Person = /** @class */ (function () {
    function Person() {
        this.firstName = "Parth";
        this.middleName = "Amit";
    }
    Person.prototype.greeting = function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    };
    return Person;
}());
var newPerson = new Person();
newPerson.firstName = "Mrinal";
newPerson.greeting("Kothari");
var calculateDoubleFunction;
calculateDoubleFunction = function (value_1, value_2) {
    return (value_1 + value_2) * 2;
};
console.log(calculateDoubleFunction(10, 20));
var oldPerson = {
    age: 20,
    firstName: "Shrey",
    greeting: function (lastName) {
        console.log("Hello World");
    }
};
console.log(oldPerson);
