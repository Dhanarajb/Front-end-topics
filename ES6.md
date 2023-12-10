### Arrow Functions:

> Definition: Arrow functions provide a concise syntax for writing function expressions.
```
// ES5
var add = function(x, y) {
  return x + y;
};

// ES6
const add = (x, y) => x + y;
```
---
### Template Literals:

Definition: Template literals provide a more flexible and readable way to create strings.
```
// ES5
var message = 'Hello, ' + name + '!';

// ES6
const message = `Hello, ${name}!`;
```
---
### Destructuring Assignment:

Definition: Destructuring assignment allows you to extract values from arrays or objects and assign them to variables.
```
// ES5
var person = { name: 'John', age: 30 };
var name = person.name;
var age = person.age;

// ES6
const { name, age } = { name: 'John', age: 30 };
```
---
### Let and Const:

Definition: let and const provide block-scoped variable declarations.
```
// ES5
var x = 10;

// ES6
let x = 10;
const PI = 3.14;
```
---
### Default Parameters:

Definition: Default parameters allow you to assign default values to function parameters.
```
// ES5
function multiply(x, y) {
  y = y || 1;
  return x * y;
}

// ES6
const multiply = (x, y = 1) => x * y;
```
---
### Rest Parameters:

Definition: Rest parameters allow you to represent an indefinite number of arguments as an array.
```
// ES5
function sum() {
  var args = Array.prototype.slice.call(arguments);
  return args.reduce(function(acc, num) {
    return acc + num;
  }, 0);
}

// ES6
const sum = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);
```
---
### Spread Operator:

Definition: The spread operator allows an iterable (like an array) to be expanded in places where arguments or elements are expected.
```
// Spread in function arguments
const numbers = [1, 2, 3];
const sum = (a, b, c) => a + b + c;
const result = sum(...numbers); // result is 6

// Spread in array literals
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // arr2 is [1, 2, 3, 4, 5]
```
---
### Classes:

Definition: Classes provide a more convenient and readable syntax for defining constructor functions and prototypes.
```
// ES5
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// ES6
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
```
---
### Promises:

Definition: Promises represent a value that may be available now, or in the future, or never.
```
// ES5
function fetchData(callback) {
  // Asynchronous operation
  setTimeout(function() {
    callback('Data received');
  }, 1000);
}

// ES6
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data received');
    }, 1000);
  });
}
```
---
### Modules:

Definition: Modules provide a way to structure and organize code by encapsulating functionality into reusable and shareable units.
```
// Exporting module
// module.js
export const multiply = (x, y) => x * y;

// Importing module
// app.js
import { multiply } from './module';
```
