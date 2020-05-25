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
? tsc -w : It automatically compiles all Typescript files to Javascript files everytime, I do some changes.
? tsc --init : It is used to set the congiguration of Typescript by getting tsconfig.json.

// ---------------------------------------------------------------------------------------------------------------------------

? tsc --outFile name_of_file_to_get_bundled_in.js  all_other_files_that_are_to_be_in_single_file_in a_set_order.ts : ......
* .... It is used to combine multiple files in a single file using any Method: Namspace OR Modules but in a specific order.
! tsc --outFile app.js ( ALL FILES THAT ARE GETTING BUNDLED WITH NO IMPORT: ) file_one.ts  file_two.ts  app.ts
TODO:  ALTERTERNATIVE -->>  tsc outFile app.js ( AFTER GETTING IMPORTS ) 
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

// TODO:: Understanding Typescript Classes ->

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
*               Access Specifier like private & protected only needs this, under "STRICT Rule of tsconfig.json".

? Example : class Person
?           {
?             name: string;
?             protected age: number = 20;
?             private gender: string = "Male";      // ! <-- Intialized Default value and not used Contructor() only under "STRICT Rule".
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

TODO:: Understanding Abstract Classes :->

* Abstract Classes are basically Classes which can only be set as Base Class which could only be called by a Child Class.
* Where, we could set or change some values. 

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
! Syntax : The Below Example can be set as the basis for Singleton Classes Syntax. 

? Example: class OnlyOne
?          {
?            private static instance: OnlyOne;
?            private constructor(public name: string) { }
?          
?            static getInstance()
?            {
?              if (!OnlyOne.instance)
?                OnlyOne.instance = new OnlyOne('Only One Time Creation of Class Constructor is Possible');
?          
?              return OnlyOne.instance;
?            }
?          }
?          
//          const wrong = new OnlyOne('Only One');  
?          const right = OnlyOne.getInstance();
?          console.log(right.name);
?          right.name = "But We can still Update the One time created Constructor Value";
?          console.log(right.name);

TODO:: Understanding Getters & Setters Properies :->

! Syntax :- class Class_Name
!            {
!              private data_member: data_type;
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

TODO:: Understanding ReadOnly Property :-> 

? We can make a data_member readonly by two ways -> Only using Getter & By Readonly Property.
* NOTE :- Readonly properties must be initialized at their declaration or in the constructor. Where, we use "readonly" keyword.
! Syntax :- readonly data_member: data_type;

? Example : class ReadOnly
?           {
?             private static instance: ReadOnly;
?             public readonly name: string
?           
?             private constructor(name: string, public readonly age: number) {
?               this.name = name;
?             }
?           
?             static getInstance()
?             {
?               if (!ReadOnly.instance)
?                 ReadOnly.instance = new ReadOnly('Working on Readonly Property:',1);
?           
?               return ReadOnly.instance;
?             }
?           }
?           
?           const correct = ReadOnly.getInstance();
?           console.log(correct.name,correct.age);
//          correct.name = "But We can still Update the One time created Constructor Value";
//          console.log(correct.name);
*/

// // ----------------------------------------------------------------------------------------------------------------------------

// TODO:: Understanding Typescript Module ->

/*
* NOTE :- There are two ways, we can create Typescript Module: 1) Namespace & 2) ES6 Modules. 

TODO: Understanding Namespace :->

* Namespace is a keyword that lets you make a object type file which can be only be accessed by it's specified name and if it is exported.

? It is for a Single File Namespace Syntax  -->>

! Syntax :-  /// <reference path="Name of files to be Imported.ts" /> 
!            namespace name_of _file 
!            {
!              Any Property Declaration without export means here, that is only accessible in this File Only.
!              export function,object,etc { .... }
!            }
!
!            name_of_file.exported_functionName/objectName,etc;

* NOTE :- Limitation of Namespace : It is used only for Small Projects as it makes Global Scope Polluted in Bigger Projects.

TODO:: Understanding ES6 Modules in Typescript :->

* NOTE :- It is similar to ES6 Javascript Modules but in order to load them, we need to use SystemJS ( Third Party Library ).
? Command to Install SystemJS : npm install -save systemjs@0.21.5 version and then configure it.
*/

// // ---------------------------------------------------------------------------------------------------------------------------

// TODO:: Understanding Typescript Interfaces ->

/*
* Interface is basically defining property(key) of an Object in advance so as to, they could be accessed anytime/anywhere.
* NOTE :- In this basically, we could also set data_types to the Object Key_names. 

! Syntax :- interface interface_name 
!           {
!             key_name: data_type;
!             key_name?: data_type;            ( It means that is an Optional Argument and not used everytime. )
!             [Unknown_key_name: string]: data_type;
!             method_name(argument: data_type): data_type;  
!           }
!           
!           function function_name(object_name: interface_object_name / {key_name: data_type}) {
!             Now, we can access the specified key_names in Interface like a normal Object key name accessing.
!           }

? Example : interface namedPerson
?           {
?             firstName: string;
?             age?: number;                  
?             [notKnownKeyName: string]: any; 
?             greeting(lastName: string): void;
?           };
?           
?           const person: namedPerson =
?           {
?             firstName: "Parth",
?             age: 20,
?             hobbies: ["Cooking", "Sports"],
?             greeting(lastName: string) {
?               console.log(`Hi, I am ${this.firstName} ${lastName}`);
?             }
?           };
?           
?           function greet(person: namedPerson)
?           {
?             console.log(`Hello ${person.firstName}`);
?             console.log(person.hobbies[0]);
?           }
?           
?           function changeName(person: namedPerson) {
?             person.firstName = "Mrinal";
?           }
?           
?           greet({ firstName: "Parth"});         // ! <-- It is the correct way as it checks the interface and compares it.
//          greet({ firstName: "Parth", age: 25});         // ! <-- Age is not defined in interface so not part of Object Literal.
?           greet(person);
?           changeName(person);
?           greet(person);

* NOTE :- Object Literal is more strictly checked rather than a Object Definition in Interface.

TODO:: Interfaces in Typescript Classes :->

* NOTE :- Interface main example is used here too.

! Syntax :- class Class_Name implements interface_Name 
!           {
!             We also need to define the old property name once again in Class Body. 
!             We could also add more Data members to the class which are not part of Interface.
!           }

? Example : class Person implements namedPerson
?           {
?             firstName: string = "Parth";
?             middleName: string = "Amit";
?             greeting(lastName: string) {
?               console.log(`Hi, I am ${this.firstName} ${lastName}`);
?             }
?           }
?           
?           const newPerson = new Person();
?           newPerson.firstName = "Mrinal";
?           newPerson.greeting("Kothari");

TODO:: Interface Inheritance :->

* NOTE :- Interface main example is used here too.

! Syntax :- interface child_interface_name extends parent_interface_name
!           {
!             All old property_names in the Parent Interface are present here.
!             Now, we also add new property_names to the Child Interface.
!           }

? Example : interface agedPerson extends namedPerson {
?             age: number;
?           }
?
?           const oldPerson: agedPerson =
?           {
?             age: 20,
?             firstName: "Shrey",
?             greeting(lastName: string) {
?               console.log("Hello World");
?             }
?           }
?
?           console.log(oldPerson);

TODO:: Interface for Function Types :->

! Syntax :- interface interface_name {
!             (aruments: data_type): data_type;
!           }
!
!           let function_name = interface_name;

? Example : interface doubleValueFunction {
?             (number_1: number, number_2: number): number;
?           }
?           
?           let calculateDoubleFunction: doubleValueFunction;
?           
?           calculateDoubleFunction = (value_1: number, value_2: number) => {
?             return (value_1 + value_2) * 2;
?           }
?           
?           console.log(calculateDoubleFunction(10, 20));
*/

// // --------------------------------------------------------------------------------------------------------------------------------

// TODO:: Understanding Typescript Generics ->

/*
* Generic Type & Function is basically being able to create a data type that can work over a variety of types rather than a single one.
* It is an Major Alternative to "ANY" Data Type as it gives better support to the Built-In properties to a Data Type. 

TODO:: Generic Functions :->

! Syntax :- function function_name <T> (argument: T) {
!             .....
!           }
!
!           function_name(argument_value);
!                           OR 
!           function_name <data_type> (argument_value);

* NOTE :- Generic Type as "ANY" Data Type : <T>

? Example: function betterGeneric <T> (data: T) {
?            return data;
?          }
?          
?          console.log(betterGeneric("Parth"));
?          console.log(betterGeneric <number> (20));
?          console.log(betterGeneric({ name: "Parth", age: 20 }));

TODO:: Array Type Generic Functions :->

* NOTE :- It is part of Generic Functions.

! Syntax :- function function_name <T> (argument: T[]) {
!             .....
!           }

? Example : function printAll <T> (print: T[]) {
?             print.forEach(element => console.log(element));
?           }
?
?           printAll<string>(["Apple", "Banana"]);

TODO:: Built-In Generics like Array :->

* NOTE :- It is part of Generic Functions.

! Syntax :- variable variable_name: Array <data_type> = value;

? Example : const testResults: Array<number> = [1, 2, 3, 4];
?           testResults.push(5);
//          testResults.push("6");
?
?           console.log(testResults);

TODO:: Generic Types :->

! Syntax :- variable variable_name: <T> (data: T) => T = function_name;

? Example : const generic: <T> (data: T) => T = betterGeneric;
?           console.log(generic<string>("Generic Types"));

TODO:: Generic Classes :->

* NOTE :- <T , U extends constraints>        where, constraints = data_types like number | string,etc.
*         Convention : T - Stands for Single Type & U - Stands for Mutiple Types.

! Syntax :- class Class_Name <T , U extends data_type | data_type>
!           {
!             data_members: T;
!             data_members: U;
!             methods(): data_type { .... }
!           }
!           
!           const variable_name = new Class_Name<data_type_choosen_from_extends>();

? Example : class SimpleMaths <T extends number | string, U extends number | string>
?           {
?             baseValue: T;
?             multiplyValue: U;
?             calculate(): number {
?               return +this.baseValue * +this.multiplyValue;
?             }
?           }
?           
?           const simpleMaths = new SimpleMaths<number,string>();
?           simpleMaths.baseValue = 10;
?           simpleMaths.multiplyValue = "20";
?           console.log(simpleMaths.calculate());
*/

// // --------------------------------------------------------------------------------------------------------------------------------

// TODO:: Understanding Typescript Decorators ->

/*
* Decorators are part of the Meta-Programming which means it is used mosly by developers for easy coding.

! Syntax :- functionn decorator_name( constructorFn: Function ) {
!             ...... 
!           }
!           
!           @decorator_name
!           class Class_name {
!             constructor() { ...... }
!           }

? Example: function printable(constructorFn: Function)
?          {
?            constructorFn.prototype.print = function () {
?              console.log(this);
?            }
?          }
?          
?          @decorating(false)
?          @printable
?          class Plant {
?            name: string = "Green Plants";
?          }
?
?          const plant = new Plant();
?          (<any>plant).print();

TODO:: Decorator Factory :->

* NOTE :- It is basically making a decorator conditional using a normal function with a defined Decorator.

? Example : function decorate(constructorFn: Function) {
?             console.log(constructorFn);
?           }
?           
?           @decorate
?           class Person
?           {
?             constructor() {
?               console.log("Hi");
?             }
?           }
?           
?           function decorating (value: boolean): any {
?             return value ? decorate : null;
?           }

TODO:: Method Decorator :->

* NOTE :- Example of Property & Method Decorator's are combined. 

! Syntax :- function decorator_name (argument: boolean) 
!           {
!             return function( target: any, propName: string, descriptor: PropertyDescriptor) {
!                ...... 
!             }
!           }

TODO:: Property Decorator :->

! Syntax :-  function decorator_name (argument: boolean) 
!           {
!             return function( target: any, propName: string) : any
!             {
!                const newDescriptor: PropertyDescriptor = {
!                  writable: argument
!                }
!                return newDescriptor;
!             }
!           }

? Example : function editable(value: boolean)
?           {
?             return function (target: any, propNmae: string, descriptor: PropertyDescriptor) {
?               descriptor.writable = value;
?             }
?           }
?           
?           function overWritable(value: boolean)
?           {
?             return function (target: any, propName: string): any
?             {
?               const newDescriptor: PropertyDescriptor = {
?                 writable: value
?               };
?               return newDescriptor;
?             }
?           }
?           
?           class Project
?           {
?             @overWritable(false)                   // ! <-- This decorator makes it like a ReadOnly property.
?             projectname: string;
?           
?             constructor(name: string) {
?               this.projectname = name;
?             }
?           
?             @editable(false)                       // ! <-- This decorator makes it like a ReadOnly Method.
?             calcBudget() {
?               console.log(1000);
?             }
?           }
?         
?           const project = new Project("Super Project");
?           project.calcBudget();
?           console.log(project); 
//           project.calcBudget = function () {
//             console.log(2000);
//           }
//           project.calcBudget();

TODO:: Parameter Decorators :->

! Syntax :- function decorator_name(target: any, methodName: string, paramIndex: number) {
!             ....... 
!           }
!
!           class Class_Name {
!             method_name( @decorator_name parameters: data_type) { ..... }
!           }

? Example : function printInfo(target: any, methodName: string, paramIndex: number)
?           {
?             console.log("Target: ", target);
?             console.log("Method Name: ", methodName);
?             console.log("Parameter Index: ", paramIndex);
?           }
?           
?           class Course
?           {
?             name: string;
?           
?             constructor(name: string) {
?               this.name = name;
?             }
?           
?             printStudentNumbers(mode: string, @printInfo printAll: boolean)
?             {
?               if (printAll)
?                 console.log(100);
?               else
?                 console.log(200);
?             }
?           }
?           
?           const course = new Course("Maths");
?           course.printStudentNumbers("Anything", true);
?           course.printStudentNumbers("Anything", false);
*/

// // --------------------------------------------------------------------------------------------------------------------------------

// TODO:: Understanding Typescript Third Party Libraries :-

/*
* NOTE :- First, we need to configure our SystemJS Library for importing Particular Third Party Library.

? Congiruration of SystemJS:->>
!  <script>
!    SystemJS.config(
!      {
*        map: {
!          "jquery": "node_modules/jquery/dist/jquery.min.js",
*          "library_name": "node_modules/library_name/main_library_name.js"          // ! <<-- Syntax  
*        },
!        baseURL: '/',
!        packages:
!        {
!          '/': {
!            defaultJSExtensions: true
!          }
!        }
!      });
!    SystemJS.import('app.js');
!  </script>

TODO:: Terminal Command to install Typescript Definition fror Libraries :->

! NOTE :- npm install --save-dev library_name
? NOTE:-  npm install -D @types/library_name
* NOTE :- import 'library-name' ( Import it in the File to get the Library Functionalties ).
*/

// // --------------------------------------------------------------------------------------------------------------------------------