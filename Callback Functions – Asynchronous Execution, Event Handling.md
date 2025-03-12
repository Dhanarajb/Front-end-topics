## **Callback Functions in JavaScript**  
A **callback function** is a function passed as an argument to another function and is executed later, usually after an asynchronous operation is completed.

---

## **1. Understanding the Concept**
### **What is a Callback Function?**  
A callback function is simply a function that is passed as an argument to another function and is invoked inside that function.

### **Why Use Callback Functions?**  
Callbacks are primarily used for:
- **Asynchronous execution** – Handling tasks like API calls, reading files, or setTimeout operations.
- **Event handling** – Running functions when events occur (e.g., button clicks).
- **Modularization** – Passing behavior to another function for better reusability.

### **Example of a Callback Function**  
```javascript
function greet(name, callback) {
    console.log("Hello, " + name);
    callback(); // Executing the callback function
}

function sayBye() {
    console.log("Goodbye!");
}

greet("Dhanaraj", sayBye);
```
**Output:**  
```
Hello, Dhanaraj
Goodbye!
```

---

## **2. Callbacks and Asynchronous Execution**
JavaScript is **single-threaded**, but it can handle asynchronous tasks using **callbacks**.

### **Example: setTimeout with Callback**
```javascript
console.log("Start");

setTimeout(() => {
    console.log("Executing after 2 seconds");
}, 2000);

console.log("End");
```
**Output:**  
```
Start
End
Executing after 2 seconds
```

---

## **3. Callbacks in Event Handling**
Callbacks are heavily used in event-driven programming.

### **Example: Handling Button Click**
```javascript
document.getElementById("myButton").addEventListener("click", function () {
    console.log("Button was clicked!");
});
```

---

## **4. Callback Hell (Pyramid of Doom)**
When multiple asynchronous tasks depend on each other, callbacks lead to **nested** structures, making code hard to read.

### **Example of Callback Hell**
```javascript
function step1(callback) {
    setTimeout(() => {
        console.log("Step 1 completed");
        callback();
    }, 1000);
}

function step2(callback) {
    setTimeout(() => {
        console.log("Step 2 completed");
        callback();
    }, 1000);
}

function step3(callback) {
    setTimeout(() => {
        console.log("Step 3 completed");
        callback();
    }, 1000);
}

step1(() => {
    step2(() => {
        step3(() => {
            console.log("All steps completed!");
        });
    });
});
```
To avoid **callback hell**, we use **Promises** or **async/await**.

---

## **5. Interview Questions and Answers**
### **Basic Level Questions**
1. **What is a callback function?**  
   → A function passed as an argument to another function and executed later.

2. **Why do we use callbacks in JavaScript?**  
   → To handle asynchronous operations like API calls, event handling, and file reading.

3. **Difference between synchronous and asynchronous execution?**  
   → Synchronous code executes line by line, blocking further execution. Asynchronous code does not block and executes later using callbacks, promises, or async/await.

### **Intermediate Level Questions**
4. **What is callback hell? How do you avoid it?**  
   → Callback hell happens when multiple callbacks are nested, making code unreadable. It can be avoided using **Promises** or **async/await**.

5. **How are callbacks used in event handling?**  
   → Callbacks are passed to event listeners, which execute them when an event occurs (e.g., button click).

### **Advanced Level Questions**
6. **How do callbacks handle errors?**  
   → Callbacks often accept an error parameter as the first argument.
   ```javascript
   function fetchData(callback) {
       let error = false;
       if (error) {
           callback("Error occurred", null);
       } else {
           callback(null, "Data received");
       }
   }

   fetchData((err, data) => {
       if (err) {
           console.error(err);
       } else {
           console.log(data);
       }
   });
   ```

7. **How do callbacks differ from promises?**  
   → Callbacks use functions as arguments, while promises return an object that can be resolved or rejected.

---

## **6. Use Cases of Callbacks**
1. **Asynchronous Data Fetching (APIs)**
   ```javascript
   function fetchUserData(callback) {
       setTimeout(() => {
           let user = { id: 1, name: "Dhanaraj" };
           callback(user);
       }, 2000);
   }

   fetchUserData((user) => {
       console.log("User fetched:", user);
   });
   ```

2. **File Handling in Node.js**
   ```javascript
   const fs = require("fs");

   fs.readFile("file.txt", "utf8", (err, data) => {
       if (err) {
           console.error("Error reading file", err);
       } else {
           console.log("File content:", data);
       }
   });
   ```

---

## **7. Scenario-Based Questions**
### **Scenario:** You are fetching user details and after that, you need to fetch the user’s orders. How would you handle this with callbacks?
```javascript
function getUser(callback) {
    setTimeout(() => {
        console.log("User fetched");
        callback({ userId: 1 });
    }, 1000);
}

function getOrders(userId, callback) {
    setTimeout(() => {
        console.log("Orders fetched for user:", userId);
        callback(["Order1", "Order2"]);
    }, 1000);
}

getUser((user) => {
    getOrders(user.userId, (orders) => {
        console.log("User Orders:", orders);
    });
});
```

---

## **8. Coding Questions**
### **Q1: Write a function that executes a callback after a delay.**
```javascript
function delayedExecution(callback, delay) {
    setTimeout(callback, delay);
}

delayedExecution(() => console.log("Executed after delay"), 3000);
```

### **Q2: Implement a function that takes a callback and an array, and applies the callback to each element.**
```javascript
function applyCallback(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

applyCallback([1, 2, 3], (num) => console.log(num * 2));
```

---

## **Conclusion**
- **Callbacks** are fundamental in JavaScript for handling asynchronous tasks.
- They are used in **event handling, API calls, animations, file handling, etc.**
- **Callback hell** is a major issue that can be resolved using **Promises** and **async/await**.
