"use strict";
// TODO:: Examples of Typescript Decorators :-
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// ! Decorators -->
function decorate(constructorFn) {
    console.log(constructorFn);
}
let Person = /** @class */ (() => {
    let Person = class Person {
        constructor() {
            console.log("Hi");
        }
    };
    Person = __decorate([
        decorate
    ], Person);
    return Person;
})();
// ! Decorator Factory -->
function decorating(value) {
    return value ? decorate : null;
}
let Human = /** @class */ (() => {
    let Human = class Human {
    };
    Human = __decorate([
        decorating(true)
    ], Human);
    return Human;
})();
// ! Advanced Decorator -->
function printable(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
}
let Plant = /** @class */ (() => {
    let Plant = class Plant {
        constructor() {
            this.name = "Green Plants";
        }
    };
    Plant = __decorate([
        decorating(false),
        printable
    ], Plant);
    return Plant;
})();
const plant = new Plant();
plant.print();
// ! Method Decorator -->
function editable(value) {
    return function (target, propNmae, descriptor) {
        descriptor.writable = value;
    };
}
function overWritable(value) {
    return function (target, propName) {
        const newDescriptor = {
            writable: value
        };
        return newDescriptor;
    };
}
let Project = /** @class */ (() => {
    class Project {
        constructor(name) {
            this.projectname = name;
        }
        calcBudget() {
            console.log(1000);
        }
    }
    __decorate([
        overWritable(true)
    ], Project.prototype, "projectname", void 0);
    __decorate([
        editable(false)
    ], Project.prototype, "calcBudget", null);
    return Project;
})();
const project = new Project("Super Project");
project.calcBudget();
console.log(project);
// ! Parameter Decorators -->
function printInfo(target, methodName, paramIndex) {
    console.log("Target: ", target);
    console.log("Method Name: ", methodName);
    console.log("Parameter Index: ", paramIndex);
}
let Course = /** @class */ (() => {
    class Course {
        constructor(name) {
            this.name = name;
        }
        printStudentNumbers(mode, printAll) {
            if (printAll)
                console.log(100);
            else
                console.log(200);
        }
    }
    __decorate([
        __param(1, printInfo)
    ], Course.prototype, "printStudentNumbers", null);
    return Course;
})();
const course = new Course("Maths");
course.printStudentNumbers("Anything", true);
course.printStudentNumbers("Anything", false);
