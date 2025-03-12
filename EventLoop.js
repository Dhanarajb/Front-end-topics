## **Understanding the Event Loop in JavaScript**

The **Event Loop** is a crucial mechanism in JavaScript that enables asynchronous behavior, allowing JavaScript to execute non-blocking operations despite being **single-threaded**.

### **Components of the Event Loop**

1. **Call Stack**
   - A **LIFO (Last In, First Out)** stack that keeps track of function executions.
   - Whenever a function is called, it is pushed onto the stack, and when it completes, it is popped off.

2. **Web APIs (Browser APIs / Node APIs)**
   - JavaScript itself doesn’t have features like `setTimeout`, `fetch`, or `DOM manipulation`. These are provided by the **Web APIs (in the browser)** or **Node APIs (in Node.js)**.
   - When an asynchronous operation like `setTimeout` or `fetch` is called, it is **offloaded** to the Web API instead of blocking the main thread.

3. **Callback Queue (Task Queue / Macro Task Queue)**
   - Stores callback functions from Web APIs (`setTimeout`, `setInterval`, `setImmediate`, etc.).
   - When the **Call Stack** is empty, the Event Loop picks tasks from the **Callback Queue** and pushes them onto the stack.

4. **Microtask Queue (Priority Queue for Promises & Process.nextTick)**
   - Stores callbacks from **Promises** (`.then()`, `.catch()`, `.finally()`), **MutationObserver**, and **process.nextTick() (in Node.js)**.
   - The **Microtask Queue has higher priority** than the **Callback Queue**.

5. **Event Loop Mechanism**
   - Continuously checks if the **Call Stack is empty**.
   - If empty, it first processes all **Microtasks** before picking tasks from the **Callback Queue**.

---

### **How the Event Loop Works: Step-by-Step Example**

```javascript
console.log("Start");

setTimeout(() => {
  console.log("setTimeout callback");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise resolved");
});

console.log("End");
```

#### **Execution Order**
1. `"Start"` → Logs to console (Call Stack).
2. `setTimeout` is called → Moved to **Web APIs**.
3. `Promise.resolve().then()` → Moves callback (`console.log("Promise resolved")`) to the **Microtask Queue**.
4. `"End"` → Logs to console (Call Stack is now empty).
5. **Microtask Queue** (Highest Priority) → `"Promise resolved"` is executed.
6. **Callback Queue** → `"setTimeout callback"` is executed.

#### **Output**
```plaintext
Start
End
Promise resolved
setTimeout callback
```

---

## **Common Interview Questions & Answers on Event Loop**

### **1. What is the Event Loop in JavaScript?**
**Answer:**  
The Event Loop is a mechanism that enables JavaScript to handle **asynchronous** operations despite being **single-threaded**. It ensures that non-blocking tasks like `setTimeout`, `fetch`, and `Promise` callbacks are executed efficiently by prioritizing **Microtasks** over **Macrotasks** and only executing them when the **Call Stack** is empty.

---

### **2. Difference between Callback Queue and Microtask Queue?**

| Feature               | **Callback Queue (Macrotasks)**    | **Microtask Queue** (Priority) |
|----------------------|---------------------------------|---------------------------------|
| Examples            | `setTimeout`, `setInterval`, `setImmediate` | `Promise.then()`, `MutationObserver` |
| Execution Order     | Lower priority                 | Higher priority (executed first) |
| Checked By Event Loop | After Microtasks are cleared | Before Callback Queue |

---

### **3. Why does `Promise.resolve().then()` execute before `setTimeout` with 0ms delay?**
**Answer:**  
- **Microtasks (Promises) have higher priority** than Macrotasks (`setTimeout`).  
- Even if `setTimeout(() => {}, 0)` has **0ms delay**, it still goes to the **Callback Queue**, whereas the Promise callback is added to the **Microtask Queue**, which is executed first.

---

### **Real-World Use Cases of the Event Loop**

#### **1. Handling Asynchronous API Calls**
When calling an API (`fetch`), JavaScript doesn't block execution while waiting for the response.

```javascript
console.log("Fetching data...");
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => console.log("Data received:", data));
console.log("Other work continues...");
```

---

### **Coding Questions on Event Loop**

#### **1. Predict the Output**
```javascript
console.log("Start");

setTimeout(() => console.log("setTimeout 1"), 0);

Promise.resolve().then(() => console.log("Promise 1"));

setTimeout(() => console.log("setTimeout 2"), 0);

Promise.resolve().then(() => console.log("Promise 2"));

console.log("End");
```

**Expected Output:**
```plaintext
Start
End
Promise 1
Promise 2
setTimeout 1
setTimeout 2
```

✅ **Explanation:**
1. `"Start"` and `"End"` execute first (Call Stack).
2. Promises (`Promise 1`, `Promise 2`) go to **Microtask Queue** (executed next).
3. `setTimeout` callbacks are **Macrotasks**, so they execute after Microtasks.

---

### **Key Takeaways**  
✅ **Event Loop ensures non-blocking execution in JavaScript**  
✅ **Microtasks (Promises) execute before Macrotasks (setTimeout, setInterval)**  
✅ **Use cases include API calls, UI optimizations, and handling large data efficiently**  
✅ **Interviewers often test Event Loop knowledge with tricky execution order questions**
