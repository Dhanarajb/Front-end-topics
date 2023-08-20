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
    
   ## Callback Functions:
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
the function keyword followed by the function name, a set of parentheses for parameters, 
    and a pair of curly braces to enclose the function body. 

function functionName(parameters) {
    // Function body
}
-------------------------------------------------------------------------------------------------------------------------👇📚📄
3. How do you call a function?
functionName(arguments);
-------------------------------------------------------------------------------------------------------------------------👇📚📄
4. What are parameters and arguments in a function?
Parameters are variable names defined in the function's declaration. while arguments are the values passed to a function when it's called.
-------------------------------------------------------------------------------------------------------------------------👇📚📄
5. How can you return a value from a function?
Use the return statement:

function add(a, b) {
    return a + b;
}
-------------------------------------------------------------------------------------------------------------------------👇📚📄
6. What is a callback function?
A callback function is a function passed as an argument to another function, which is then executed when a certain event or condition occurs.
-------------------------------------------------------------------------------------------------------------------------👇📚📄
7. What is a higher-order function?
A higher-order function is a function that either takes one or more functions as arguments or returns a function as its result.
    // Higher-order function
function operateOnNumbers(x, y, operation) {
    return operation(x, y);
}
// Functions to perform different operations
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
// Using the higher-order function
let result1 = operateOnNumbers(10, 5, add); // Pass the 'add' function
console.log(result1); // Outputs: 15
let result2 = operateOnNumbers(10, 5, subtract); // Pass the 'subtract' function
console.log(result2); // Outputs: 5
let result3 = operateOnNumbers(10, 5, multiply); // Pass the 'multiply' function
console.log(result3); // Outputs: 50

  When to Use Higher-Order Functions:

Modularity and Reusability: Use higher-order functions when you want to create modular and 
    reusable code by encapsulating behaviors in functions that can be easily customized and reused.

Abstraction: When you want to abstract away common patterns or operations, higher-order functions 
        allow you to define the core logic in one place and customize it with different functions.

Callbacks: In scenarios where you need to perform asynchronous operations (like handling events, 
            fetching data), higher-order functions can be used to pass callback functions that 
            get executed when the asynchronous operation is complete.

Functional Programming: Higher-order functions are a fundamental concept in functional programming. 
            If you're aiming to write more functional code, using higher-order functions can help you achieve that goal.

   Why to Use Higher-Order Functions:

Flexibility: Higher-order functions provide a flexible way to customize behavior without altering the core logic of a function.

Code Readability: They can lead to more readable code by encapsulating specific behavior in separate functions, 
    making the code easier to understand.

Code Reusability: Higher-order functions promote code reusability, reducing redundancy and maintenance efforts.

Separation of Concerns: They allow you to separate concerns by keeping different aspects of the
    program (e.g., business logic, data manipulation) in separate functions.

   How to Use Higher-Order Functions:

Define Higher-Order Functions: Start by defining functions that accept other functions as arguments or return functions as results.

Pass Functions as Arguments: Identify areas in your code where behavior needs to be customized and 
        pass appropriate functions as arguments to the higher-order function.

Invoke Callback Functions: If your higher-order function is designed for asynchronous operations, 
            call the callback functions at the appropriate times.

Return Functions: If your higher-order function needs to customize its behavior based on certain conditions, 
            return different functions based on those conditions.

Where to Use Higher-Order Functions:

Event Handling: When responding to events like button clicks, using higher-order functions allows you to 
            provide the event handler logic dynamically.

Data Transformation: In data processing scenarios, higher-order functions can be used to transform data in various ways.

Functional Composition: Higher-order functions are the building blocks of functional composition, 
                where you combine smaller functions to create more complex ones.

Customization in Algorithms: When implementing algorithms with variations, higher-order functions can customize 
                the algorithm's behavior based on the provided functions.

