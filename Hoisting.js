## Hoisting
📎📎📎📎📎📎📎📎📎📎📎📎📎📎📎📎📎📎📎

Hoisting is a JavaScript behavior where variable and function declarations are moved (or "hoisted") to the top of their containing scope during the compilation phase. 
   This means that even if you declare variables or functions later in your code, JavaScript treats them as if they were declared at the top of their containing function or block.
-----------------------------------------------------------------------------------------------------------------------------------------------------------📝📝📌
Here to understand about hoisting:

Variable Declarations:🖇️
When you declare a variable using var, the declaration is hoisted to the top of its containing function or global scope. However, 
  the initialization (assigning a value to the variable) remains in its original position. This means you can use the variable 
  before declaring it, but its value will be undefined until it's assigned a value.

Example:
console.log(x); // Outputs: undefined
var x = 5;
The variable x is hoisted to the top, so the console.log statement does not result in an error, but it logs undefined.
-----------------------------------------------------------------------------------------------------------------------------------------------------------📝📝📌
Function Declarations:🖇️
Function declarations are also hoisted to the top of their containing scope, which means you can call a function before declaring it in your code.

Example:
foo(); // This works even though foo is declared later in the code
function foo() {
  console.log("Hello, world!");
}
The function foo is hoisted, so it can be called before its actual declaration in the code.
-----------------------------------------------------------------------------------------------------------------------------------------------------------📝📝📌
Variable Scope:🖇️
Variables declared with var are function-scoped. If a variable is declared inside a function, it's only accessible within that function.

function example() {
  var localVar = "I'm local!";
  console.log(localVar);
}
example(); // "I'm local!"
console.log(localVar); // Error: localVar is not defined
-----------------------------------------------------------------------------------------------------------------------------------------------------------📝📝📌
Function Expressions:🖇️
Function expressions are not hoisted in the same way as function declarations. Only the variable declaration is hoisted, not the function itself.

sayHello(); // Error: sayHello is not a function
var sayHello = function() {
  console.log("Hello!");
};
In this case, sayHello is hoisted as a variable, but it's not a function until the assignment is made.
-----------------------------------------------------------------------------------------------------------------------------------------------------------📝📝📌
Temporal Dead Zone (TDZ):🖇️
Variables declared with let and const have a temporal dead zone (TDZ) in which they exist but can't be accessed before their declaration. This enforces better coding practices.
  
console.log(myVar); // Error: Cannot access 'myVar' before initialization
let myVar = 10;
-----------------------------------------------------------------------------------------------------------------------------------------------------------📝📝📌
Hoisting Order:🖇️
Understanding the order in which variables and functions are hoisted can be crucial. Functions are hoisted before variables, and declarations are hoisted before assignments.

var x = 5;
function x() {}
console.log(x); // 5
-----------------------------------------------------------------------------------------------------------------------------------------------------------📝📝📌
Arrow Functions:🖇️
Arrow functions do not have their own this context, but they are not hoisted in the same way as regular functions.

console.log(sayHello); // undefined
var sayHello = () => console.log("Hello!");
Understanding hoisting at the expert level involves dealing with nuances like the TDZ, order of hoisting, and the differences between var, let, const, and 
  arrow functions. This knowledge helps you write clean and predictable JavaScript code.
✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️
the difference between variable declaration and variable initialization🖇️

Variable Declaration: This is the act of creating a variable in a program. It involves specifying the variable's name and optionally its data type or initial value. 
  In languages like JavaScript, you declare a variable using keywords like var, let, or const. During hoisting, variable declarations are moved to the top of their containing scope.

Example:
var x; // Variable declaration
let y; // Variable declaration
const z = 10; // Variable declaration and initialization
Variable Initialization: This is the act of assigning a value to a previously declared variable. It provides an initial value to the variable, 
  which can be changed later in the program. Variable initialization can occur at the time of declaration or at a later point in the code.

Example:
var x; // Variable declaration
x = 5; // Variable initialization

let y = 20; // Variable declaration and initialization

const z = 10; // Variable declaration and initialization
In the context of hoisting, it's important to understand that only variable declarations are hoisted to the top of their containing scope, 
  not their initializations. This means that the variable name becomes known within the scope, but if you try to access the variable before 
  initializing it, it will have the value undefined. Initialization assignments remain in their original position in the code.

