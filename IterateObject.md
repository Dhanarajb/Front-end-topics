## Iterating Objects in JavaScript

JavaScript provides several built-in methods to iterate over objects efficiently. The three most commonly used methods are:

1. `Object.keys(obj)`: Returns an array of an object's keys.
2. `Object.values(obj)`: Returns an array of an object's values.
3. `Object.entries(obj)`: Returns an array of key-value pairs in an object.

---

## 1️⃣ Understanding the Concept

### 🔹 **1. `Object.keys(obj)`**
- Returns an **array** of the object's keys (property names).
- You can loop over these keys using methods like `.forEach()`, `.map()`, or `for...of`.

```js
const user = {
  name: "Dhanaraj",
  age: 26,
  job: "Software Engineer"
};

console.log(Object.keys(user));  
// Output: ["name", "age", "job"]

// Iterating over keys
Object.keys(user).forEach(key => {
  console.log(`${key}: ${user[key]}`);
});
```

---

### 🔹 **2. `Object.values(obj)`**
- Returns an **array** of the values of an object.
- This is useful when you only need to extract values, not keys.

```js
console.log(Object.values(user));  
// Output: ["Dhanaraj", 26, "Software Engineer"]

// Iterating over values
Object.values(user).forEach(value => {
  console.log(value);
});
```

---

### 🔹 **3. `Object.entries(obj)`**
- Returns an **array of key-value pairs** in the format `[key, value]`.
- This is useful when you need both the key and the value.

```js
console.log(Object.entries(user));
/* Output:
[
  ["name", "Dhanaraj"],
  ["age", 26],
  ["job", "Software Engineer"]
]
*/

// Iterating over key-value pairs
Object.entries(user).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
```

---

## 2️⃣ Interview Questions & Answers

### **Q1: What is the difference between `Object.keys()`, `Object.values()`, and `Object.entries()`?**
✅ **Answer:**
- `Object.keys(obj)`: Returns an array of the keys (property names).
- `Object.values(obj)`: Returns an array of values of the properties.
- `Object.entries(obj)`: Returns an array of key-value pairs.

---

### **Q2: How can you iterate over an object's properties using `Object.keys()`?**
✅ **Answer:**
```js
const obj = { a: 1, b: 2, c: 3 };
Object.keys(obj).forEach(key => {
  console.log(`${key}: ${obj[key]}`);
});
```

---

### **Q3: When should you use `Object.entries()` instead of `Object.keys()`?**
✅ **Answer:**
- Use `Object.keys()` when you only need the property names.
- Use `Object.entries()` when you need **both keys and values** together.

---

### **Q4: How can you convert an object into a key-value pair array?**
✅ **Answer:**
```js
const obj = { x: 10, y: 20 };
console.log(Object.entries(obj)); 
// Output: [["x", 10], ["y", 20]]
```

---

## 3️⃣ Use Cases

| Method | Use Case |
|--------|---------|
| `Object.keys()` | When you need only the property names. |
| `Object.values()` | When you only need values (e.g., summing numbers in an object). |
| `Object.entries()` | When you need both keys and values (e.g., filtering or mapping data). |

### 🔥 **Real-World Example: Filtering User Data**

```js
const users = {
  John: 25,
  Alice: 17,
  Bob: 30,
  Sarah: 15
};

const adults = Object.fromEntries(Object.entries(users).filter(([name, age]) => age >= 18));
console.log(adults);
// Output: { John: 25, Bob: 30 }
```

---

## 4️⃣ Scenarios

### **Scenario 1: Counting Occurrences in an Object**
```js
const str = "hello";
const count = {};

str.split('').forEach(char => {
  count[char] = (count[char] || 0) + 1;
});

console.log(count);  
// Output: { h: 1, e: 1, l: 2, o: 1 }
```

---

### **Scenario 2: Sorting an Object Based on Values**
```js
const scores = { Alice: 85, Bob: 75, Charlie: 90 };
const sortedScores = Object.fromEntries(Object.entries(scores).sort((a, b) => b[1] - a[1]));
console.log(sortedScores);
// Output: { Charlie: 90, Alice: 85, Bob: 75 }
```

---

## 5️⃣ Coding Questions

### **Question 1: Convert an Object to an Array**
```js
const data = { b: 3, a: 1, c: 2 };
const sortedValues = Object.values(data).sort((a, b) => a - b);
console.log(sortedValues);  
// Output: [1, 2, 3]
```

---

### **Question 2: Merge Two Objects and Sum Their Values**
```js
const obj1 = { a: 10, b: 20 };
const obj2 = { a: 5, c: 15 };

const merged = { ...obj1, ...obj2 };
Object.keys(obj1).forEach(key => {
  if (obj2[key] !== undefined) {
    merged[key] = obj1[key] + obj2[key];
  }
});

console.log(merged);  
// Output: { a: 15, b: 20, c: 15 }
```

---

## 🎯 Summary

| Method | Purpose | Returns |
|--------|---------|---------|
| `Object.keys(obj)` | Get property names | `["key1", "key2", ...]` |
| `Object.values(obj)` | Get property values | `[value1, value2, ...]` |
| `Object.entries(obj)` | Get key-value pairs | `[["key1", value1], ["key2", value2], ...]` |

These methods make it easy to iterate over objects, filter them, transform them, and perform data manipulations efficiently.
