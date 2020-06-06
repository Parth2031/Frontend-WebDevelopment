// TODO:: Examples of Typescript Interfaces :-

// ! Interface -->

interface namedPerson
{
  firstName: string;
  age?: number
  [notKnownKeyName: string]: any;
  greeting(lastName: string): void;
};

const person: namedPerson =
{
  firstName: "Parth",
  age: 20,
  hobbies: ["Cooking", "Sports"],
  greeting(lastName: string) {
    console.log(`Hi, I am ${this.firstName} ${lastName}`);
  }
};

function greet(person: namedPerson)
{
  console.log(`Hello ${person.firstName}`);
  console.log(person.hobbies[0]);
}

function changeName(person: namedPerson) {
  person.firstName = "Mrinal";
}

// greet({ firstName: "Parth"});
greet(person);
person.greeting("Rastogi");
changeName(person);
greet(person);

// ! Class with Interfaces -->

class Person implements namedPerson 
{
  firstName: string = "Parth";
  middleName: string = "Amit";
  greeting(lastName: string) {
    console.log(`Hi, I am ${this.firstName} ${lastName}`);
  } 
}

const newPerson = new Person();
newPerson.firstName = "Mrinal";
newPerson.greeting("Kothari");

// ! Function Types -->

interface doubleValueFunction {
  (number_1: number, number_2: number): number;
}

let calculateDoubleFunction: doubleValueFunction;

calculateDoubleFunction = (value_1: number, value_2: number) => {
  return (value_1 + value_2) * 2;
}

console.log(calculateDoubleFunction(10, 20));

// ! Interface Inheritance -->

interface agedPerson extends namedPerson {
  age: number;
}

const oldPerson: agedPerson =
{
  age: 20,
  firstName: "Shrey",
  greeting(lastName: string) {
    console.log("Hello World");
  }
}

console.log(oldPerson);