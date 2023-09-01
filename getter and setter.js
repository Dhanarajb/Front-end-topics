
Getter and setter methods are special methods in JavaScript that allow you to control access to object properties. They are commonly used to encapsulate 
  the internal state of an object and provide a controlled interface for getting and setting its values. Getter methods are used to retrieve the value of a property, 
    while setter methods are used to modify the value of a property. Here's how getter and setter methods work and how they can be used:

Getter Methods:

A getter method is a function that is used to retrieve the value of a property. It is defined using the get keyword followed by a method name. 
  Getter methods do not require parentheses when called. Instead, they are accessed like regular properties. Here's an example:

javascript
Copy code
class Circle {
  constructor(radius) {
    this._radius = radius; // Private property
  }

  // Getter method for retrieving the radius
  get radius() {
    return this._radius;
  }

  // Calculating and returning the area
  get area() {
    return Math.PI * this._radius * this._radius;
  }
}

const myCircle = new Circle(5);
console.log(myCircle.radius); // Accessing the radius using the getter
console.log(myCircle.area);   // Calculating and accessing the area using the getter
In this example, the Circle class has a getter method radius, which allows you to retrieve the value of the _radius property. 
  It also has a getter method area that calculates and returns the area based on the radius.

Setter Methods:

A setter method is a function that is used to modify the value of a property. It is defined using the set keyword followed by a method name. 
  Setter methods take a single argument, which represents the new value you want to set for the property. Here's an example:

javascript
Copy code
class Circle {
  constructor(radius) {
    this._radius = radius; // Private property
  }

  // Getter method for retrieving the radius
  get radius() {
    return this._radius;
  }

  // Setter method for modifying the radius
  set radius(newRadius) {
    if (newRadius > 0) {
      this._radius = newRadius;
    } else {
      console.error("Radius must be a positive number.");
    }
  }

  // Calculating and returning the area
  get area() {
    return Math.PI * this._radius * this._radius;
  }
}

const myCircle = new Circle(5);
console.log(myCircle.radius); // Accessing the radius using the getter
myCircle.radius = 8;          // Modifying the radius using the setter
console.log(myCircle.radius); // Accessing the updated radius using the getter
In this example, the Circle class has a setter method radius that allows you to modify the value of the _radius property. It performs validation to ensure that 
  the new radius is a positive number.




