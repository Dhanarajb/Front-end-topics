## **JavaScript: Parameters & Arguments – Default Parameters, Rest Parameters, Spread Operator**

In JavaScript, **parameters** are placeholders in function definitions, while **arguments** are the actual values passed when calling the function.

---

## **1. Default Parameters**
### **Concept**
- Default parameters allow function parameters to have predefined values if no argument is provided or if the argument is `undefined`.
- Introduced in **ES6**.

### **Syntax & Example**
```javascript
function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greet();         // Output: Hello, Guest!
greet("Dhanaraj"); // Output: Hello, Dhanaraj!
```

### **Interview Questions & Answers**  
#### **Q1: What are default parameters, and how do they work?**  
> Default parameters allow you to assign a default value to a function parameter. If the function is called without an argument, the default value is used.

#### **Q2: What happens if `undefined` is passed to a function with a default parameter?**  
> If `undefined` is explicitly passed, the default value is used. However, `null` is treated as a value.

```javascript
function test(x = 10) {
    console.log(x);
}
test(undefined);  // Output: 10
test(null);       // Output: null
```

### **Use Cases & Scenarios**  
- ✅ Setting fallback values when arguments are missing.  
- ✅ Making functions more robust without explicit `undefined` checks.

#### **Scenario: API Call with Optional Parameters**
```javascript
function fetchData(url, method = "GET") {
    console.log(`Fetching data from ${url} using ${method} method.`);
}

fetchData("https://api.example.com"); // Default method is GET
fetchData("https://api.example.com", "POST"); // Custom method
```

---

## **2. Rest Parameters (`...rest`)**
### **Concept**
- Rest parameters allow a function to accept **an indefinite number of arguments** as an array.
- Represented using `...` before the parameter name.
- **Always the last parameter** in a function.

### **Syntax & Example**
```javascript
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4, 5));  // Output: 15
```

### **Interview Questions & Answers**  
#### **Q1: What is the difference between arguments object and rest parameters?**  
> The `arguments` object (available in non-arrow functions) holds all arguments, but it’s **not an array**. Rest parameters (`...rest`) are an actual array.

```javascript
function demo() {
    console.log(arguments); // Arguments object
}
demo(1, 2, 3);

function demoRest(...args) {
    console.log(args); // Array of arguments
}
demoRest(1, 2, 3);
```

### **Use Cases & Scenarios**
- ✅ Handling variable numbers of arguments.  
- ✅ Utility functions like `sum()`, `max()`, `min()`.  

#### **Scenario: Concatenating Multiple Strings**
```javascript
function concatenate(separator, ...words) {
    return words.join(separator);
}

console.log(concatenate("-", "React", "Angular", "Vue")); // Output: React-Angular-Vue
```

---

## **3. Spread Operator (`...spread`)**
### **Concept**
- The spread operator (`...`) expands **iterable elements (arrays, objects, strings, etc.)** into individual elements.
- Works opposite to rest parameters.

### **Syntax & Example**
```javascript
const arr = [1, 2, 3];
console.log(...arr);  // Output: 1 2 3
```

### **Interview Questions & Answers**  
#### **Q1: What is the difference between rest and spread operators?**  
> **Rest (`...`) gathers multiple values into an array**, while **Spread (`...`) expands elements from an array, object, or string**.

#### **Q2: Can the spread operator be used for both arrays and objects?**  
> Yes, it works with **arrays**, **objects**, and **strings**.

### **Use Cases & Scenarios**
- ✅ Merging arrays or objects.  
- ✅ Cloning arrays/objects without reference issues.  
- ✅ Passing array elements as function arguments.

#### **Scenario: Merging Arrays**
```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = [...arr1, ...arr2];

console.log(merged); // Output: [1, 2, 3, 4, 5, 6]
```

#### **Scenario: Copying an Object Without Mutation**
```javascript
const user = { name: "Dhanaraj", age: 25 };
const updatedUser = { ...user, location: "Bangalore" };

console.log(updatedUser);
// Output: { name: "Dhanaraj", age: 25, location: "Bangalore" }
```

#### **Scenario: Passing Array Elements as Arguments**
```javascript
const numbers = [10, 20, 30];
console.log(Math.max(...numbers)); // Output: 30
```

---

## **Coding Questions**
### **Q1: Implement a function that takes any number of arguments and returns their product.**
```javascript
function product(...nums) {
    return nums.reduce((acc, num) => acc * num, 1);
}

console.log(product(2, 3, 4));  // Output: 24
```

### **Q2: Write a function that merges two objects with the second object overriding common properties.**
```javascript
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

const objA = { name: "John", age: 30 };
const objB = { age: 35, city: "NY" };

console.log(mergeObjects(objA, objB));
// Output: { name: "John", age: 35, city: "NY" }
```

---

## **Summary Table**
| Feature | Rest Parameter (`...rest`) | Spread Operator (`...spread`) |
|---------|-----------------|-----------------|
| Purpose | Collects multiple arguments into an array | Expands an array or object into individual elements |
| Data Type | Always an array | Works with arrays, objects, and strings |
| Function Use | Used in function parameters | Used in function calls, array merges, object cloning |
| Position | Must be the last parameter in a function | Can be used anywhere |

---

## **Final Thoughts**
- **Default Parameters**: Provide fallback values for missing arguments.
- **Rest Parameters (`...rest`)**: Collect multiple arguments into an array.
- **Spread Operator (`...spread`)**: Expands iterable elements into individual values.

Mastering these concepts will help you write cleaner and more flexible JavaScript functions. 🚀
