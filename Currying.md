## **Currying in JavaScript – Step-by-Step Breakdown with Examples**

### **🔹 What is Currying?**
Currying is a technique of **transforming a function with multiple arguments into a sequence of functions**, each taking a single argument.

### **💡 Simple Explanation**
Instead of calling a function like this:
```js
sum(2, 3, 4);
```
You call it like this:
```js
sum(2)(3)(4);
```
Each function takes one argument and **returns another function** until all arguments are received.

---

## **🔹 Step-by-Step Breakdown**

### **1️⃣ Normal Function (without Currying)**
A simple function to add three numbers:
```js
function sum(a, b, c) {
  return a + b + c;
}
console.log(sum(2, 3, 4)); // Output: 9
```

### **2️⃣ Convert it to a Curried Function**
```js
function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(sum(2)(3)(4)); // Output: 9
```

### **3️⃣ Using Arrow Functions (Shorter Version)**
```js
const sum = (a) => (b) => (c) => a + b + c;
console.log(sum(2)(3)(4)); // Output: 9
```

---

## **🔹 Why is Currying Useful?**
- **Reusability** – Once curried, functions can be reused for specific values.
- **Avoids Redundant Code** – Helps in breaking down complex operations.
- **Function Composition** – Works well with functional programming techniques.
- **Partial Application** – You can pass some arguments first and the rest later.

---

## **🔹 Real-Life Use Cases**

### **📌 1. URL Builder Example**
#### **With Currying**
```js
const buildUrl = (domain) => (path) => (id) => `${domain}/${path}/${id}`;
const apiBase = buildUrl("https://api.example.com");
const userEndpoint = apiBase("users");

console.log(userEndpoint(123)); // Output: https://api.example.com/users/123
console.log(userEndpoint(456)); // Output: https://api.example.com/users/456
```

### **📌 2. Event Handling Example**
```js
const handleEvent = (eventType) => (message) => {
  console.log(`Event: ${eventType}, Message: ${message}`);
};

const clickHandler = handleEvent("click");
clickHandler("Button clicked!");
// Output: Event: click, Message: Button clicked!
```

---

## **🔹 Interview Questions & Answers on Currying**

### **1️⃣ What is currying in JavaScript?**
Currying is a technique where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument.

### **2️⃣ What are the advantages of currying?**
1. **Reusability** – You can reuse functions for different scenarios.
2. **Partial Application** – You can fix some arguments and pass others later.
3. **Code Readability** – Cleaner and more modular functions.
4. **Avoids redundant function calls** – Helps optimize and structure code.

### **3️⃣ What is the difference between Currying and Partial Application?**
| Feature              | Currying                      | Partial Application |
|----------------------|-----------------------------|---------------------|
| Function Execution  | Converts function into multiple functions taking one argument at a time. | Fixes some arguments and allows the remaining ones to be passed later. |
| Example            | `sum(2)(3)(4)`               | `sum(2, 3)(4)`     |

---

## **🔹 Coding Questions on Currying**

### **1️⃣ Implement a curried function for multiplication**
```js
const multiply = (a) => (b) => (c) => a * b * c;
console.log(multiply(2)(3)(4)); // Output: 24
```

### **2️⃣ Convert a normal function to a curried function**
#### **Problem Statement**
Convert the following function into a curried function:
```js
function divide(a, b) {
  return a / b;
}
```
#### **Solution**
```js
const divide = (a) => (b) => a / b;
console.log(divide(10)(2)); // Output: 5
```

### **3️⃣ Create a curried function for checking user roles**
```js
const checkPermission = (role) => (action) => (resource) =>
  `${role} can ${action} on ${resource}`;

const adminPermission = checkPermission("Admin");
console.log(adminPermission("delete")("user")); // Output: Admin can delete on user
```

---

## **🔹 Common Pitfalls in Currying**
1. **Forgetting to Call Functions**  
   ```js
   console.log(sum(2, 3, 4)); // ❌ TypeError: sum is not a function
   ```
   ✅ Always call functions like `sum(2)(3)(4)`.

2. **Too Many Nested Calls**  
   If currying results in **too many nested function calls**, readability can be affected.

3. **Incorrect Order of Arguments**  
   Order matters in currying. If you change the order, the function will behave differently.

---

## **🔹 Summary**
| Feature          | Details |
|----------------|---------|
| **Definition** | Currying transforms a function with multiple arguments into a sequence of functions that take one argument at a time. |
| **Syntax** | `sum(2)(3)(4);` instead of `sum(2,3,4);` |
| **Advantages** | Reusability, Partial Application, Function Composition |
| **Use Cases** | API call functions, event handlers, permissions, utility functions |
| **Common Mistakes** | Forgetting to call the function properly, incorrect argument order |

---

## **🔹 Final Thoughts**
Currying is a **powerful concept** in JavaScript that can make your code **more modular and reusable**. It is frequently used in **functional programming** and **interviews**.


