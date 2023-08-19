What are the primitive data types in JavaScript?
Answer: The primitive data types in JavaScript are undefined, null, boolean, number, string, and symbol (ES6).

Differentiate between null and undefined.
Answer: null is an intentional absence of any value and must be assigned, while undefined is the default value of a declared variable that has not been assigned a value.
Undefined
        let x;  // x is undefined because it's declared but not assigned a value
        console.log(x);  // Output: undefined
Null
        let y = null;  // y is assigned the value null
        console.log(y);  // Output: null


How do you check the type of a variable in JavaScript?
Answer: You can use the typeof operator, like typeof variable, to determine the data type of a variable.

let num = 42;
let str = "Hello, world!";
let bool = true;
let obj = {};
let arr = [];
let func = function() {};

console.log(typeof num);   // Output: "number"
console.log(typeof str);   // Output: "string"
console.log(typeof bool);  // Output: "boolean"
console.log(typeof obj);   // Output: "object"
console.log(typeof arr);   // Output: "object"
console.log(typeof func);  // Output: "function"


What is the difference between == and ===?
Answer: == is the equality operator that performs type coercion, while === is the strict equality operator that checks both value and type without coercion.

What is type coercion?
Answer: Type coercion is the automatic conversion of one data type to another during operations, often used in comparisons.

Explain dynamic typing in JavaScript.
Answer: Dynamic typing means variables can change their data type during runtime without explicit type declarations.
        let variable = 5; // A number
        console.log(typeof variable); // Output: "number"

        variable = "Hello"; // Now a string
        console.log(typeof variable); // Output: "string"

        variable = true; // Now a boolean
        console.log(typeof variable); // Output: "boolean"


How do you create a string in JavaScript?
Answer: Strings can be created using single quotes, double quotes, or backticks (template literals).

What is the difference between NaN and Infinity?
Answer: NaN represents an undefined value resulting from operations, while Infinity represents positive infinity, a value larger than any finite number.
NaN
        let result = 0 / 0; // This operation results in NaN
        console.log(result); // Output: NaN
Infinity
        let positiveInfinity = Infinity;
        console.log(positiveInfinity); // Output: Infinity
         console.log(typeof positiveInfinity); // Output: "number"


console.log(typeof result); // Output: "number"

How do you create an array in JavaScript?
Answer: Arrays are created using square brackets, like const myArray = [1, 2, 3];.

What are objects in JavaScript?
Answer: Objects are complex data types that store collections of key-value pairs, where keys are strings (or Symbols) and values can be of any data type, including other objects.

        // Creating an object representing a person
let person = {
  firstName: "Dhanaraj",
  lastName: "bhaskar",
  age: 30,
  greet: function() {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
  }
};

// Accessing object properties
console.log(person.firstName); // Output: Dhanaraj
console.log(person.age);       // Output: 30

// Calling object method
person.greet(); // Output: Hello, my name is Dhanaraj bhaskar.

What does the typeof operator return when used with null?
Answer: The typeof operator returns "object" when used with null, which is a historical quirk in JavaScript.

What is a Symbol in JavaScript?
Answer: A Symbol is a unique and immutable value often used as an object property key. They are created using the Symbol() constructor.

Explain the difference between a number and NaN.
Answer: A number represents a valid numeric value, while NaN represents an undefined or unrepresentable value resulting from certain operations.

What is the purpose of the instanceof operator?
Answer: The instanceof operator checks if an object is an instance of a particular constructor (class).

        // Constructor function for a Person
function Person(name) {
    this.name = name;
}

// Creating instances of the Person constructor
const person1 = new Person('Alice');
const person2 = new Person('Bob');

// Checking instances using instanceof
console.log(person1 instanceof Person);  // Outputs: true
console.log(person2 instanceof Person);  // Outputs: true

// Creating an object that is not an instance of Person
const notAPerson = { name: 'Charlie' };

console.log(notAPerson instanceof Person);  // Outputs: false

How do you check if a variable is of a specific data type?
Answer: You can use the typeof operator or the instanceof operator to check data types. For example, typeof variable === 'number' or variable instanceof Array.

What is the difference between a deep copy and a shallow copy of an object?
Answer: A deep copy creates a new object with completely copied values, while a shallow copy creates a new object with references to the original object's values.
Deep copy
const original = {
    name: "John",
    address: {
        city: "New York",
        country: "USA"
    }
};

// Deep copy using a function or library (e.g., lodash)
const deepCopy = JSON.parse(JSON.stringify(original));

// Modifying a nested property in the deep copy doesn't affect the original object
deepCopy.address.city = "Los Angeles";

console.log(original.address.city);  // Output: "New York"

Pros of Deep Copy:

Provides complete isolation between the original and copied objects.
Changes to copied objects do not affect the original objects and vice versa.
Cons of Deep Copy:

Slower and more memory-intensive, especially for complex objects with many nested levels.
May lead to duplication of shared nested objects, which can increase memory usage.

Shallow copy
const original = {
    name: "John",
    address: {
        city: "New York",
        country: "USA"
    }
};

// Shallow copy
const shallowCopy = { ...original };

// Modifying a nested property in the shallow copy affects the original object
shallowCopy.address.city = "San Francisco";

console.log(original.address.city);  // Output: "San Francisco"