Here's a hoisting example to illustrate this:
console.log(a); // Outputs: undefined
var a = 5; // Variable declaration and initialization
In this example, the variable a is declared and initialized later in the code, but during hoisting, its declaration is moved to the top, 
  so it's known within the scope. However, its value is undefined until it's explicitly assigned the value 5.
-----------------------------------------------------------------------------------------------------------------------------------------------------------📝📝📌
Hoisting with var Declarations:
When you declare a variable using var, the declaration is hoisted to the top of its containing function or global scope during the compilation phase. 
  This means that the variable name becomes known within the scope, even if the actual declaration appears later in the code. However, only the 
  declaration is moved to the top, not the assignment.

Example:

console.log(x); // Outputs: undefined
var x = 5; // Variable declaration and initialization
In this example, the variable x is hoisted to the top of its scope, so the console.log statement doesn't result in an error. However, the value of x is 
  undefined until it's explicitly assigned the value 5.

Hoisting and Function Scope:
It's important to note that variables declared with var have function scope. This means that they are only accessible within the function in which 
  they are declared or in the global scope if declared outside of any function. If you declare a var variable inside a block (e.g., an if statement or a for loop), 
  it will still be hoisted to the top of the containing function, not just the block.

Example:

function example() {
  if (true) {
    var insideBlock = "I'm inside the block";
  }
  console.log(insideBlock); // Outputs: I'm inside the block
}

example();
In this example, insideBlock is declared inside an if block, but it's still accessible within the entire example function because of var hoisting.
-----------------------------------------------------------------------------------------------------------------------------------------------------------📝📝📌
TDZ

The Temporal Dead Zone (TDZ) is a concept in JavaScript that refers to the period when a variable is in scope but cannot be accessed before its declaration due to hoisting.
  This concept applies specifically to variables declared with let and const.

variable declaration:

When you declare a variable using let or const, the variable is "hoisted" to the top of its containing block or function scope. This means that the variable is 
  recognized by the JavaScript engine throughout the entire scope, even before it is actually assigned a value.

However, the key difference from var is that variables declared with let and const are not automatically given a value. They start as "uninitialized," 
    which means they don't have a meaningful value until you explicitly assign one. This is in contrast to var, which is initialized with undefined by default.

Here's a simple example to illustrate this:

console.log(x); // undefined
var x = 10;

console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 20;
In this code, x is declared with var and is hoisted to the top of the scope but initialized with undefined. On the other hand, y is declared with let and 
  causes a ReferenceError when you try to access it before assigning a value because it's uninitialized.

the Temporal Dead Zone (TDZ) in JavaScript in simple terms:

The Temporal Dead Zone (TDZ) is a concept in JavaScript related to the scope and hoisting of variables declared using the let and const keywords. 
   It's a period in code execution where you cannot access a variable before it's declared in its current scope. 
   Here's a scenario to help you understand the Temporal Dead Zone:

Scenario: Declaring and Accessing a Variable with let


console.log(myVar); // Throws a ReferenceError

if (true) {
  // TDZ starts here
  console.log(myVar); // Throws a ReferenceError

  let myVar = 42; // Variable declaration in this scope
  // TDZ ends here

  console.log(myVar); // Outputs 42
}

console.log(myVar); // Throws a ReferenceError
In this scenario:

The first console.log(myVar) statement outside the if block throws a ReferenceError because myVar is not defined yet; it's in the Temporal Dead Zone.
Inside the if block, another console.log(myVar) statement is encountered before the let myVar = 42; declaration. This also throws a ReferenceError because myVar is in the Temporal Dead Zone within that block.
The let myVar = 42; declaration brings myVar out of the Temporal Dead Zone, and you can access it. The subsequent console.log(myVar) within the same block correctly outputs 42.
Outside the if block, the final console.log(myVar) statement throws a ReferenceError again because myVar is out of scope.
The Temporal Dead Zone is essentially the time between entering a scope and the actual declaration of a variable within that scope. During this time, attempting to access the variable results in an error. It's a behavior introduced with let and const to improve variable declaration and scoping behavior in JavaScript compared to var.