// TODO:: Understandinbg Symbol :- 

// ? Symbol is a primitive value which is called using Symbol() and it is not a Built - In Object: -
// ! It holds unique value for each Symbol and no symbol are equal. 
// * It is majorly used by developers at developing stage of libraries,any project,etc and not accessible directly by user.

const sym1 = Symbol();
const sym2 = Symbol('NameofSymbol');             // ! <-- In this, Name of Symbol is used as for giving name to symbols.

// console.log(sym1);
// console.log(typeof sym2);

const user =
{
  // id: 'p1',
  [sym2]: 'p1',
  name: 'Max',
  age: 30,
  [Symbol.toStringTag]: 'User'                 
};

user[sym2] = 'p3';

user.id = 'p2';                                      // ! <-- This should not be possible!

// console.log(user[Symbol('sym2')]);
console.log(Symbol('sym2') === Symbol('sym2'));
console.log(user.toString());

// TODO: Symbol Built-In Properties :-

/*
? Symbol.toStringTag : It is used to give name to String Tags.
? Symbol.iterator : It is used to make objects/iterator/generator iterable using for...of loop and also with spread opertor.
*/

const company =
{
  employees: ['Max', 'Manu', 'Anna'],

  // ! Symbol.iterator with a Generator ->>

  [Symbol.iterator]: function* employeeGenerator()
  {
    let currentEmployee = 0;
 
    while (currentEmployee < this.employees.length)
    {
      yield this.employees[currentEmployee];
      currentEmployee++;
    }
  }
};

// for (const employee of company) {
//   console.log(employee);
// }

// console.log([...company]);

// ! Unique Object Keys -

const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};

myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';
myObj.key3 = 'Prop3';
myObj.key4 = 'Prop4';

// console.log(myObj[KEY1]);
// console.log(myObj[KEY2]);

// ! NOTE : Symbols are not enumerable in for...in

// for(let i in myObj) {
//   console.log(`${i}: ${myObj[i]}`);
// }

// ! NOTE : Symbols are ignored by JSON.stringify

// console.log(JSON.stringify({ key: 'prop' }));
// console.log(JSON.stringify({[Symbol('sym1')]: 'prop'}));