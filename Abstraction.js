Abstraction is one of the core principles of object-oriented programming (OOP). It involves focusing on essential properties and methods of an object while hiding or encapsulating 
  the complex implementation details. The main goal of abstraction is to simplify the way we work with objects, making them more manageable and easier to understand. 
    Here's how abstraction works in JavaScript:

Identify Essential Properties and Methods:

The first step in abstraction is to identify the essential properties (attributes) and methods (behaviors) that define the object's purpose and functionality. 
  These are the aspects of the object that should be exposed to the outside world.

Hide Implementation Details:

Abstraction involves encapsulating the implementation details and making them inaccessible from outside the object. This is typically achieved by using private 
  properties and methods, as discussed in the previous answer, using closures or symbols.

Provide a Simple Interface:

Abstraction simplifies the way we interact with an object by providing a clean and straightforward interface. This interface consists of public methods and properties that allow users to interact with the object while abstracting away the underlying complexity.

Let's illustrate abstraction with a JavaScript example:

class Car {
  constructor(make, model) {
    this.make = make;         // Public property
    this.model = model;       // Public property
    let speed = 0;            // Private property (implementation detail)

    // Private method (implementation detail)
    function increaseSpeed() {
      speed += 10;
      console.log(`Speed increased to ${speed} mph`);
    }

    // Public method (essential behavior)
    this.accelerate = function() {
      increaseSpeed();
    };

    // Public method (essential behavior)
    this.getSpeed = function() {
      return speed;
    };
  }

  // Public method (essential behavior)
  startEngine() {
    console.log(`${this.make} ${this.model}'s engine started.`);
  }
}

const myCar = new Car("Toyota", "Camry");
myCar.startEngine();    // Output: Toyota Camry's engine started.
myCar.accelerate();     // Output: Speed increased to 10 mph
console.log(myCar.getSpeed()); // Output: 10
In this example:

We have a Car class that represents a car object.
make and model are essential public properties that define the car.
speed is a private property that hides the implementation detail of the car's speed.
increaseSpeed() is a private method responsible for increasing the speed.
accelerate() and getSpeed() are public methods that provide a simple interface for interacting with the car object while abstracting away the details of how speed is managed.
