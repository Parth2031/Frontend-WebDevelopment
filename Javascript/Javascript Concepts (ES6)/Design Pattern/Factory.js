// TODO:: A Factory Pattern or Factory Method Pattern says that just define an interface or abstract class ...
// TODO:: ... for creating an object but let the subclasses decide which class to instantiate.
// ? In other words, subclasses are responsible to create the instance of the class.
// ! The Factory Method Pattern is also known as Virtual Constructor.
// ? A simple factory pattern is an object which encapsulates the creation of another object”.
// ? In ES6, it could be the constructor being instatiated by “new ”.

// TODO:: Factory Pattern Example :-

class MemberFactory
{
  constructor()
  {
    this.createMember = (name, type) =>
    {
      let member;
      
      if (type === 'simple') 
        member = new SimpleMembership(name);

      else if (type === 'standard') 
        member = new StandardMembership(name);
      
      else if (type === 'super') 
        member = new SuperMembership(name);
      
      member.type = type;
      
      member.define = function () {
        console.log(`${this.name} (${this.type}): ${this.cost}`);
      };
      
      return member;
    };
  }
}

class SimpleMembership
{
  constructor(name)
  {
    this.name = name;
    this.cost = '$5';
  }
}

class StandardMembership
{
  constructor(name)
  {
    this.name = name;
    this.cost = '$15';
  }
}

class SuperMembership
{
  constructor(name)
  {
    this.name = name;
    this.cost = '$25';
  }
}

const members = [];

const factory = new MemberFactory();

members.push(factory.createMember('John Doe', 'simple'));
members.push(factory.createMember('Chris Jackson', 'super'));
members.push(factory.createMember('Janice Williams', 'simple'));
members.push(factory.createMember('Tom Smith', 'standard'));

// console.log(members);

members.forEach(function(member) {
  member.define();
});