## JavaScript Array Methods

This document covers **push, pop, shift, unshift, splice, slice, map, filter, reduce, forEach, find, some, and every**, including their **concepts, interview questions, use cases, scenarios, and coding examples**.

---

### 🔹 1. `push()`
#### 📌 Concept:
- Adds one or more elements to the **end** of an array.
- Returns the **new length** of the array.

#### 🎯 Example
```javascript
let arr = [1, 2, 3];
arr.push(4, 5);
console.log(arr); // [1, 2, 3, 4, 5]
```

#### ❓ Interview Questions
1. How does `push()` modify an array?
2. What does `push()` return?
3. How do you add multiple elements using `push()`?

#### ✅ Use Cases
- Adding new items dynamically in a list (e.g., adding products to a cart).

#### 🏗 Scenario
You’re developing a **to-do list app** where a user can add tasks to the list.

```javascript
let tasks = ["Buy milk", "Send email"];
tasks.push("Complete project");
console.log(tasks); // ["Buy milk", "Send email", "Complete project"]
```

---

### 🔹 2. `pop()`
#### 📌 Concept:
- Removes the **last** element from an array.
- Returns the removed element.

#### 🎯 Example
```javascript
let arr = [10, 20, 30];
let lastElement = arr.pop();
console.log(lastElement); // 30
console.log(arr); // [10, 20]
```

#### ❓ Interview Questions
1. What does `pop()` return?
2. What happens when you call `pop()` on an empty array?

#### ✅ Use Cases
- Removing the last item from a stack (LIFO).

#### 🏗 Scenario
You are implementing an **Undo feature** in an application where the last action should be removed.

```javascript
let actions = ["Open file", "Edit text", "Save"];
actions.pop(); 
console.log(actions); // ["Open file", "Edit text"]
```

---

### 🔹 3. `shift()`
#### 📌 Concept:
- Removes the **first** element from an array.
- Returns the removed element.

#### 🎯 Example
```javascript
let arr = ["a", "b", "c"];
let firstElement = arr.shift();
console.log(firstElement); // "a"
console.log(arr); // ["b", "c"]
```

#### ❓ Interview Questions
1. How is `shift()` different from `pop()`?
2. What happens when `shift()` is used on an empty array?

#### ✅ Use Cases
- Implementing a **queue (FIFO)** structure.

#### 🏗 Scenario
In a **customer support queue**, the first customer in line should be attended to.

```javascript
let queue = ["Customer1", "Customer2", "Customer3"];
queue.shift();
console.log(queue); // ["Customer2", "Customer3"]
```

---

### 🔹 4. `unshift()`
#### 📌 Concept:
- Adds one or more elements to the **beginning** of an array.
- Returns the **new length** of the array.

#### 🎯 Example
```javascript
let arr = [2, 3, 4];
arr.unshift(1);
console.log(arr); // [1, 2, 3, 4]
```

#### ❓ Interview Questions
1. What is the difference between `push()` and `unshift()`?
2. What does `unshift()` return?

#### ✅ Use Cases
- Prepending new data dynamically.

#### 🏗 Scenario
You are displaying a **notification system** where the latest message should appear at the top.

```javascript
let notifications = ["Message2", "Message3"];
notifications.unshift("Message1");
console.log(notifications); // ["Message1", "Message2", "Message3"]
```

---

### 🔹 5. `splice()`
#### 📌 Concept:
- Removes, replaces, or inserts elements in an array.

#### 🎯 Example
```javascript
let arr = ["a", "b", "c", "d"];
arr.splice(1, 2, "x", "y"); 
console.log(arr); // ["a", "x", "y", "d"]
```

#### ❓ Interview Questions
1. What are the parameters of `splice()`?
2. How can you delete elements using `splice()`?

#### ✅ Use Cases
- Modifying array elements dynamically.

#### 🏗 Scenario
You are creating a **playlist** where songs can be removed or replaced.

---

### 🔹 6. `slice()`
#### 📌 Concept:
- Extracts a **portion** of an array.
- Does **not** modify the original array.

#### 🎯 Example
```javascript
let arr = [1, 2, 3, 4, 5];
let subArr = arr.slice(1, 4);
console.log(subArr); // [2, 3, 4]
console.log(arr); // [1, 2, 3, 4, 5]
```

---

### 🔹 7. `map()`
#### 📌 Concept:
- Transforms each element of an array and returns a **new** array.

#### 🎯 Example
```javascript
let numbers = [1, 2, 3];
let doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]
```

---

### 🔹 8. `filter()`
#### 📌 Concept:
- Returns a **new** array with elements that match a condition.

#### 🎯 Example
```javascript
let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]
```

---

### 🔹 9. `reduce()`
#### 📌 Concept:
- Reduces an array to a single value.

#### 🎯 Example
```javascript
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10
```

---

### 🔹 10. `forEach()`
#### 📌 Concept:
- Iterates through each element but **does not return** a new array.

#### 🎯 Example
```javascript
let arr = ["a", "b", "c"];
arr.forEach((item, index) => console.log(`${index}: ${item}`));
```

---

These methods are crucial for **data manipulation, UI updates, and functional programming**. 🚀
