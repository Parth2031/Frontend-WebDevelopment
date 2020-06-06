class Person
{
  name: string;
  protected age: number = 20;
  private gender: string = "Male";

  constructor(name: string, public userName: string) {
    this.name = name;
    // this.gender = gender;
  }

  printAge_Gender()
  {
    console.log(this.age);
    this.setGender("Female");
  }

  protected setGender(gender: string)
  {
    this.gender = gender;
    console.log(gender);
  }
};

const person = new Person("Parth", "Mrinal");
console.log(person.name, person.userName);
person.printAge_Gender();
// person.setGender("Female");

// ! Inheritance -->

class Boy extends Person
{
  constructor(userName: string, age: number)
  {
    super("Parth",userName);
    this.age = age;
  }
}

const boy = new Boy("Utkarsh", 25);
console.log(boy);

class Circle 
{
  static PI: number = 3.14;  
  static calculateCircumference(diameter: number) : number {
    return this.PI * diameter;
  }
}

console.log(2 * Circle.PI);
console.log(Circle.calculateCircumference(8));

// ! Getters & Setters -->

class Plant
{
  private _species: string = "Default";
  
  get species() {
    return this._species;
  }

  set species(value: string)
  {
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

abstract class Project 
{
  projectName: string = "Machine Learing";
  budget: number = 2000;

  abstract changeName(name: string): void;

  calcBudget() {
    return this.budget * 2;
  }
}

class MainProject extends Project
{
  changeName(name: string): void {
    this.projectName = name;
  }
}

const project = new MainProject();
console.log(project);
project.changeName("Web Development");
console.log(project);

// ! Singleton Classes -->

class OnlyOne 
{
  private static instance: OnlyOne;
  private constructor(public name: string) { }
  
  static getInstance()
  {
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

class ReadOnly 
{
  private static instance: ReadOnly;
  public readonly name: string

  private constructor(name: string, public readonly age: number) {
    this.name = name;
  }
  
  static getInstance()
  {
    if (!ReadOnly.instance)
      ReadOnly.instance = new ReadOnly('Working on Readonly Property:',1);
    
    return ReadOnly.instance;
  }
}

const correct = ReadOnly.getInstance();
console.log(correct.name,correct.age);
// correct.name = "But We can still Update the One time created Constructor Value";
// console.log(correct.name);