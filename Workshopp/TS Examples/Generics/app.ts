// TODO:: Working of Typescript Generics :-

// ! Simple Generics -->

function echo(data: any) {
  return data;
}

console.log(echo("Parth"));
console.log(echo(20));
console.log(echo({ name: "Parth", age: 20 }));

// ! Better Generic -->

function betterGeneric <T> (data: T) {
  return data;
}

console.log(betterGeneric("Parth"));
console.log(betterGeneric <number> (20));
console.log(betterGeneric({ name: "Parth", age: 20 }));

// ! Generic Types -->

const generic: <T> (data: T) => T = betterGeneric;
console.log(generic<string>("Generic Types"));

// ! Built-In Generics -->

const testResults: Array<number> = [1, 2, 3, 4];
testResults.push(5);
// testResults.push("6");

console.log(testResults);

// ! Array Generics -->

function printAll <T> (print: T[]) {
  print.forEach(element => console.log(element));
} 

printAll<string>(["Apple", "Banana"]);

// ! Generic Classes -->

class SimpleMaths <T extends number | string, U extends number | string> 
{
  baseValue: T;
  multiplyValue: U;
  calculate(): number {
    return +this.baseValue * +this.multiplyValue;
  }
}

const simpleMaths = new SimpleMaths<number,string>();
simpleMaths.baseValue = 10;
simpleMaths.multiplyValue = "20";
console.log(simpleMaths.calculate());