-------------------------------------------------------------------------------------------------------------------------👇📚📄
8. Explain the concept of a "closure".
A closure is a function that has access to its own scope, the scope of the outer function, and the global scope.
    Sure! In simple terms, a closure in JavaScript is like a backpack that an inner function carries. 
    This backpack contains some useful things from its outer function, even after the outer function has finished its job.

Imagine you have a lunchbox (inner function) that can still hold items from your kitchen (outer function) even after you leave the kitchen.
    You can take your lunchbox to work and enjoy the food from your kitchen, even though you're not in the kitchen anymore. 
    This connection between your lunchbox and kitchen is what we call a "closure."

Closures enable data encapsulation, information hiding, and the creation of private variables within functions.

Here's a simple example in code:

javascript
Copy code
function outerFunction() {
  var outerVar = "I'm from outside!";

  function innerFunction() {
    console.log(outerVar);  // The inner function still remembers outerVar
  }

  return innerFunction;
}

var closureExample = outerFunction();  // Now closureExample holds the inner function

closureExample();  // Output: I'm from outside!
🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️
Question 1:

javascript
Copy code
function outer() {
  var x = 10;

  function inner() {
    console.log(x);
  }

  return inner;
}

var closureFn = outer();
closureFn();
Answer: Output: 10
Explanation: The inner function inner() remembers the value of x from its containing outer() function due to closure. 
    When closureFn is invoked, it logs the value of x, which is 10.
🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️
Question 2:

javascript
Copy code
function counter() {
  var count = 0;

  return function() {
    return ++count;
  };
}

var increment = counter();
console.log(increment()); // Output: 1
console.log(increment()); // Output: 2
Answer: Output:

Copy code
1
2
Explanation: The closure maintains the count variable's state between multiple invocations of the returned function, 
    allowing it to increment and remember the count.
🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️
Question 3:

javascript
Copy code
function outer() {
  var name = "Alice";

  function inner() {
    console.log(name);
  }

  name = "Bob";

  return inner;
}

var closureFn = outer();
closureFn();
Answer: Output: Bob
Explanation: The closure preserves the most recent value of name from its outer function scope, which is "Bob".
🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️
Question 4:

