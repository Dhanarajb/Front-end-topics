Encapsulation is one of the fundamental principles of object-oriented programming that involves bundling the data (properties) and methods (functions) 
  that operate on the data into a single unit called a class or an object. In JavaScript, you can achieve encapsulation by creating private properties and
    methods using closures or symbols. Let's explore both methods:

1. Encapsulation with Closures:

You can create private properties and methods by leveraging closures. In this approach, you define variables within the constructor function's scope, 
  and they are accessible only within that scope.


function Person(name, age) {
  // Private variables
  let _name = name;
  let _age = age;

  // Public methods to access private variables
  this.getName = function() {
    return _name;
  };

  this.getAge = function() {
    return _age;
  };

  this.setAge = function(newAge) {
    if (newAge >= 0) {
      _age = newAge;
    } else {
      console.error("Age cannot be negative.");
    }
  };
}

const person = new Person("Alice", 30);
console.log(person.getName()); // Output: Alice
console.log(person.getAge());  // Output: 30
person.setAge(35);             // Set the age to 35
console.log(person.getAge());  // Output: 35
In this example, _name and _age are private variables accessible only within the Person constructor function. Public methods (getName, getAge, and setAge) 
  are used to access and modify these private variables. This way, encapsulation is achieved because the internal state is hidden from external access.

2. Encapsulation with Symbols (ES6+):

Symbols are unique and immutable values that can be used as object property keys. They can be used to create private properties in JavaScript classes, 
  ensuring that they are not accidentally accessed or modified from outside the class.


const _name = Symbol("name");
const _age = Symbol("age");

class Person {
  constructor(name, age) {
    this[_name] = name; // Private property
    this[_age] = age;   // Private property
  }

  getName() {
    return this[_name];
  }

  getAge() {
    return this[_age];
  }

  setAge(newAge) {
    if (newAge >= 0) {
      this[_age] = newAge;
    } else {
      console.error("Age cannot be negative.");
    }
  }
}

const person = new Person("Bob", 25);
console.log(person.getName()); // Output: Bob
console.log(person.getAge());  // Output: 25
person.setAge(32);             // Set the age to 32
console.log(person.getAge());  // Output: 32
In this example, we use symbols _name and _age as private property keys. These properties can only be accessed using the same symbols, making them effectively 
  private within the Person class.
