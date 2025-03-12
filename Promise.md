## **Understanding JavaScript Promises: `new Promise()`, `.then()`, `.catch()`, `.finally()`**

### **1. What is a Promise?**
A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

A Promise can be in one of the following states:
- **Pending** → The initial state, meaning the operation is still in progress.
- **Fulfilled** → The operation was successful, and a result is available.
- **Rejected** → The operation failed, and an error is available.

---

### **2. Creating a Promise (`new Promise()`)**
A Promise is created using the `new Promise()` constructor, which takes a function as an argument. This function receives two parameters:
- `resolve`: Call this function to fulfill the promise and return a value.
- `reject`: Call this function to reject the promise and return an error.

#### **Example: Creating a Basic Promise**
```javascript
const myPromise = new Promise((resolve, reject) => {
    let success = true; // Change to false to test rejection

    setTimeout(() => {
        if (success) {
            resolve("Data fetched successfully!");
        } else {
            reject("Error: Unable to fetch data.");
        }
    }, 2000); // Simulating an API call delay
});

// Handling the Promise
myPromise
    .then((result) => console.log(result)) // Executes if resolved
    .catch((error) => console.error(error)) // Executes if rejected
    .finally(() => console.log("Operation completed.")); // Always executes
```

---

### **3. Handling Promises**
To consume a Promise, we use:
1. `.then()` → Executes when the promise is fulfilled.
2. `.catch()` → Executes when the promise is rejected.
3. `.finally()` → Executes after promise completion, regardless of success or failure.

#### **Example: Chaining `.then()`**
```javascript
const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Step 1: Data loaded"), 1000);
});

fetchData
    .then((result) => {
        console.log(result);
        return "Step 2: Processing data";
    })
    .then((result) => {
        console.log(result);
        return "Step 3: Saving data";
    })
    .then((result) => console.log(result))
    .catch((error) => console.error("Error occurred:", error))
    .finally(() => console.log("Process completed"));
```

---

### **4. Use Cases of Promises**
✅ **Fetching data from an API (Async Operations)**  
✅ **Handling multiple asynchronous tasks sequentially**  
✅ **File operations (Reading/Writing files in Node.js)**  
✅ **Chaining dependent operations**  
✅ **Performing background tasks without blocking UI in front-end**  

---

### **5. Scenarios and Coding Examples**

#### **Scenario 1: Fetching Data Using Fetch API with Promises**
```javascript
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json()) // Convert response to JSON
    .then((data) => console.log("Post Title:", data.title))
    .catch((error) => console.error("Fetch error:", error))
    .finally(() => console.log("Fetch operation completed"));
```

#### **Scenario 2: Using Promises in Login Authentication**
```javascript
function login(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === "admin" && password === "1234") {
                resolve("Login Successful");
            } else {
                reject("Invalid Credentials");
            }
        }, 2000);
    });
}

// Handling the login function
login("admin", "1234")
    .then((message) => console.log(message))
    .catch((error) => console.error(error))
    .finally(() => console.log("Login attempt completed"));
```

#### **Scenario 3: Simulating a Payment Gateway**
```javascript
function processPayment(amount) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (amount > 0) {
                resolve(`Payment of ₹${amount} successful!`);
            } else {
                reject("Invalid payment amount.");
            }
        }, 3000);
    });
}

// Handling the payment function
processPayment(1000)
    .then((message) => console.log(message))
    .catch((error) => console.error(error))
    .finally(() => console.log("Payment process completed"));
```

---

### **6. Interview Questions and Answers**

#### **Q1: What is the difference between a callback and a Promise?**
📌 **Answer:**
- A **callback** is a function passed as an argument to another function, executed after an asynchronous task completes.
- A **Promise** is an object that represents the eventual completion (or failure) of an asynchronous operation.
- Promises avoid **callback hell** and provide better readability using `.then()`, `.catch()`, and `.finally()`.

#### **Q2: What happens if you don’t handle a rejected Promise?**
📌 **Answer:**  
If a rejected Promise is not handled using `.catch()`, it leads to an **"UnhandledPromiseRejection"** warning in Node.js or an error in the browser console.

#### **Q3: What is `.finally()` in Promises, and when would you use it?**
📌 **Answer:**  
The `.finally()` method is executed regardless of whether the Promise is resolved or rejected.  
It is commonly used for cleanup operations, like hiding a loading spinner.

#### **Q4: How do you handle multiple Promises at the same time?**
📌 **Answer:**  
Using `Promise.all()`, `Promise.allSettled()`, `Promise.race()`, and `Promise.any()`.  
- `Promise.all()` → Resolves when all Promises resolve or rejects if any fails.
- `Promise.allSettled()` → Resolves when all Promises complete, even if some fail.
- `Promise.race()` → Resolves/rejects as soon as one Promise settles.
- `Promise.any()` → Resolves as soon as one Promise succeeds.

#### **Q5: How do you convert a callback-based function to a Promise?**
📌 **Answer:** Use `new Promise()` and wrap the callback function.

##### **Example: Converting `setTimeout` to a Promise**
```javascript
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

delay(2000).then(() => console.log("2 seconds passed"));
```

---

### **7. Summary**
- `new Promise()` → Creates a new Promise.
- `.then()` → Handles successful completion.
- `.catch()` → Handles failure.
- `.finally()` → Runs regardless of success/failure.
- `Promise.all()` → Runs when all Promises resolve.
- `Promise.race()` → Runs when the first Promise settles.

---
