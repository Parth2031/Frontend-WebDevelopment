// TODO:: Understanding Typescript :-

/*
* Typescript - It is a typed superset of JavaScript that compiles to plain JavaScript.

! Typescript Extra Features over Javascript -

? Strongly Typed
? Generics 
? Interfaces
?      .... and many more

* NOTE :- Browser can't run Typescript so, we need to convert Typescript to Javascript. So, we load Javascript file and not Typescript. 

TODO:: Terminal Commands for executing Typescript ->>

? tsc : It compiles Typescript to Javascript.
? tsc --init : It is used to set the congiguration of Typescript by getting tsconfig.json.
*/

// // ----------------------------------------------------------------------------------------------------------------------------------

// TODO:: Understanding Typescript Data Types ->

/*
* NOTE :- In Typescript, when we create a variable using any var,let,const. 
*         When we intially set a value to that variable which Typescript set's itself according to it and not always. 
*         It means when we create a variable with number value then, we can't assign it with a string/boolean values and vice versa.

! Example of a variable defined with intially a String Value :

? let myName = 'Parth';
? myName = 28;              -->>>   So here, it is invalid to set a string defined value to be changed by number/boolean value.
?                                   So, it is incorrect

! Assigning Types Explicitly -

* It means if we just define a variable without giving any value to it, it set's itself type as "any" means either number,string,etc.
* So, to define a type as explicitly.
? Since, by default it is set as variable_name: any;
TODO:: Syntax :- variable variable_name: type;

! Example of a variable defined with explicitly by User :

? let myName: string;
? myName = 'Parth';


TODO:: Similary, for Array Data Types ->>

* NOTE :- We can define array of string,number,etc at once by default. So, to change the Array Data Types explicitly.

! Example of Array set as Explicitly and not defined as Intially :

? let hobbies: any[] = ["Cooking","Dancing"];
? hobbies = [100];

* NOTE :- But, when we set Array Dta Type as "any[]", it means that the last value type is the Set Data Type of that Array.


TODO:: Tuples (Type of Array) Data Type :->

! Tuples is a mixed Array Data Type means that an Array containing various Data Types at a single time.
* Syntax :- variable variable_name: [data types in a set order,..] = [values according to specified data types,..];

? Example : let address: [string, number] = ["Patparganj",85];


TODO:: Enums Data Type :->

! Enums allow us to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. 
! TypeScript provides both numeric and string-based enums.

TODO: Syntax :- enum variable_name 
TODO:           {
TODO:             value_1,       --> 0                  // ? We can also set values to given values and by default it starts with 0.
TODO:             value_2 = 100,  --> 100    
TODO:             value_3       --> 101                // ? All of the following members are auto-incremented from that point on.
TODO:           }

* NOTE :-  In a string enum, each member has to be constant-initialized with a string literal, or with another string enum member.

? Example : enum Direction
?           {
?             Up = "UP",
?             Down = "DOWN",
?             Left = "LEFT",
?             Right = "RIGHT",
?           }
*/

// // ----------------------------------------------------------------------------------------------------------------------------------


