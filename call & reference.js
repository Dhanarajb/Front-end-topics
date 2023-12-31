Pass by Value:⚙︎
When you pass a primitive data type to a function, it creates a copy, so changes inside the function don't affect the original value.
  
function modifyValue(x) {
  x = 10; // This modification does not affect the original value
}

let num = 5;
modifyValue(num);
console.log(num); // Output: 5

⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘

Pass by Reference (or Sharing):
When you pass an object or array to a function, you're passing a reference, so changes inside the function affect the original object or array outside of it.

  
function modifyArray(arr) {
  arr.push(4); // This modification affects the original array
}

const myArray = [1, 2, 3];
modifyArray(myArray);
console.log(myArray); // Output: [1, 2, 3, 4]

⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘

In JavaScript, when you pass an object or array to a function, you pass a copy of the reference, but if you reassign that reference inside the function, 
it won't change the original reference outside the function.


function reassignArray(arr) {
  arr = [7, 8, 9]; // This reassignment does not affect the original array
}

const myArray = [1, 2, 3];
reassignArray(myArray);
console.log(myArray); // Output: [1, 2, 3]


function reassignObject(obj) {
    obj = { name: 'John' };
}
let person = { name: 'Alice' };
reassignObject(person);
console.log(person.name); // Output: Alice

⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘

What are the advantages of pass by value and pass by reference?

Answer: Pass by value ensures that the original data remains unchanged, 
        pass by reference allows you to work with and modify complex data structures efficiently.

⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘⌘

How can you create a copy of an object in JavaScript to prevent modifying the original object?
ChatGPT
To create a copy of an object in JavaScript and prevent modifying the original object, you can use several methods, such as the spread operator ({...}), Object.assign(), or libraries like lodash. Here are examples of each method:

Using the Spread Operator ({...}):


const originalObject = { name: 'Alice', age: 30 };
const copyObject = { ...originalObject };

// Modify the copy
copyObject.name = 'Bob';

console.log(originalObject); // Output: { name: 'Alice', age: 30 }
console.log(copyObject);    // Output: { name: 'Bob', age: 30 }
Using Object.assign():


const originalObject = { name: 'Alice', age: 30 };
const copyObject = Object.assign({}, originalObject);

// Modify the copy
copyObject.name = 'Bob';

console.log(originalObject); // Output: { name: 'Alice', age: 30 }
console.log(copyObject);    // Output: { name: 'Bob', age: 30 }
Using JSON.parse() and JSON.stringify() (Note: This method works well for simple objects, but it won't work with objects containing functions, undefined, or circular references):


const originalObject = { name: 'Alice', age: 30 };
const copyObject = JSON.parse(JSON.stringify(originalObject));

// Modify the copy
copyObject.name = 'Bob';

console.log(originalObject); // Output: { name: 'Alice', age: 30 }
console.log(copyObject);    // Output: { name: 'Bob', age: 30 }
Using the lodash library:

If you're working with more complex objects or need a deep copy, you can use the _.cloneDeep() function from the lodash library:


const _ = require('lodash');

const originalObject = { name: 'Alice', age: 30 };
const copyObject = _.cloneDeep(originalObject);

// Modify the copy
copyObject.name = 'Bob';

console.log(originalObject); // Output: { name: 'Alice', age: 30 }
console.log(copyObject);    // Output: { name: 'Bob', age: 30 }
