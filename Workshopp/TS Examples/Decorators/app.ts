// TODO:: Examples of Typescript Decorators :-

// ! Decorators -->

function decorate(constructorFn: Function) {
  console.log(constructorFn);
}

@decorate
class Person
{
  constructor() {
    console.log("Hi");
  }
}

// ! Decorator Factory -->

function decorating(value: boolean): any {
  return value ? decorate : null;
}

@decorating(true)
class Human {

}

// ! Advanced Decorator -->

function printable(constructorFn: Function)
{
  constructorFn.prototype.print = function () {
    console.log(this);
  } 
}

@decorating(false)
@printable
class Plant {
  name: string = "Green Plants";
}
const plant = new Plant();
(<any>plant).print();

// ! Method Decorator -->

function editable(value: boolean)
{
  return function (target: any, propNmae: string, descriptor: PropertyDescriptor) {
    descriptor.writable = value;
  }
}

function overWritable(value: boolean) 
{
  return function (target: any, propName: string): any
  {
    const newDescriptor: PropertyDescriptor = {
      writable: value
    };
    return newDescriptor;
  }  
}

class Project 
{
  @overWritable(true)
  projectname: string;

  constructor(name: string) {
    this.projectname = name;
  }

  @editable(false)
  calcBudget() {
    console.log(1000);
  }
}

const project = new Project("Super Project");
project.calcBudget();
console.log(project);

// ! Parameter Decorators -->

function printInfo(target: any, methodName: string, paramIndex: number)
{
  console.log("Target: ", target);
  console.log("Method Name: ", methodName);
  console.log("Parameter Index: ", paramIndex);
} 

class Course
{
  name: string;

  constructor(name: string) {
    this.name = name;
  }  

  printStudentNumbers(mode: string, @printInfo printAll: boolean) 
  {
    if (printAll)
      console.log(100);
    else
      console.log(200);
  }
}

const course = new Course("Maths");
course.printStudentNumbers("Anything", true);
course.printStudentNumbers("Anything", false);
