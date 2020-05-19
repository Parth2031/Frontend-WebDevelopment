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

? tsc : It compiles all Typescript files to Javascript files.
? tsc --init : It is used to set the congiguration of Typescript by getting tsconfig.json.
*/

// // ----------------------------------------------------------------------------------------------------------------------------------

// TODO:: Understanding Typescript Data Types ->

/*
* NOTE :- In Typescript, when we create a variable using any var,let,const. 
*         When we intially set a value to that variable which Typescript set's itself according to it but not at only defining stage. 
*         It means when we create a variable with number value then, we can't assign it with a string/boolean values and vice versa.

! Example of a variable defined with intially a String Value :

? let myName = 'Parth';
? myName = 28;              -->>>   So here, it is invalid to set a string defined value to be changed by number/boolean value.
?                                   So, it is incorrect

! Assigning Types Explicitly -

* It means if we just define a variable without giving any value to it, it set's itself type as "any" means either number,string,etc.
* So, to define a type as explicitly.
! Syntax :- variable variable_name: type;
* Since, by default it is set as variable_name: any;

? Example of a variable defined with explicitly by User :
?                                                          let myName: string;
?                                                          myName = 'Parth';

TODO:: ANY Data Type :->

* NOTE :- "Any" Data Type is used to set the Data Type similar to Javascript Behaviour as we can change it's data type anytime.

! Syntax :- variable variable_name: any = value;        
!           where, value can be number,string,boolean,object,etc. 

? Example : let car: any = "BMW";
?           console.log(car);
?           car = { brand: "BMW", series: 3 };
?           console.log(car);

TODO:: Similary, for Array Data Types ->>

* NOTE :- We can define array of string[],number[],etc at once by default. So, to change the Array Data Types explicitly.

! Example of Array set as Explicitly and not defined as Intially :

? let hobbies: any[] = ["Cooking","Dancing"];            
? hobbies = [100];                                    // ! Without "any[]", it would have been incorrect type assigning.
? console.log(hobbies);

* NOTE :- But, when we set Array Dta Type as "any[]", it means that the last value type is the Set Data Type of that Array.


TODO:: Tuples (Type of Array) Data Type :->

! Tuples is a mixed Array Data Type means that an Array containing various Data Types at a single time.
* Syntax :- variable array_name: [data types in a set order,..] = [values according to specified data types,..];

? Example : let address: [string, number] = ["Patparganj",85];


TODO:: Enums Data Type :->

* Enums allow us to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. 
* TypeScript provides both numeric and string-based enums.

! Syntax :- enum variable_name 
!           {
!             value_1,       --> 0             -->>   We can also set values to given values and by default it starts with 0.
!             value_2 = 100,  --> 100    
!             value_3       --> 101             -->>   All of the following members are auto-incremented from that point on.
!           }

!        let another_variable_name: enum_variable_name = enum_variable_name.value_1;

* NOTE :-  In a string enum, each member has to be constant-initialized with a string literal, or with another string enum member.

? Example : enum Direction
?           {
?             Up = "UP",
?             Down = "DOWN",
?             Left = "LEFT",
?             Right = "RIGHT",
?           }

?           let directions: Direction = Direction.Up;
?           console.log(directions);


TODO:: Union Types :->

* Union Types means setting up multiple types a variable and not setting "any" data type instead.
! Syntax :- variable variable_name: type | type = value;

? Example : let password: number | string = "new"; 
?           password = 31;
?           console.log(password);

TODO:: Check Type :->

* NOTE :- We check the types using "typeof" Operator where, we write data types in double quotes.

? Example : let finalValue = 30;
?           if (typeof finalValue == "number") {
?             console.log("Final Value is a Number");
?           }

TODO:: Null Type :->

* NOTE :- If, we enable strictNullChecks in tsconfig.json then, assigning a variable with data type cannot assign "null" value to it. 

? Example : let canBeNull: number | null = 12;            // ! Now, It is possible to set it as null.
?           canBeNull = null;                   // ! <-- It is incorrect here, due to strictNullChecks: true in tsconfig.
?           let canAlsoBeNull;            // ! In this case, It is possible as the variable is "undefined" and it can be set to null.
?           canAlsoBeNull = null;
?           console.log(canBeNull,canAlsoBeNull);
*/

// // ----------------------------------------------------------------------------------------------------------------------------------

// TODO:: Understanding Typescript Functions ->

/*
* NOTE :- We can also assign data types to Functions and it's Arguments like number,string,etc. 
*         But, we also assign special types like "void". As "void" doesn't allow functions to return any value.

* Order of types is very important in function.

! Syntax :- function function_name(argument_name: type,..) : type {
!             return ....;
!           }

? Example : function warnUser(): void {
?             console.log("This is my Warning Message");
?            }

TODO:: Function Types ->>

* So, in this basically, we are setting a function declaration and not actually writing function definition.
! Syntax :- function function_name: (argument_name: type,argument_name: type) => type;

? Example : function multiply(valueOne: number, valueTwo: number) {
?             return valueOne * valueTwo;
?           }
?           let myMultiply: (a: number, b: number) => number;                // ! <-- Function Declaration
?           myMultiply = multiply;
?           console.log(myMultiply(4, 5));

?           myMultiply = warnUser;                                 // ! <-- So, It is incorrect due to Function Declaration
?           myMultiply(); 

TODO:: Never Type :-

* The never type represents the type of values that never occur.
! It is usually used for throwing error's only.

? Example : function neverReturn(): never {
?             throw new Error("An Error!");
?           }
*/

// // ----------------------------------------------------------------------------------------------------------------------------------

// TODO:: Understanding Typescript Objects ->

/*
* NOTE :- In Objects, Object type is not important but it's key name & types are important. So, we cannot change key_name everytime.

! Syntax :- variable object_name: {key_name: type, key_name: type} 
!           {
!             key_name: value,
!             ..... 
!           }

? Example : let userData: { name: string, age: number } = 
?           {
?             name: "Parth",
?             age: 20
?           };
?           console.log(userData); 

TODO:: Understanding Type Alias :-

* NOTE :- Type Alias is basically storing a object declaration in a variable so that it can be reused multiple times.
*         "type" is the Keyword Here.
! Syntax :- type variable_name = { key_name: type, key_name: type};

? Example : type complexDeclaration = { data: number[], output: (all: boolean) => number[] };

! Complex Object Working ->>

? Example : let complex: complexDeclaration = 
?           {
?             data: [100, 20, 50],
?             output:
?                     function (all: boolean) {
?                       return this.data;
?                     }
?           }
?           console.log(complex.output(true));
*/