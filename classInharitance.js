Inheritance Using ES6 Classes:
With ES6, you can use a more intuitive and concise class syntax for inheritance:

Define the Base Class (Superclass):

Use the class keyword to define the base class and its constructor and methods.

class Animal {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`Hello, I'm ${this.name}.`);
    }
}

Create the Subclass (Derived Class):

Define a subclass by using the extends keyword, which indicates that the subclass inherits from the base class. You can also define additional properties and methods specific to the subclass.

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call the superclass constructor
        this.breed = breed;
    }

    bark() {
        console.log(`Woof, I'm a ${this.breed}!`);
    }
}

Create Instances and Use Inheritance:

You can create instances of both the base and derived classes, just like in the prototype-based approach, and use their methods.

const myAnimal = new Animal("Generic Animal");
const myDog = new Dog("Buddy", "Golden Retriever");

myAnimal.sayHello(); // Output: Hello, I'm Generic Animal.
myDog.sayHello();    // Output: Hello, I'm Buddy.
myDog.bark();        // Output: Woof, I'm a Golden Retriever!
