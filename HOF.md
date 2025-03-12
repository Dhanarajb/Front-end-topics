## **Higher-Order Functions in JavaScript**

Higher-order functions (HOFs) are functions that either:
1. **Take another function as an argument** (callback function).
2. **Return a function as a result**.

They are a key concept in functional programming and help make code more readable, reusable, and declarative.

---

## **1. Understanding Higher-Order Functions**

### **Example 1: Function that takes a function as an argument**
```javascript
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

greet("Dhanaraj", sayBye);
```

### **Example 2: Function that returns another function**
```javascript
function multiplier(factor) {
    return function (number) {
        return number * factor;
    };
}

const double = multiplier(2);
console.log(double(5)); // Output: 10
```

---

## **2. Key Higher-Order Functions in JavaScript**

### **a) `map()`**
Used to **transform** each element of an array by applying a function.

```javascript
const celsius = [0, 10, 20, 30];
const fahrenheit = celsius.map(temp => (temp * 9/5) + 32);
console.log(fahrenheit); // Output: [32, 50, 68, 86]
```

**Use Cases:**
- Data transformation.
- Extracting specific properties from an object array.

---

### **b) `filter()`**
Used to **filter elements** based on a condition.

```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6]
```

**Use Cases:**
- Filtering users based on age, status, or permissions.
- Removing unwanted data.

---

### **c) `reduce()`**
Used to **reduce an array to a single value**.

```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 15
```

**Use Cases:**
- Aggregating data.
- Counting occurrences in an array.

---

### **d) Function Returning Function**
Used for **currying** and function composition.

```javascript
function greetMessage(time) {
    return function(name) {
        return `Good ${time}, ${name}!`;
    };
}

const morningGreet = greetMessage("morning");
console.log(morningGreet("Dhanaraj")); // Output: Good morning, Dhanaraj!
```

**Use Cases:**
- Creating specialized functions dynamically.
- Implementing **currying**.

---

## **3. Scenario-Based Explanation**

### **Scenario: E-Commerce Filtering and Pricing**

```javascript
const products = [
    { name: "Shoes", price: 2000 },
    { name: "Bag", price: 800 },
    { name: "Watch", price: 1500 },
    { name: "Belt", price: 500 }
];

// 1. Filter products above ₹1000
const expensiveProducts = products.filter(product => product.price > 1000);

// 2. Extract names of filtered products
const productNames = expensiveProducts.map(product => product.name);

// 3. Calculate total price
const totalPrice = expensiveProducts.reduce((acc, product) => acc + product.price, 0);

console.log(productNames); // Output: ['Shoes', 'Watch']
console.log(totalPrice); // Output: 3500
```

---

## **4. Coding Questions for Practice**

### **Q1: Implement `map()`, `filter()`, and `reduce()` manually.**

```javascript
Array.prototype.customMap = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
};

Array.prototype.customFilter = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};

Array.prototype.customReduce = function(callback, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
};

// Testing
const arr = [1, 2, 3, 4, 5];
console.log(arr.customMap(num => num * 2)); // [2, 4, 6, 8, 10]
console.log(arr.customFilter(num => num % 2 === 0)); // [2, 4]
console.log(arr.customReduce((sum, num) => sum + num, 0)); // 15
```

### **Q2: Find the longest word in a sentence using `reduce()`.**

```javascript
const sentence = "The quick brown fox jumps over the lazy dog";
const longestWord = sentence.split(" ").reduce((longest, word) => 
    word.length > longest.length ? word : longest, ""
);
console.log(longestWord); // Output: "jumps"
```

---

## **5. Summary**

| Function | Purpose | Returns |
|----------|---------|---------|
| `map()` | Transforms each element | New array |
| `filter()` | Filters elements based on condition | New array |
| `reduce()` | Reduces array to a single value | Single value |
| Function Returning Function | Creates reusable functions | Function |

By mastering higher-order functions, you'll write **cleaner, more readable, and reusable** JavaScript code, which is a must-have skill for interviews and real-world applications. 🚀
