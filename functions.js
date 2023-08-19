-----------------------------------------------------------------------------------------------------------------
    ## Basic Concepts:

What is a function in JavaScript?
How do you define a function in JavaScript?
What is the purpose of parameters in a function?
How do you call or invoke a function in JavaScript?
What is a return statement in a function?
    
   ## Function Types:
6. What is the difference between a named function and an anonymous function?
What is a higher-order function? Can you provide an example?
Explain the differences between function declarations and function expressions.
What is an IIFE (Immediately Invoked Function Expression) and why might you use it?
    
   ## Scope and Closures:
10. What is the scope of a variable declared inside a function?
What is a closure in JavaScript? Provide an example.
How do closures affect memory management in JavaScript?
    
   ## Arrow Functions:
13. What are arrow functions? How do they differ from regular functions?

Can you use the this keyword inside an arrow function? Why or why not?
Callback Functions:
15. What is a callback function? How is it used in JavaScript?
Explain the concept of the callback hell and how it can be mitigated.
    
   ## Function Context:
17. What does the this keyword refer to in the context of a function?
How is the value of this determined in a regular function and an arrow function?
    
   ## Function Methods:
19. Explain the bind, call, and apply methods in relation to functions.
How can you create a copy of an existing function with a specific context using the bind method?
These questions cover a range of topics related to functions in JavaScript and can help you 
assess a candidate's understanding of this crucial concept.

---------------------------------------------------------------------------------------------------------------



1. What is a function in JavaScript?
A function in JavaScript is a block of code that can be defined and executed, either when it is called or in response to an event.
-------------------------------------------------------------------------------------------------------------------------👇📚📄
2. How do you define a function in JavaScript?

javascript
Copy code
function functionName(parameters) {
    // Function body
}
-------------------------------------------------------------------------------------------------------------------------👇📚📄
3. How do you call a function?

javascript
Copy code
functionName(arguments);
-------------------------------------------------------------------------------------------------------------------------👇📚📄
4. What are parameters and arguments in a function?
Parameters are placeholders in a function's definition, while arguments are the values passed to a function when it's called.
-------------------------------------------------------------------------------------------------------------------------👇📚📄
5. How can you return a value from a function?
Use the return statement:

javascript
Copy code
function add(a, b) {
    return a + b;
}
-------------------------------------------------------------------------------------------------------------------------👇📚📄
6. What is a callback function?
A callback function is a function passed as an argument to another function, which is then executed when a certain event or condition occurs.
-------------------------------------------------------------------------------------------------------------------------👇📚📄
7. What is a higher-order function?
A higher-order function is a function that either takes one or more functions as arguments or returns a function as its result.
-------------------------------------------------------------------------------------------------------------------------👇📚📄
8. Explain the concept of a "closure".
A closure is a function that has access to its own scope, the scope of the outer function, and the global scope.
-------------------------------------------------------------------------------------------------------------------------👇📚📄
9. What is an IIFE (Immediately Invoked Function Expression)?
An IIFE is a function that is defined and immediately executed:

javascript
Copy code
(function() {
    // IIFE body
})();
-------------------------------------------------------------------------------------------------------------------------👇📚📄
10. How can you create a function using a function constructor?

javascript
Copy code
var multiply = new Function('a', 'b', 'return a * b;');
-------------------------------------------------------------------------------------------------------------------------👇📚📄
11. What is the difference between function declarations and function expressions?
Function declarations are hoisted, while function expressions are not. Function declarations can be used before 
    they are declared, but function expressions must be declared before use.
-------------------------------------------------------------------------------------------------------------------------👇📚📄
12. Explain the concept of "hoisting" with respect to functions.
Function declarations are hoisted to the top of their containing scope, allowing them to be used before they're declared in the code.
-------------------------------------------------------------------------------------------------------------------------👇📚📄
13. What is a "default parameter value" in a function?
Default parameter values allow you to specify default values for function parameters in case the caller doesn't provide them.
-------------------------------------------------------------------------------------------------------------------------👇📚📄
14. How can you pass a variable number of arguments to a function?
Use the arguments object (available inside a function) or use the rest parameter syntax:

javascript
Copy code
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
-------------------------------------------------------------------------------------------------------------------------👇📚📄
15. What is the purpose of the bind method on a function?
The bind method creates a new function that, when invoked, has its this keyword set to a specified value and 
    prepends any provided arguments to the function call.
-------------------------------------------------------------------------------------------------------------------------👇📚📄
16. How can you achieve function composition in JavaScript?
Function composition involves combining two or more functions to produce a new function. This can be achieved 
    using techniques like the compose function or the pipe function.
-------------------------------------------------------------------------------------------------------------------------👇📚📄
17. What is the difference between call and apply methods on a function?
Both methods are used to invoke a function with a specified this value, but call takes arguments individually, 
    while apply takes arguments as an array.
-------------------------------------------------------------------------------------------------------------------------👇📚📄
18. What is the difference between arrow functions and regular functions?
Arrow functions have a more concise syntax and they do not have their own this value; instead, they inherit the 
    this value from their enclosing function.
-------------------------------------------------------------------------------------------------------------------------👇📚📄
19. What is the purpose of the arguments object in a function?
The arguments object is an array-like object available within a function that holds all the arguments passed to the function.
-------------------------------------------------------------------------------------------------------------------------👇📚📄
20. How can you ensure that a function is executed only after a certain asynchronous operation is completed?
You can use callback functions, promises, or the async/await syntax to handle asynchronous operations and ensure 
    that functions are executed in the desired order.


