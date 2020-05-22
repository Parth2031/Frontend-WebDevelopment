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
! Syntax :- variable variable_name: data_type;
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

* NOTE :- But, when we set Array Data Type as "any[]", it means that the last value type is the Set Data Type of that Array.


TODO:: Tuples (Type of Array) Data Type :->

! Tuples is a mixed Array Data Type means that an Array containing various Data Types at a single time.
* Syntax :- variable array_name: [data types in a set order,..] = [values according to specified data types,..];

? Example : let address: [string, number] = ["Patparganj",85];


TODO:: Enum Data Type :->

* Enum allow us to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. 
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
! Syntax :- variable variable_name: data_type | data_type = value;

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

! Syntax :- function function_name(argument_name: data_type,..) : data_type {
!             return ....;
!           }

? Example : function warnUser(): void {
?             console.log("This is my Warning Message");
?            }

TODO:: Function Types ->>

* So, in this basically, we are setting a function declaration and not actually writing function definition.
! Syntax :- function function_name: (argument_name: data_type,argument_name: data_type) => data_type;

? Example : function multiply(valueOne: number, valueTwo: number) {
?             return valueOne * valueTwo;
?           }
? 
?           let myMultiply: (a: number, b: number) => number;                // ! <-- Function Declaration
?           myMultiply = multiply;
?           console.log(myMultiply(4, 5));

?           myMultiply = warnUser;                                 // ! <-- So, It is incorrect due to Function Declaration
?           myMultiply(); 

TODO:: Never Type :->

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

! Syntax :- variable object_name: {key_name: data_type, key_name: data_type} 
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

TODO:: Understanding Type Alias :->

* NOTE :- Type Alias is basically storing a object declaration in a variable so that it can be reused multiple times.
*         "type" is the Keyword Here.
! Syntax :- type variable_name = { key_name: data_type, key_name: data_type};

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

// // ----------------------------------------------------------------------------------------------------------------------------------

// * NOTE :- Typescript has almost all ES6 Javascript functionalities in it and 
// *         the non-available features are mentioned in ES6 Compatible table. But in majority, all main features are compatible.

// // ----------------------------------------------------------------------------------------------------------------------------------

// TODO:: Typescript Classes ->

/*
* NOTE :- Classes in Typescript almost works similar to C++,Java,etc. 
*         As it also Inheritance Working with Access Specifiers like public,private and protected which is not present in Javascript. 
*         It is by default set to "public" and we define property types to Data Members { which we don't have in Javascript ). 

! Syntax :- class Class_Name 
!           {
!             access_specifier data_member: data_type;
!             constructor(argument: data_type, access_specifier data_member: data_type) { ..... }
!             access_specifier function_name() { ...... }
!           };

* NOTE :- When, we use Access Specifiers on Data Members, we need to intialize them with some value or call from constructor is necessary. 
*               Access Specifier like private & protected only needs this.

? Example : class Person
?           {
?             name: string;
?             protected age: number = 20;
?             private gender: string = "Male";                 // ! <-- Intialized Default value and not used Contructor() here.
?           
! In this, "userName" argument is defined as "public" means that it becomes a Data Member of Class so it can also be accessed by Other Class.
?             constructor(name: string, public userName: string) {   
?               this.name = name; 
?             }
?           
?             printAge_Gender()
?             {
?               console.log(this.age);
?               this.setGender("Female");
?             }
?           
?             protected setGender(gender: string)
?             {
?               this.gender = gender;
?               console.log(gender);
?             }
?           };
?           
?           const person = new Person("Parth", "Mrinal");
?           console.log(person.name, person.userName);
?           person.printAge_Gender();

TODO:: Inheritance Working :-> 

* NOTE :- It is Completely Similar to ES6 Javascript Classes Inheritance Functionality with static,super() & extends keywords & functions.

? Example : class Boy extends Person
?           {
?             static              
?  
?             constructor(userName: string, age: number)
?             {
?               super("Parth",userName);
?               this.age = age;
?             }
?           };
?           
?           const boy = new Boy("Utkarsh", 25);
?           console.log(boy);


?           class Circle                                                   // ! <-- Example of static Keyword
?           {
?             static PI: number = 3.14;
?             static calculateCircumference(diameter: number) : number {
?               return this.PI * diameter;
?             }
?           }
?           
?           console.log(2 * Circle.PI);
?           console.log(Circle.calculateCircumference(8));

TODO:: Understanding Getters & Setters :->

! Syntax :- class Class_Name 
!            {
!              private data_member: data_type = value;
!            
!              get property_name() {
!                 Returning anything that you have "set" in Setter.
!              }  
!              
!              set property_name( argument_name: data_type ) {
!                Putting Conditions on private data_member which can be accessible by user .....
!              }
!            }; 

? Example : class Plant
?           {
?             private _species: string = "Default";
?           
?             get species() {
?               return this._species;
?             }
?           
?             set species(value: string)
?             {
?               if (value.length > 4)
?                 this._species = value;
?               else
?                 this._species = "No Change";
?             }
?           }
?           
?           const plant = new Plant();
?           console.log(plant.species);
?           plant.species = "Herb";
?           console.log(plant.species);
?           plant.species = "Parasite";
?           console.log(plant.species);

TODO:: Understanding Abstract Classes :->

* NOTE :- Abstract Classes are basically Classes which can only be set as Base Class which could only be called by a Child Class.
*         Where, we could set or change some values. 

! Syntax :- abstract Class_Name { ..... };
!           class New_Class_Name extends Class_Name { ..... };
!           const variable_name = new New_Class_Name();

? Example : abstract class Project
?           {
?             projectName: string = "Machine Learing";
?             budget: number = 2000;
?           
?             abstract changeName(name: string): void;
?           
?             calcBudget() {
?               return this.budget * 2;
?             }
?           }
?           
?           class MainProject extends Project
?           {
?             changeName(name: string): void {
?               this.projectName = name;
?             }
?           }
?           
?           const project = new MainProject();
?           console.log(project);
?           project.changeName("Web Development");
?           console.log(project);

TODO:: Understanding Singleton Classes :->

* NOTE :- Singleton Classes is basically making constructor's private in order to create only a single instance (One time Constructor Only).

? Example: class OnlyOne
?          {
?            private static instance: OnlyOne;
?            private constructor(public name: string) { }
?          
?            static getInstance()
?            {
?              if (!OnlyOne.instance)
?                OnlyOne.instance = new OnlyOne('Only One Time Creation of Class is Possible');
?          
?              return OnlyOne.instance;
?            }
?          }
?          
//          const wrong = new OnlyOne('Only One');  
?          const right = OnlyOne.getInstance();
*/


// // ----------------------------------------------------------------------------------------------------------------------------
