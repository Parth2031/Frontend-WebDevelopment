// TODO:: ES6 Array & Object Destructuring. 

// * Basic Array Working -

let a, b;
[a, b] = [100, 200];

// console.log(a);

// TODO:: Rest pattern allows us to represent an indefinite number of arguments as an array.

// ! Rest Pattern Syntax :-

// ? (...) - These dots are decribed as the remaining arguments in an array,object,etc.
// ? function(a,b,...manyMoreArguments)
// ?              OR
// ? array_name[a,b,...rest];
// ?           OR
// ? object_name{ a, b, ...rest};

// ! Rest Pattern Example :-

[a, b, ...rest] = [100, 200, 300, 400, 500];
// console.log(rest);

({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
({ a, b, ...rest} = { a: 100, b: 200, c: 300, d: 400, e: 500 });

// ! Array Destructuring :-

// const people = ['John', 'Beth', 'Mike'];
// const [person1, person2, person3] = people;

// console.log(person1, person2, person3);

// ? Parse array returned from function :

// function getPeople() {
//   return ['John', 'Beth', 'Mike'];
// }

// let person1, person2, person3;
// [person1, person2, person3] = getPeople();

// console.log(person1, person2, person3);

// ! Object Destructuring :-

const person =
{
  name: 'John Doe',
  age: 32,
  city: 'Miami',
  gender: 'Male',
  sayHello: function(){
    console.log('Hi');
  }
}

// ! Old ES5 :

// const name = person.name,
//       age = person.age,
//       city = person.city;

// ! New ES6 Destructuring :

const { name, age, city, sayHello } = person;

// console.log(name, age, city);
// sayHello();

// ! Making a new Object with the properties of previous defined object :

const anotherObjectAvoidedMethod =
{
  name: name,
  age: age,
  city: city
};

// console.log(anotherObjectAvoidedMethod);

// ! Better Way of making a new Object from previous defined object;

const anotherObject = { name, age, city };

console.log(anotherObject);