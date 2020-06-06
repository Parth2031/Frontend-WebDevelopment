"use strict";
class Person {
    constructor(name, userName) {
        this.userName = userName;
        this.age = 20;
        this.gender = "Male";
        this.name = name;
        // this.gender = gender;
    }
    printAge_Gender() {
        console.log(this.age);
        this.setGender("Female");
    }
    setGender(gender) {
        this.gender = gender;
        console.log(gender);
    }
}
;
const person = new Person("Parth", "Mrinal");
console.log(person.name, person.userName);
person.printAge_Gender();
// person.setGender("Female");
// ! Inheritance -->
class Boy extends Person {
    constructor(userName, age) {
        super("Parth", userName);
        this.age = age;
    }
}
const boy = new Boy("Utkarsh", 25);
console.log(boy);
let Circle = /** @class */ (() => {
    class Circle {
        static calculateCircumference(diameter) {
            return this.PI * diameter;
        }
    }
    Circle.PI = 3.14;
    return Circle;
})();
console.log(2 * Circle.PI);
console.log(Circle.calculateCircumference(8));
// ! Getters & Setters -->
class Plant {
    constructor() {
        this._species = "Default";
    }
    get species() {
        return this._species;
    }
    set species(value) {
        if (value.length > 4)
            this._species = value;
        else
            this._species = "No Change";
    }
}
const plant = new Plant();
// console.log(plant.species);
plant.species = "Herb";
// console.log(plant.species);
plant.species = "Parasite";
// console.log(plant.species);
// ! Abstract Classes -->
class Project {
    constructor() {
        this.projectName = "Machine Learing";
        this.budget = 2000;
    }
    calcBudget() {
        return this.budget * 2;
    }
}
class MainProject extends Project {
    changeName(name) {
        this.projectName = name;
    }
}
const project = new MainProject();
console.log(project);
project.changeName("Web Development");
console.log(project);
// ! Singleton Classes -->
class OnlyOne {
    constructor(name) {
        this.name = name;
    }
    static getInstance() {
        if (!OnlyOne.instance)
            OnlyOne.instance = new OnlyOne('Only One Time Creation of Class Constructor is Possible');
        return OnlyOne.instance;
    }
}
// const wrong = new OnlyOne('Only One');
const right = OnlyOne.getInstance();
console.log(right.name);
right.name = "But We can still Update the One time created Constructor Value";
console.log(right.name);
// ! Readonly Properties -->
class ReadOnly {
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }
    static getInstance() {
        if (!ReadOnly.instance)
            ReadOnly.instance = new ReadOnly('Working on Readonly Property:', 20);
        return ReadOnly.instance;
    }
}
const correct = ReadOnly.getInstance();
console.log(correct.name, correct.age);
// correct.name = "But We can still Update the One time created Constructor Value";
// console.log(correct.name);
