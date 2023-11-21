### This
> The this keyword in JavaScript is a special keyword that refers to the current execution context. The value of this changes depending on how the code is called.
---
#### **In object methods:** When you call a method on an object, this refers to the object itself.
```
const person = {
  name: "John Doe",
  age: 30,
  greet: function() {
    console.log("Hello, my name is " + this.name);
  }
};

person.greet(); // Output: Hello, my name is John Doe
```
---
#### **In regular functions:** When you call a regular function, this refers to the global object.
```
function greet() {
  console.log("Hello from global scope");
}

greet(); // Output: Hello from global scope
```
---
#### **In strict mode:** When you put code inside a strict mode block, this has a different meaning in regular functions. In strict mode, this refers to undefined inside regular functions.
```
"use strict";

function greet() {
  console.log("Hello from strict mode");
}

greet(); // Output: Hello from strict mode
console.log(this); // Output: undefined
```
---

#### **In event handlers:** When you attach an event handler to an element, this refers to the element that triggered the event. 
```
<button onclick="this.clickCount++">Click me</button>
```
