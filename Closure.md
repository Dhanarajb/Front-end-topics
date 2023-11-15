###### Explain the concept of a "closure". 
> A closure is a feature of JavaScript that allows inner functions to access the outer scope of a function. Closure helps in binding a function to its outer boundary and is created automatically whenever a function is created. A block is also treated as a scope since ES6. Since JavaScript is event-driven so closures are useful as it helps to maintain the state between events.

```
const createCounter=()=>{
  let counter = 0;
  return function(){
    counter++
    console.log(counter)
  }
}
const closure1= createCounter()
closure1()
closure1()

const closure2=createCounter()
closure2()

```
> Encapsulation is bundling or wrapping of data
and function together to provide data security/
data privacy.


###### Benefits of Closures:
> 1. Closure can be used for data modification with data privacy(encapsulation)
> 2. Persistent Data and State- Each time createCounter() iscalled, it creates a new closure with its own separate count variable.
> 3. Code Reusability- The closure returned by createCounter() is a reusable counter function.
###### Limitations
> Memory Leaks - If closures are not properly managed, they can hold onto unnecessary memory because Closures retain references to the variables they access.

> Closures enable data encapsulation, information hiding, and the creation of private variables within functions.

#### Application
###### Implementing Private Variables and Methods

> Closures can be used to emulate private variables and methods in JavaScript, which is not directly supported by the language. For example, consider a simple counter function that keeps track of the number of times it has been called:

```
function counter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}
```

> In this example, the count variable is private to the inner function, which can only be accessed from within the closure. This prevents direct modification of the count variable from outside the closure, ensuring data encapsulation and enhanced code security.
---
#### Question 1:
```
function outer() {
 var x = 10;

function inner() {
console.log(x);
}

return inner;
}

var closureFn = outer();
closureFn();
Answer: Output: 10 Explanation: The inner function inner() remembers the value of x from its containing outer() function due to closure. When closureFn is invoked, it logs the value of x, which is 10.
```
---
#### Question 2:
```
function counter() {
var count = 0;

return function() {
return ++count; };
}

var increment = counter();
console.log(increment()); // Output: 1
console.log(increment()); // Output: 2
 Answer: Output:
Copy code 1 2 Explanation: The closure maintains the count variable's state between multiple invocations of the returned function, allowing it to increment and remember the count.
```
 ---
#### Question 3:
```
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
Answer: Output: Bob Explanation: The closure preserves the most recent value of name from its outer function scope, which is "Bob".
```
---
#### Question 4:
```
for (var i = 1; i <= 3; i++) {
setTimeout(function() {
console.log(i);
}, 1000);
}
Answer: Output:
Copy code 4 4 4 Explanation: Due to closure, the anonymous function inside setTimeout retains a reference to the variable i. After the loop finishes, i becomes 4, so all three timeouts print 4.
```
---
#### Question 5:
```
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
functions0; // Output: 3
functions1; // Output: 3
functions2; // Output: 3 Answer: Output:

Copy code 3 3 3 Explanation: The closures inside the result array retain a reference to the same i variable. After the loop completes, i is 3, so all three functions print 3.
```
---
#### Question 6:
```
function outer(x) { 
return function(y) { 
return x + y; }; }

var addFive = outer(5); 
console.log(addFive(3)); // Output: 8 
Answer: Output: 8 
Explanation: The inner function forms a closure over the x parameter of the outer function, allowing it to access and use x even after the outer function has finished. 
```
---
#### Question 7:
```
function outer() {
var x = 10;

function inner() {
console.log(x);
}

x = 20;

return inner;
}

var closureFn = outer();
closureFn(); Answer: Output: 20 Explanation: The closure retains the updated value of x from its containing outer() function scope, which is 20.
```
---
#### Question 8:
```
function makeCounter() {
var count = 0;
return {
increment: function() {
count++;
},
getCount: function() {
return count;
} };
}

var counter = makeCounter();
counter.increment();
counter.increment();
console.log(counter.getCount()); // Output: 2 Answer: Output: 2 Explanation: The closure maintains the state of the count variable across multiple calls to increment(), resulting in a count of 2. 

```
---
#### Question 9:
```
function greeting(name) {
return function(message) {
return "Hello, " + name + "! " + message;
};
}

var greetAlice = greeting("Alice");
console.log(greetAlice("How are you?")); // Output: Hello, Alice! How are you? Answer: Output: Hello, Alice! How are you? Explanation: The inner function forms a closure over the name parameter of the outer function, allowing it to access name while being called with a different message.
```
---
#### Question 10:
```
function outer() {
var a = 5;

function inner() {
var b = 10; console.log(a + b);
}

return inner;
}

var closureFn = outer(); closureFn(); // Output: 15 Answer: Output: 15 Explanation: The inner function has access to both a from its containing outer() function scope and b from its own scope, allowing it to calculate and log the sum.
```
---
#### Question 11:
```
function createMultiplier(factor) {
return function(number) {
return factor * number;
};
}

var double = createMultiplier(2);
console.log(double(5)); // Output: 10 Answer: Output: 10 Explanation: The closure captures the factor parameter from the outer function and uses it to create a function that doubles the given number.
```
---
#### Question 12:
```
function counter() {
var count = 0;

return function() {
return count++; }; }

var increment = counter();
console.log(increment()); // Output: 0
console.log(increment()); // Output: 1 Answer: Output:

Copy code 0 1 Explanation: The closure maintains the count variable's state between multiple invocations of the returned function, allowing it to increment and remember the count.
```
---
#### Question 13:
```
function outer() {
var x = 5;

function inner() {
console.log(x); var x = 10;
}

return inner; }

var closureFn = outer();
closureFn(); Answer: Output: undefined Explanation: The variable x inside the inner() function is hoisted but not initialized before the console.log(), so it is undefined when logged.
```
---