Pros of Shallow Copy:

Faster and less memory-intensive, as it only copies references.
Preserves references to shared nested objects, which can be desirable in certain scenarios.
Cons of Shallow Copy:

Changes to nested objects affect the original object and vice versa, which might lead to unexpected behavior.
It doesn't provide true isolation between the original and copied objects.


What is the NaN property isNaN() used for?
Answer: The isNaN() function checks if a value is NaN and returns true if the value is NaN, otherwise false.

What is typecasting in JavaScript?
Answer: Typecasting is the explicit conversion of one data type to another, often done using functions like parseInt(), parseFloat(), Number(), and String().

        // Implicit type conversion
let numString = "42"; // This is a string
let num = numString + 10; // JavaScript performs implicit type conversion to concatenate

console.log(num); // Outputs: "4210" (string concatenation)

// Explicit type conversion (typecasting)
let numString = "42";
let num = parseInt(numString); // Parse the string as an integer

console.log(num + 10); // Outputs: 52 (numeric addition)

Explain the concept of truthy and falsy values in JavaScript.
Answer: In JavaScript, values that are considered false in a boolean context are called falsy values, while values that evaluate to true are truthy. Examples of falsy values include false, 0, null, undefined, NaN, and an empty string.

        if (true) {
    console.log("true is truthy");
}

if (false) {
    // This block will not be executed
}

if (undefined) {
    // This block will not be executed
}

if (null) {
    // This block will not be executed
}

if (0) {
    // This block will not be executed
}

if (NaN) {
    // This block will not be executed
}

if ("") {
    // This block will not be executed
}

if ("Hello, world!") {
    console.log("Non-empty string is truthy");
}

if (42) {
    console.log("Number other than 0 is truthy");
}

if ([]) {
    console.log("An empty array is truthy");
}

if ({}) {
    console.log("An empty object is truthy");
}

How can you convert a string to a number in JavaScript?
Answer: You can convert a string to a number using the parseInt() or parseFloat() functions. 
        For example, parseInt("42") would return the number 42.

Question: What will be the output of the following code snippet?

javascript
Copy code
console.log(typeof undefined);
Answer: The output will be: undefined

Question: What is the result of the following comparison?

javascript
Copy code
console.log(5 == "5");
Answer: The result will be true. The == operator performs type coercion, converting the string to a number before comparison.

Question: What will be the output of the following code snippet?

javascript
Copy code
console.log(0 === -0);
Answer: The output will be: true

Question: What is the value of x after the following code snippet?

javascript
Copy code
let x = null;
console.log(typeof x);
Answer: The value of x will be object.

Question: What will be the output of the following code snippet?

javascript
Copy code
console.log("5" + 5);
Answer: The output will be: "55"

Question: What is the value of result in the following code snippet?

javascript
Copy code
const result = isNaN("Hello");
Answer: The value of result will be true, as "Hello" is not a valid numeric value.

Question: What will be the output of the following code snippet?

javascript
Copy code
console.log(typeof NaN);
Answer: The output will be: "number"

Question: What will be the value of x in the following code snippet?

javascript
Copy code
let x = 5;
x += "2";
Answer: The value of x will be "52".

Question: What will be the output of the following code snippet?

javascript
Copy code
console.log([] == 0);
Answer: The output will be: true. JavaScript performs type coercion, converting the empty array to a numeric value.

Question: What is the output of the following code snippet?

javascript
Copy code
console.log([10] == 10);
Answer: The output will be: true. JavaScript performs type coercion, converting the array to a numeric value.

Question: What will be the output of the following code snippet?

javascript
Copy code
console.log(+"42");
Answer: The output will be: 42. The unary + operator converts the string to a number.

Question: What is the value of y in the following code snippet?

javascript
Copy code
const x = "5";
const y = x++;
Answer: The value of y will be "5". The postfix increment operation converts the string to a number.

Question: What will be the output of the following code snippet?

javascript
Copy code
console.log(typeof (null + 5));
Answer: The output will be: "number". The null is coerced to 0 before addition.

Question: What will be the output of the following code snippet?

javascript
Copy code
console.log("Hello" instanceof String);
Answer: The output will be: false. The string primitive "Hello" is not an instance of the String constructor.

Question: What is the value of z in the following code snippet?

javascript
Copy code
let z = true + true;
Answer: The value of z will be 2. The true value is coerced to 1 before addition.

Question: What will be the output of the following code snippet?

javascript
Copy code
console.log("5" * 2);
Answer: The output will be: 10. The string is coerced to a number before multiplication.

Question: What is the result of the following code snippet?

javascript
Copy code
console.log(typeof [1, 2]);
Answer: The output will be: "object". Arrays are a type of object in JavaScript.

Question: What is the output of the following code snippet?

javascript
Copy code
console.log(2 + null);
Answer: The output will be: 2. The null is coerced to 0 before addition.

Question: What will be the value of y in the following code snippet?

javascript
Copy code
let x = 5;
let y = x--;
Answer: The value of y will be 5. The postfix decrement operation does not change the value of y before the decrement.

Question: What is the output of the following code snippet?

javascript
Copy code
console.log(typeof true);
Answer: The output will be: "boolean"

Feel free to use these code snippet-based questions and answers to practice and prepare for interviews focused on JavaScript data types.