javascript
Copy code
for (var i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
Answer: Output:

Copy code
4
4
4
Explanation: Due to closure, the anonymous function inside setTimeout retains a reference to the variable i. 
    After the loop finishes, i becomes 4, so all three timeouts print 4.
🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️
Question 5:

javascript
Copy code
function createFunctions() {
  var result = [];
  
  for (var i = 0; i < 3; i++) {
    result.push(function() {
      console.log(i);
    });
  }

  return result;
}

var functions = createFunctions();
functions[0](); // Output: 3
functions[1](); // Output: 3
functions[2](); // Output: 3
Answer: Output:

Copy code
3
3
3
Explanation: The closures inside the result array retain a reference to the same i variable. 
    After the loop completes, i is 3, so all three functions print 3.
🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️
Question 6:

javascript
Copy code
function outer(x) {
  return function(y) {
    return x + y;
  };
}

var addFive = outer(5);
console.log(addFive(3)); // Output: 8
Answer: Output: 8
Explanation: The inner function forms a closure over the x parameter of the outer function, 
    allowing it to access and use x even after the outer function has finished.
🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️
Question 7:

javascript
Copy code
function outer() {
  var x = 10;

  function inner() {
    console.log(x);
  }

  x = 20;

  return inner;
}

var closureFn = outer();
closureFn();
Answer: Output: 20
Explanation: The closure retains the updated value of x from its containing outer() function scope, which is 20.
🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️
Question 8:

javascript
Copy code
function makeCounter() {
  var count = 0;

  return {
    increment: function() {
      count++;
    },
    getCount: function() {
      return count;
    }
  };
}

var counter = makeCounter();
counter.increment();
counter.increment();
console.log(counter.getCount()); // Output: 2
Answer: Output: 2
Explanation: The closure maintains the state of the count variable across multiple calls to increment(), resulting in a count of 2.
🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️

🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️
Question 9:

javascript
Copy code
function greeting(name) {
  return function(message) {
    return "Hello, " + name + "! " + message;
  };
}

var greetAlice = greeting("Alice");
console.log(greetAlice("How are you?")); // Output: Hello, Alice! How are you?
Answer: Output: Hello, Alice! How are you?
Explanation: The inner function forms a closure over the name parameter of the outer function, allowing it to access name while being called with a different message.
🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️
Question 10:

javascript
Copy code
function outer() {
  var a = 5;

  function inner() {
    var b = 10;
    console.log(a + b);
  }

  return inner;
}

var closureFn = outer();
closureFn(); // Output: 15
Answer: Output: 15
Explanation: The inner function has access to both a from its containing outer() function scope and b from its own scope, allowing it to calculate and log the sum.
🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️
Question 11:

javascript
Copy code
function createMultiplier(factor) {
  return function(number) {
    return factor * number;
  };
}

var double = createMultiplier(2);
console.log(double(5)); // Output: 10
Answer: Output: 10
Explanation: The closure captures the factor parameter from the outer function and uses it to create a function that doubles the given number.
🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️
Question 12:

javascript
Copy code
function counter() {
  var count = 0;

  return function() {
    return count++;
  };
}

var increment = counter();
console.log(increment()); // Output: 0
console.log(increment()); // Output: 1
Answer: Output:

Copy code
0
1
Explanation: The closure maintains the count variable's state between multiple invocations of the returned function, allowing it to increment and remember the count.
🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️
Question 13:

javascript
Copy code
function outer() {
  var x = 5;

  function inner() {
    console.log(x);
    var x = 10;
  }

  return inner;
}

var closureFn = outer();
closureFn();
Answer: Output: undefined
Explanation: The variable x inside the inner() function is hoisted but not initialized before the console.log(), so it is undefined when logged.
🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️
Question 14:

javascript
Copy code
function countdown() {
  var i;
  for (i = 5; i >= 0; i--) {
    setTimeout(function() {
      console.log(i);
    }, (5 - i) * 1000);
  }
}

countdown();
Answer: Output:

diff
Copy code
-1
-1
-1
-1
-1
-1
Explanation: All timeouts share the same closure, and by the time they execute, the loop has finished, and i becomes -1.
🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️
How do closures affect memory management in JavaScript? with scenario simple

Sure, let's explore a simplified scenario that demonstrates how closures can affect memory management in JavaScript:

Scenario: Counter Function

Imagine you're creating a counter function that counts the number of times it's called. You decide to use a closure to keep track of the count.

javascript
Copy code
function createCounter() {
  var count = 0;

  return function() {
    count++;
    console.log('Count:', count);
  };
}

var counter = createCounter();
counter(); // Output: Count: 1
counter(); // Output: Count: 2
Memory Management Implications:

Closure Creation: The createCounter function defines a local variable count and returns an inner function that references this count variable. 
    This inner function forms a closure because it "closes over" its containing scope (the createCounter function).

Persistent Data: The inner function keeps a connection to the 'count' number even after the 'createCounter' is done. This makes sure 
    the 'count' stays in memory as long as the inner function can still be used, which is called a closure.

Isolated Scope: The closure keeps the 'count' variable within its own space. This stops the 'count' from messing up the whole program, 
        which is nice for avoiding naming issues and making the code more organized.

Memory Management Benefit:

In this case, closures help with memory management by encapsulating data within a function's scope. The count variable is stored in a scope 
    that is only accessible through the closure, preventing accidental modifications or conflicts with other variables in your code.

-------------------------------------------------------------------------------------------------------------------------👇📚📄
9. What is an IIFE (Immediately Invoked Function Expression)?
An IIFE is a function that is defined and immediately executed:

javascript
Copy code
(function() {
    // IIFE body
})();

When to Use IIFE (Immediately Invoked Function Expression):

IIFE (pronounced "iffy") is a JavaScript design pattern used to execute a function immediately after it's defined. 
    You might consider using IIFE in the following situations:

Isolation of Scope: IIFE helps create a new scope for variables within the function, preventing variable pollution in the global scope.

Module Pattern: IIFE can be used to create encapsulated modules that expose only the necessary parts to the outside world, 
    keeping certain variables private.

Avoiding Global Pollution: When you want to avoid creating unnecessary global variables, you can wrap your code in an 
    IIFE to keep variables local to that function.

Closures and Memory Management: IIFE can help in managing closures and memory by allowing variables to be garbage collected 
        when they are no longer needed.

Why Use IIFE:

Scope Isolation: IIFE is particularly useful for creating a private scope for variables, which helps prevent conflicts and 
            unintended side effects with other parts of your code.

Encapsulation: IIFE can be used to achieve encapsulation, allowing you to expose only specific properties or functions to 
                the outside world while keeping others private.

Namespace Management: IIFE can help you manage namespaces by avoiding polluting the global namespace with unnecessary variables.

How to Use IIFE:

To create an IIFE, you define an anonymous function and then immediately invoke it. The syntax looks like this:

javascript
Copy code
(function() {
    // Your code here
})();
You can also pass arguments to the IIFE:

javascript
Copy code
(function(arg1, arg2) {
    // Your code using arg1 and arg2
})(value1, value2);

Where to Use IIFE:

Immediately Executed Logic: Use IIFE when you have a piece of code that needs to be executed immediately after being defined, 
    without needing to be reused.

Creating Isolated Environments: IIFE is useful when you want to isolate variables from the surrounding context, 
    ensuring they don't interfere with other parts of the code.

Asynchronous Code: IIFE can be employed in scenarios where you want to encapsulate asynchronous operations or callbacks.

Here's a simple example of using an IIFE:

javascript
Copy code
(function() {
    var privateVar = "This is private";

    function privateFunction() {
        console.log(privateVar);
    }

    privateFunction(); // Outputs: "This is private"
})();

// privateVar and privateFunction are not accessible here
In this example, the variables privateVar and privateFunction are encapsulated within the IIFE and are not accessible outside of it. 
    This helps prevent any unintended interactions with other parts of the code.

When you combine closures and IIFE, you can achieve several benefits:

Encapsulation: By placing your code within an IIFE, you can create a private scope where variables are not accessible from the outside. 
    This helps prevent accidental variable name conflicts and makes your code more modular.

Data Privacy: Closures can be used within IIFE to create private variables that are accessible only within the function's scope. 
    This allows you to create "private" data that can't be modified or accessed from outside the function.

Maintaining State: Closures help in maintaining state across multiple invocations of a function, even after the containing 
    IIFE has finished executing. This can be useful for scenarios like creating counters, event handlers, or memoization.
        
const counterModule = (function () {
  let count = 0; // Private variable

  return {
    increment: function () {
      count++;
    },
    getCount: function () {
      return count;
    }
  };
})();

console.log(counterModule.getCount()); // Output: 0
counterModule.increment();
console.log(counterModule.getCount()); // Output: 1

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
        
        Arrow functions differ from regular functions in several ways:

Syntax: Arrow functions have a shorter syntax compared to regular functions, making code more compact.
this Binding: Arrow functions do not have their own this context; they inherit this from the enclosing scope. 
        Regular functions create their own this context.
arguments Object: Arrow functions do not have their own arguments object. Regular functions have an arguments 
        object that represents the arguments passed to the function.
Constructor Usage: Arrow functions cannot be used as constructors with the new keyword to create instances. 
            Regular functions can be used as constructors.
super and new.target: Arrow functions do not have bindings for super, arguments, and new.target. 
            Regular functions have separate bindings for these constructs.
Shorter Syntax for Expressions: Arrow functions with a single expression can omit curly braces {} and the return keyword.
🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️
1. What does this arrow function do?
javascript
Copy code
const add = (a, b) => a + b;
console.log(add(2, 3));
Answer: The arrow function add takes two parameters and returns their sum. The output will be 5.
🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️
2. How does this arrow function handle object property access?
javascript
Copy code
const person = {
  name: 'Alice',
  greet: () => console.log(`Hello, ${this.name}!`)
};
person.greet();
Answer: Arrow functions do not have their own this. In this case, the output will be Hello, undefined!.
🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️
3. What does this arrow function do with arrays?
javascript
Copy code
const numbers = [1, 2, 3];
const doubled = numbers.map(x => x * 2);
console.log(doubled);
Answer: The arrow function multiplies each element of the numbers array by 2 using the map function. The output will be [2, 4, 6].
🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️
4. How does this arrow function handle default parameter values?
javascript
Copy code
const greet = (name = 'Guest') => console.log(`Hello, ${name}!`);
greet();         // Output: Hello, Guest!
greet('Alice');  // Output: Hello, Alice!
Answer: The arrow function greet uses a default parameter value. When called without arguments, it greets "Guest". When called with an argument, it greets the provided name.
🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️
5. What's the output of this arrow function usage?
javascript
Copy code
const arr = [1, 2, 3];
const sum = arr.reduce((total, num) => total + num, 0);
console.log(sum);
Answer: The arrow function is used with the reduce function to calculate the sum of all elements in the array. The output will be 6.
🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️
6. How does this arrow function handle template literals?
javascript
Copy code
const getName = (first, last) => `Full Name: ${first} ${last}`;
console.log(getName('John', 'Doe'));
Answer: The arrow function getName takes two parameters and returns a template literal with the full name. The output will be Full Name: John Doe.
🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️
7. What's the result of this arrow function usage?
javascript
Copy code
const nums = [10, 20, 30];
const total = nums.reduce((acc, val) => acc + val);
console.log(total);
Answer: The arrow function is used with the reduce function to calculate the total sum of elements in the array. The output will be 60.
🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️
8. How does this arrow function handle object method definitions?
javascript
Copy code
const calculator = {
  value: 0,
  add: num => this.value += num
};
calculator.add(5);
console.log(calculator.value);
Answer: Arrow functions do not bind their own this. In this case, the value of this.value will not be updated. The output will be 0.
🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️
9. What's the output of this arrow function usage with a callback?
javascript
Copy code
const items = [1, 2, 3, 4];
const squared = items.map(item => item * item);
console.log(squared);
Answer: The arrow function is used with the map function to calculate the square of each element in the array. The output will be [1, 4, 9, 16].
🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️
10. How does this arrow function handle destructuring?
javascript
Copy code
const greet = ({ name }) => console.log(`Hello, ${name}!`);
greet({ name: 'Alice' }); // Output: Hello, Alice!
Answer: The arrow function greet uses destructuring to extract the name property from the provided object and prints a greeting with that name.
🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️
11. What does this arrow function do with filtering?
javascript
Copy code
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);
Answer: The arrow function is used with the filter function to create an array containing only the even numbers from the numbers array. The output will be [2, 4].
🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️
12. How does this arrow function behave with setTimeout?
javascript
Copy code
const delayedLog = message => setTimeout(() => console.log(message), 1000);
delayedLog('Hello after 1 second!');
Answer: The arrow function delayedLog sets up a delayed log using setTimeout. After 1 second, it will log Hello after 1 second!.
🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️
13. What's the output of this arrow function usage with an array?
javascript
Copy code
const numbers = [10, 20, 30];
const tripled = numbers.map(x => x * 3);
console.log(tripled);
Answer: The arrow function multiplies each element of the numbers array by 3 using the map function. The output will be [30, 60, 90].
🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️
14. How does this arrow function handle the toUpperCase method?
javascript
Copy code
const names = ['Alice', 'Bob', 'Charlie'];
const upperNames = names.map(name => name.toUpperCase());
console.log(upperNames);
Answer: The arrow function is used with the map function to convert each name in the names array to uppercase. The output will be ['ALICE', 'BOB', 'CHARLIE'].
🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️
15. What's the behavior of this arrow function with an object?
javascript
Copy code
const person = {
  name: 'Alice',
  greet: () => console.log(`Hello, ${person.name}!`)
};
person.greet();
Answer: Arrow functions do not have their own this. In this case, the output will be Hello, undefined!.
🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️
16. What's the output of this arrow function usage with string manipulation?
javascript
Copy code
const names = ['Alice', 'Bob', 'Charlie'];
const initials = names.map(name => name[0]);
console.log(initials);
Answer: The arrow function extracts the first character from each name in the names array using the map function. The output will be ['A', 'B', 'C'].
🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️
17. How does this arrow function handle ternary expressions?
javascript
Copy code
const isEven = num => num % 2 === 0 ? 'Even' : 'Odd';
console.log(isEven(4)); // Output: Even
console.log(isEven(7)); // Output: Odd
Answer: The arrow function uses a ternary expression to determine if a number is even or odd. The output depends on the input number.
🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️
18. What's the result of this arrow function usage with a callback?
javascript
Copy code
const nums = [2, 4, 6, 8];
const halved = nums.map(num => num / 2);
console.log(halved);
Answer: The arrow function is used with the map function to halve each element of the nums array. The output will be [1, 2, 3, 4].
🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️
19. How does this arrow function handle object property shorthand?
javascript
Copy code
const getName = ({ first, last }) => `${first} ${last}`;
console.log(getName({ first: 'John', last: 'Doe' }));
Answer: The arrow function uses object property shorthand destructuring to extract first and last properties and returns the full name.
🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️🖋️
20. What's the output of this arrow function usage with an array and conditional logic?
javascript
Copy code
const numbers = [5, 10, 15];
const result = numbers.map(num => num > 10 ? 'High' : 'Low');
console.log(result);
Answer: The arrow function maps each number in the numbers array to either 'High' or 'Low' based on whether the number is greater than 10. The output will be ['Low', 'Low', 'High'].
-------------------------------------------------------------------------------------------------------------------------👇📚📄
19. What is the purpose of the arguments object in a function?
The arguments object is an array-like object available within a function that holds all the arguments passed to the function.
-------------------------------------------------------------------------------------------------------------------------👇📚📄
20. How can you ensure that a function is executed only after a certain asynchronous operation is completed?
You can use callback functions, promises, or the async/await syntax to handle asynchronous operations and ensure 
    that functions are executed in the desired order.
