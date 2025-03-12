# 🔥 Understanding `this` Keyword in JavaScript

## 1️⃣ What is `this` in JavaScript?
- In JavaScript, `this` refers to the object that is executing the function.
- The value of `this` depends on **how** and **where** a function is called, not where it is written.

---

## 2️⃣ Behavior of `this` in Different Scenarios

### 📌 Regular Functions vs Arrow Functions

| Function Type       | Behavior of `this` |
|---------------------|---------------------|
| **Regular Function** | `this` depends on the calling object (runtime binding). |
| **Arrow Function**   | `this` is lexically inherited from the surrounding scope. |

### ✅ Example: Regular Function vs Arrow Function
```javascript
const obj = {
  name: "Dhanaraj",
  regularFunction: function () {
    console.log("Regular Function:", this.name);
  },
  arrowFunction: () => {
    console.log("Arrow Function:", this.name);
  },
};

obj.regularFunction(); // Regular Function: Dhanaraj
obj.arrowFunction(); // Arrow Function: undefined (or window.name in browsers)
