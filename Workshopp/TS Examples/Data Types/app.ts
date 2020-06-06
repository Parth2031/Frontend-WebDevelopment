// TODO:: Examples of Typescript Data Types :-

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

let hobbies: any[] = ["Cooking", "Dancing"];
hobbies = [100];
// console.log(hobbies);

let work: string[] = ["Employee", "Staff"];
// console.log(work);

// ! Tuples -->

let address: [string, number] = ["work", 100];
// console.log(address);

// ! Enum -->

enum Color {
  Green,
  Blue,
  Red
}

let myColor: Color = Color.Blue;
// console.log(myColor);

// ! Any -->

let car: any = "BMW";
// console.log(car);
car = { brand: "BMW", series: 3 };
// console.log(car);

// ! Functions -->

function returnMyName(): string {
  return myName;
} 
// console.log(returnMyName());

function warnUser(): void {
  // console.log("This is my warning message");
}
warnUser();

function multiply(one: number, two: number) {
  return one * two;
}
// console.log(multiply(2, 3));

let myMultiply: (val1: number, val2: number) => number;
// myMultiply = warnUser;
// myMultiply();
myMultiply = multiply;
// console.log(myMultiply(4, 5));

// ! Object -->

let userData: { name: string, age: number } = {
  name: "Parth",
  age: 20
};
// console.log(userData);

type complexDeclaration = { data: number[], output: (all: boolean) => number[] }; 

let complex: complexDeclaration =
{
  data: [100, 20, 50],
  output:
    function (all: boolean) {
      return this.data;
    }
}
// console.log(complex);
// console.log(complex.output(true));

// ! Union -->

let password: number | string = "new"; 
password = 31;
// console.log(password);

// ! Check Types -->

let finalValue = 30;
if (typeof finalValue == "string") {
  console.log("Final Value is a Number");
}
  
// ! Never -->

function neverReturn(): never {
  throw new Error("An Error!");
}

// ! Nullable -->

let canBeNull: number | null = 12;
canBeNull = null;

let canAlsoBeNull;
canAlsoBeNull = null;
// console.log(canBeNull,canAlsoBeNull);

// ! Practise Excercise -->

type bank = { money: number, deposit: (val: number) => void };

let bankAccount: bank = {
  money: 2000,
  deposit(val) {
    this.money += val;
  }
}

type data = { name: string, bankAccount: bank, hobbies: string[] };

let myself: data = {
  name: "Max",
  bankAccount: bankAccount,
  hobbies: ["Sports","Cooking"]
} 

myself.bankAccount.deposit(3000);
console.log(myself);

// ! Rest & Spread Operators -->>

const numbers = [100, 67, 89, 34];

console.log(Math.max(33, 66, 45, -4));
console.log(Math.max(...numbers));

function makeArray(...args: number[]) {
  return args;
}
console.log(makeArray(1, 2, 5));

// ! Object Destructuring -->>

const employee =
{
  userName: "Parth",
  age: 20
} 

const { userName: Name, age: Current_Age } = employee;
console.log(Name, Current_Age);