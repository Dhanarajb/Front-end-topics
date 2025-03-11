## Function Types in JavaScript  
JavaScript functions can be categorized into different types based on how they are declared and used. Understanding these variations is crucial for writing clean, efficient, and bug-free code.

---

## **1. Function Declaration (Named Function)**  
A **Function Declaration** is a function that is defined using the `function` keyword with a specified name. It is **hoisted**, meaning it can be used before it is defined.

### **Syntax**  
```javascript
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Dhanaraj")); // Hello, Dhanaraj!
```

### **Key Features**  
- ✅ **Hoisted** – Can be called before declaration.
- ✅ Can be reused and called multiple times.
- ✅ Useful for defining reusable functions with clear names.

### **Use Cases**  
- Defining reusable utility functions.  
- Implementing business logic in a structured way.

### **Scenario-Based Example**  
Imagine you are creating an **audit logger** for a full-stack application. You need a function to log user actions.

```javascript
function logAction(user, action) {
    console.log(`${user} performed ${action}`);
}

logAction("Admin", "deleted a record"); 
// Output: Admin performed deleted a record
```

---

## **2. Function Expression (Anonymous or Named Function Expression)**  
A **Function Expression** is a function that is assigned to a variable. Unlike function declarations, they are **not hoisted**.

### **Syntax**  
```javascript
const multiply = function(x, y) {
    return x * y;
};
console.log(multiply(5, 3)); // 15
```

### **Key Features**  
- ✅ **Not hoisted** – Cannot be called before declaration.
- ✅ Can be **anonymous** (without a name) or **named**.
- ✅ More flexible as it can be assigned to variables, passed as arguments, etc.

### **Use Cases**  
- Used in **callbacks**, **event handlers**, and **closures**.  
- Helps in **modularity** by assigning functions to variables.  

### **Scenario-Based Example**  
In an **e-commerce website**, you need a function to apply a discount to a cart dynamically.

```javascript
const applyDiscount = function(price, discount) {
    return price - (price * discount);
};

console.log(applyDiscount(1000, 0.2)); // 800
```

---

## **3. Arrow Function (ES6 Feature)**  
Arrow functions are a **shorter syntax** for writing functions, introduced in ES6. They do **not bind their own `this`** value, making them useful in some contexts.

### **Syntax**  
```javascript
const add = (a, b) => a + b;
console.log(add(10, 5)); // 15
```

### **Key Features**  
- ✅ **Short syntax**, especially for one-liner functions.  
- ✅ **Does not have its own `this`**, instead it **lexically inherits `this`**.  
- ✅ Cannot be used as constructors.  

### **Use Cases**  
- **Callbacks and event listeners**.  
- **Functional programming** (map, filter, reduce).  
- **Avoids issues with `this` in object methods**.

### **Scenario-Based Example**  
In a **React application**, arrow functions are useful in event handlers.

```javascript
const button = document.getElementById("btn");

button.addEventListener("click", () => {
    console.log("Button Clicked!");
});
```

---

## **4. Anonymous Functions (Function Without a Name)**  
An **anonymous function** is a function that does not have a name. It is typically used in **function expressions** or as arguments to other functions.

### **Syntax**  
```javascript
setTimeout(function() {
    console.log("This runs after 2 seconds");
}, 2000);
```

### **Key Features**  
- ✅ Cannot be reused unless assigned to a variable.  
- ✅ Used in places where function reuse is not required.  
- ✅ Mostly used in **callbacks**.

### **Use Cases**  
- **Inline event handlers**.  
- **Immediately Invoked Function Expressions (IIFE)**.  
- **Asynchronous operations**.

### **Scenario-Based Example**  
In an **API call**, you need to execute a function after receiving the response.

```javascript
fetch("https://jsonplaceholder.typicode.com/users")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    });
```

---

## **Interview Questions and Answers**  

### **1. What is the difference between function declaration and function expression?**  
👉 **Function Declaration**: Hoisted, can be called before its definition.  
👉 **Function Expression**: Not hoisted, must be defined before use.

### **2. How do arrow functions differ from regular functions?**  
- **Arrow functions** do **not have their own `this`**, while regular functions do.  
- They **cannot be used as constructors**.  
- They **have a shorter syntax**.

### **3. Can an arrow function be used as a method inside an object?**  
🚫 **No!** Arrow functions do not have their own `this`, so they should not be used as object methods.

```javascript
const person = {
    name: "Dhanaraj",
    greet: () => {
        console.log(`Hello, ${this.name}`); // ❌ Undefined
    }
};
person.greet();
```

✅ **Correct Way (Use Regular Function)**  
```javascript
const person = {
    name: "Dhanaraj",
    greet() {
        console.log(`Hello, ${this.name}`); // ✅ Works
    }
};
person.greet();
```

---

## **Coding Questions**  

### **1. Write a function expression that returns the square of a number.**  
```javascript
const square = function(num) {
    return num * num;
};

console.log(square(4)); // 16
```

### **2. Convert the following function into an arrow function.**  
```javascript
function subtract(a, b) {
    return a - b;
}
```
✅ **Arrow Function Equivalent**  
```javascript
const subtract = (a, b) => a - b;
console.log(subtract(10, 4)); // 6
```

### **3. Use an IIFE (Immediately Invoked Function Expression) to print a message.**  
```javascript
(function() {
    console.log("I am an IIFE!");
})();
```

### **4. Create a function that takes another function as an argument and executes it.**  
```javascript
function executeCallback(callback) {
    console.log("Before calling the callback");
    callback();
    console.log("After calling the callback");
}

executeCallback(() => console.log("Inside Callback Function"));
