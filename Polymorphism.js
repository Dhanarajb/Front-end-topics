Polymorphism in JavaScript is achieved through dynamic typing and duck typing. These concepts allow objects of different types to be treated as objects of a common type, 
  making code more flexible and extensible. Let's explore how polymorphism works in JavaScript using dynamic typing and duck typing:

Dynamic Typing:

JavaScript is a dynamically typed language, which means that variable types are determined at runtime rather than compile time. This dynamic typing allows for polymorphism 
  because objects can change their type during execution.

Here's an example of dynamic typing in JavaScript:


function greet(person) {
  console.log(`Hello, ${person.name}!`);
}

const john = { name: "John" };
const alice = { name: "Alice" };
const bob = "Bob";

greet(john);   // Output: Hello, John!
greet(alice);  // Output: Hello, Alice!
greet(bob);    // Output: Hello, Bob! (bob is a string, but it works)
In this example, the greet function can accept different types of arguments, such as objects with a name property and plain strings. JavaScript doesn't enforce strict 
  type checking at compile time, so the code is polymorphic, and greet can work with different types.

Duck Typing:

Duck typing is a concept in which the type or class of an object is determined by its behavior (methods and properties) rather than its explicit type. If an object 
  "walks like a duck, swims like a duck, and quacks like a duck," it is considered a duck. In JavaScript, this means that objects are treated based on their abilities, 
    not their inheritance or class.

Here's an example of duck typing in JavaScript:


class Bird {
  fly() {
    console.log("Bird is flying.");
  }
}

class Dog {
  bark() {
    console.log("Dog is barking.");
  }
}

function performAction(animal) {
  animal.fly(); // If it has a fly method, it's treated as a bird; otherwise, it's ignored.
}

const bird = new Bird();
const dog = new Dog();

performAction(bird); // Output: Bird is flying.
performAction(dog);  // No error; it's ignored because it doesn't have a fly method.
In this example, the performAction function accepts different types of objects. If an object has a fly method, it is treated as a bird and can perform the action. Otherwise, it is ignored. This is an example of duck typing because we determine the object's type based on its behavior (the presence of a specific method).

