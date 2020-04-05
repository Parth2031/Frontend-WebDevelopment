// * Understanding OOP'S Concepts. 
// ? NOTE :- When we create Global Variables for input boxes, it refers only to first inputed value and not the next input value's by user.
// ! So, this problem could be solved using two ways -
// TODO:: First, we can make the class in which we could use "this" keyword to resolve the issue.
// TODO:: Second, we can make the variable in the local scope and keep updating them.

// ? -> This is ES6 Syntax:
// ! Employees Constructor with "this" keyword Implementation and it's functionality :->
// * In this, we created Global Variables and used class with "this" keyword to update values.

class Employees
{
  // ! Category = "Default"; is an public class field.
  // ? A field defines property for classes.
  // * Field's are fixed values in class.

  Category = "Default"; 

  constructor(name, age, dob)
  {
    // ! Whereas, this.name = name; is an public class property. 
    // * Whereas, Class Property are dynamic values in class.

    this.name = name;
    this.age = age;
    this.birthday = new Date(dob);
    this.calculateAge = () =>
    {
      const diff = Date.now() - this.birthday.getTime();
      const ageDate = new Date(diff);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    };
  }
}

const parth = new Employees('Parth', 20, '10-01-2000');
// const mrinal = new Employees("Mrinal", 19,"10-03-2000");

// console.log(mrinal.age);
// console.log(parth.calculateAge());

// TODO =====================================================================================================================================

// ! Prototype Explanation :->

// ? Object.prototype                                {Main Prototype & Part of Constuctor.prototype}
// ? Function_name/Constructor_name.prototype      {Constructor prototype and it's accesed in _proto_}

// ! Person constructor :-

class Person
{
  constructor(firstName, lastName, dob)
  {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
    // this.calculateAge = () =>
    // {
    //   const diff =  Date.now() - this.birthday.getTime();
    //   const ageDate = new Date(diff);
    //   return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }
  }
  
  // ! Calculate age :
  
  calculateAge()
  {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  
  // ! Get full name :
  
  getFullName()
  {
    return `${this.firstName} ${this.lastName}`;
  }
  
  // ! Gets Married :
  
  getsMaried(newLastName)
  {
    this.lastName = newLastName;
  }

  // ! static is used in classes as they can be directly accessed using Class_name.function_name().
  // ? They are not part of constructors and so they don't need "new" operator to call the construtor.
  // * Only accessible on class itself and cannot be instantiated by constructor.

  static addNumbers(x, y)
  {
    return x + y;
  }
}

// TODO:: The extends keyword is used in class declarations or class expressions to create a class which is a child of another class.
// ? Syntax of using extends keyword :- class ChildClass extends ParentClass { ... }
// ! Example of extends keyword -

class NewPerson extends Person
{
  constructor(firstName, lastName,dob,gender)
  {
    // * NOTE: In derived classes, super() must be called before you can use 'this'. 
    // ! Leaving this out will cause a reference error.
    // ? The super keyword is used to access and call functions on an object's parent.
    // TODO:: Syntax of super keyword :-
    // TODO: super([arguments]);                           // <-- Calls the parent constructor as to use "this" keyword.
    // TODO: super.functionOnParent([arguments]);

    super(firstName, lastName, dob);
    super.getFullName(firstName,lastName);

    this.gender = gender;
  }  
}

const john = new Person('John', 'Doe', '8-12-90');
const mary = new Person('Mary', 'Johnson', 'March 20 1978');

// console.log(mary);
// console.log(john.calculateAge());
// console.log(mary.getFullName());

mary.getsMaried('Smith');
// console.log(mary.getFullName());

// ! hasOwnProperty() is part of Object.prototype built-in method.
// ? Similarly, there are more built-in properties and methods in Object.prototype.

// console.log(mary.hasOwnProperty('firstName'));
// console.log(mary.hasOwnProperty('getFullName'));

// ! Calling the static function from class :

// console.log(Person.addNumbers(1,1));

// ! Showing the working of extends keyword with super() method:

const shyam = new NewPerson("Shyam", "Taparia", "May 24 2000","Male");
console.log(shyam);
console.log(shyam.getFullName());

// ? =====================================================================================================================================

// TODO:: Object.create(Class_name.prototype) is used to create more variables with values outside the class (Global).  

const personPrototypes =
{
  greeting: function () {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function (newLastName) {
    this.lastName = newLastName;
  }
}

const rohan = Object.create (personPrototypes);
rohan.firstName = 'Rohan';
rohan.lastName = 'Kapoor';
rohan.age = 30;

// rohan.getsMarried('Thompson');
// console.log(rohan.greeting());

// TODO:: Alternative to above method for Object.create() :-

const shrey = Object.create (personPrototypes,
{
  firstName: { value: 'Shrey' },
  lastName: { value: 'Trehan' },
  age: { value: 20 }
});

// console.log(shrey);
// console.log(shrey.greeting());

// TODO ==================================================================================================================================

// ? Understanding the Prototypes Inheritance :-
// ! Children constructor :->

function Children(firstName, lastName)
{
  this.firstName = firstName;
  this.lastName = lastName;
}

// ! Greeting:
  
Children.prototype.greeting = function ()
{
  return `Hello there ${this.firstName} ${this.lastName}`;
}

const child = new Children('Utkarsh', 'Srivastava');
// console.log(child.greeting());

// ! Customer constructor :->

function Customer (firstName, lastName, phone, membership)
{
  // TODO:: Class_name.call(arguments) is used to access the class values of any class defined before.

  Children.call(this, firstName, lastName);
  this.phone = phone;
  this.membership = membership;
}

// ! Inherit the Children prototype methods :-

Customer.prototype = Object.create(Children.prototype);

// ! Make Customer.prototype return Customer() :

Customer.prototype.constructor = Customer;

// ! Create customer :

const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');
// console.log(customer1);

// ! Customer greeting :

Customer.prototype.greeting = function () {
  return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
}

// console.log(customer1.greeting());

// TODO ==================================================================================================================================

// ? Alternative to above Code :->
// * Note:--> This should be ignored.
// ! People constructor in ES5 Syntax:

// ! Person constructor :->

function People(firstName, lastName, dob)
{
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  // this.calculateAge = function(){
  //   const diff =  Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // }
}

// ! Calculate age :

People.prototype.calculateAge = function ()
{
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// ! Get full name :

People.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
}

// ! Gets Married :

People.prototype.getsMaried = function (newLastName) {
  this.lastName = newLastName;
}

const nitya = new Person('Nitya', 'Singh', '8-12-90');
const rishabh = new Person('Rishabh', 'Sharma', 'March 20 1978');

// console.log(nitya);
// console.log(rishabh.calculateAge());
// console.log(nitya.getFullName());

nitya.getsMaried('Sharma');
// console.log(nitya.getFullName());

// TODO:: hasOwnProperty() is part of Object.prototype built-in method.
// ? Similarly, there are more built-in properties and methods in Object.prototype.

// console.log(nitya.hasOwnProperty('firstName'));
// console.log(nitya.hasOwnProperty('getFullName'));
