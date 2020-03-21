// TODO:: Regular Expression is defined by /.../ where, "." describes pattern of characters means they are characters,strings,etc are present.
// TODO:: Literal Charcters are also known as String.

// ! Regular Expresion (re) -
let re;

// ! Defining a Regular Expression using Literal Characters.
// re = /hello/;

// ! Defining a Regular Expression using Literal Characters making the characters, i = Case Insensitive.
re = /hello/i; 

// ! Defining a Regular Expression using Literal Characters, g = Global Search.
// re = /hello/g; 

// console.log(re);
// console.log(re.source);                        // ? .source is used to represent the main content of Regular Expression.

// TODO:: Regular Expression Methods :-

// ? exec() -  
// ! It checks the Regular Expression if it's method content part is present in "re" if true then it Return's result in an array or else null.

// const result = re.exec('hello world');
// console.log(result);

// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// ? test() - 
// ! It checks the Regular Expression if it's method content part is present in "re" then it Returns true or else false.

// const result = re.test('Hello');
// console.log(result);

// ? match() - 
// ! Similar to exec() but it frist takes input and then matches it with "re".

// const str = 'Hello There';
// const result = str.match(re);
// console.log(result);

// ? search() - 
// ! it checks the "re" and Returns index of the first match if not found then returns - 1.

// const str = 'Brad Hello There';
// const result = str.search(re);
// console.log(result);

// ? replace() - 
// ! Return new string with some or all matches of a pattern.

const str = 'Hello There';
const newStr = str.replace(re, 'Hi');
console.log(newStr);