-------------------------------------------------------------------------------------------------------------------------👇📚📄
21. what is scoping in js
Scoping in JavaScript refers to the rules and mechanisms that determine the visibility and accessibility of variables 
    within different parts of your code. Scoping defines where a particular variable is accessible and where it is not.
When:
Scoping becomes important when you're working with variables in your JavaScript code. 
    It helps determine where a variable is accessible and where it's not. You need to consider scoping whenever you declare and use variables.

Where:
Scoping applies in different contexts within your code:

Global Scope: Variables declared outside any functions or blocks have global scope and are accessible everywhere in your code.
Local Scope: Variables declared inside a function or block are accessible only within that function or block.
Block Scope (with let and const): Variables declared with let or const inside a block (e.g., within loops, if statements) are only accessible within that block.

    How:Scoping is determined by how and where you declare your variables:

Variables declared with var are function-scoped and are accessible throughout the entire function they're declared in.
Variables declared with let and const are block-scoped and are accessible only within the block in which they're declared.

    Why:Understanding scoping is crucial for several reasons:

Avoiding Conflicts: Proper scoping prevents unintended variable conflicts and overwriting of variables in different parts of your code.
Encapsulation: Scoping helps in creating encapsulated and modular code by limiting the visibility of variables to the relevant parts of your code.
Data Privacy: Scoping allows you to create private variables that are inaccessible from outside, enhancing data privacy and security.
Closures: Scoping is fundamental for closures, enabling inner functions to retain access to variables from their containing functions.
Debugging: Understanding scoping helps in debugging issues related to variable visibility and accessibility.


