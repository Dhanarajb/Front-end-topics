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






Understanding JavaScript array methods is essential for anyone working with JavaScript, from beginners to experts. These methods allow you to manipulate and interact with arrays efficiently. Let's go through some common array methods, starting from the basics and progressing to more advanced techniques.

Basic Array Methods:🔐🔐🔐

push(): Adds one or more elements to the end of an array and returns the new length.

pop(): Removes the last element from an array and returns it.

shift(): Removes the first element from an array and returns it.

unshift(): Adds one or more elements to the beginning of an array and returns the new length.

concat(): Combines two or more arrays and returns a new array without modifying the original arrays.

slice(): Returns a shallow copy of a portion of an array into a new array.

Intermediate Array Methods:🔐🔐🔐

splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

forEach(): Executes a provided function once for each array element.

map(): Creates a new array by applying a function to each element in an existing array.

filter(): creates a new array containing only the elements that satisfy a specified condition 

reduce(): Applies a function against an accumulator and each element in the array to reduce it to a single value.

find(): Returns the first element in an array that satisfies a provided testing function.

Advanced Array Methods:🔐🔐🔐

some(): Checks if at least one element in the array satisfies a provided testing function.

every(): Checks if all elements in the array satisfy a provided testing function.

sort(): Sorts the elements of an array in place and returns the sorted array.

reverse(): Reverses the order of elements in an array in place.

includes(): Checks if an array contains a specific element and returns a boolean.

findIndex(): Returns the index of the first element in an array that satisfies a provided testing function.

reduceRight(): Similar to reduce(), but processes the array from right to left.

flat(): Creates a new array with all sub-array elements concatenated into it recursively up to a specified depth.

flatMap(): Maps each element using a function and then flattens the result into a new array.

Understanding when and how to use these array methods is crucial for efficiently working with data in JavaScript. With these tools, you can perform various operations on arrays, from simple additions and removals to complex transformations and filtering, making your code more concise and readable.
✏🔐✏🔐✏🔐✏🔐✏🔐✏🔐✏🔐✏🔐✏🔐✏🔐✏🔐✏🔐✏🔐✏🔐✏🔐✏🔐✏🔐✏🔐✏🔐✏🔐✏🔐✏🔐✏🔐✏🔐✏🔐✏🔐✏🔐✏🔐✏🔐✏🔐✏🔐✏🔐✏🔐✏🔐✏🔐✏🔐✏🔐✏🔐✏🔐✏🔐✏🔐✏🔐✏🔐✏🔐✏🔐✏🔐✏🔐✏🔐✏🔐✏🔐✏🔐✏🔐✏🔐✏🔐✏🔐✏🔐✏🔐✏🔐✏🔐✏🔐
Array methods push(), pop(), shift(), unshift(), concat(), and slice() in JavaScript:
🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪
How do you add an element to the end of an array using push()?
You can use push() by specifying the element(s) you want to add as arguments, like this:

let arr = [1, 2, 3];
arr.push(4); // Adds 4 to the end of the array
🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪
How do you remove the last element from an array using pop()?
You can use pop() to remove and return the last element from an array:

let arr = [1, 2, 3];
let removedElement = arr.pop(); // Removes 3 and stores it in removedElement
🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪
How do you remove the first element from an array using shift()?
You can use shift() to remove and return the first element from an array:

let arr = [1, 2, 3];
let removedElement = arr.shift(); // Removes 1 and stores it in removedElement
🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪
How do you add elements to the beginning of an array using unshift()?
You can use unshift() by specifying the element(s) you want to add as arguments, like this:

let arr = [2, 3];
arr.unshift(1); // Adds 1 to the beginning of the array
🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪
How do you combine two arrays without modifying the original arrays using concat()?
You can use concat() to create a new array containing the combined elements of two or more arrays:

let arr1 = [1, 2];
let arr2 = [3, 4];
let combinedArray = arr1.concat(arr2); // Creates a new array [1, 2, 3, 4]
🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪
How do you create a shallow copy of a portion of an array using slice()?
You can use slice() to create a new array that contains elements from a specified start index to an end index 
  (exclusive) without modifying the original array:

let arr = [1, 2, 3, 4, 5];
let slicedArray = arr.slice(1, 4); // Creates a new array [2, 3, 4]
🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪
What is the difference between slice() and splice()?
slice() creates a new array by extracting a portion of an existing array, leaving the original array unchanged. 
  splice(), on the other hand, can be used to add, remove, or replace elements in the original array, modifying it in place.
🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪
Can you push() multiple elements at once?
Yes, you can push multiple elements at once by providing them as separate arguments to push():

let arr = [1, 2];
arr.push(3, 4); // Adds 3 and 4 to the end of the array
🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪
How do you remove multiple elements from an array using splice()?
You can use splice() to remove elements starting from a specified index and optionally specifying the number of elements to remove:

let arr = [1, 2, 3, 4, 5];
arr.splice(1, 2); // Removes 2 elements starting from index 1 (removes 2 and 3)
🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪
How do you add elements in the middle of an array using splice()?
You can use splice() to add elements at a specific index in the array:

let arr = [1, 2, 5];
arr.splice(2, 0, 3, 4); // Inserts 3 and 4 at index 2
🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪
What happens if you use pop() or shift() on an empty array?
If you use pop() or shift() on an empty array, they will return undefined, and the array will remain empty:

let emptyArr = [];
let poppedElement = emptyArr.pop(); // poppedElement is undefined
let shiftedElement = emptyArr.shift(); // shiftedElement is undefined
🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪
How can you check if an element exists in an array?
You can use the indexOf() method or the includes() method to check if an element exists in an array:

let arr = [1, 2, 3, 4, 5];
let element = 3;

// Using indexOf()
if (arr.indexOf(element) !== -1) {
    // Element exists in the array
}

// Using includes()
if (arr.includes(element)) {
    // Element exists in the array
}
🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪
How do you remove a specific element from an array using splice()?
You can use splice() along with indexOf() to remove a specific element by finding its index and then removing it:

let arr = [1, 2, 3, 4, 5];
let elementToRemove = 3;
let index = arr.indexOf(elementToRemove);
if (index !== -1) {
    arr.splice(index, 1); // Removes the element at the found index
}
🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪
How do you count the occurrences of a specific element in an array?
You can count the occurrences of an element in an array using a loop or the reduce() method:

Using a loop:
let arr = [1, 2, 2, 3, 2, 4, 5];
let elementToCount = 2;
let count = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elementToCount) {
        count++;
    }
}
Using reduce():

let arr = [1, 2, 2, 3, 2, 4, 5];
let elementToCount = 2;

let count = arr.reduce((acc, curr) => {
    if (curr === elementToCount) {
        return acc + 1;
    }
    return acc;
}, 0);
🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪
How do you reverse an array in JavaScript?
You can reverse an array using the reverse() method:

let arr = [1, 2, 3, 4, 5];
arr.reverse(); // Reverses the array to [5, 4, 3, 2, 1]
🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪
How can you find the maximum and minimum values in an array?
You can find the maximum and minimum values in an array using the Math.max() and Math.min() functions along with the apply() method:

let arr = [4, 2, 7, 1, 9];
let max = Math.max.apply(null, arr); // Maximum value: 9
let min = Math.min.apply(null, arr); // Minimum value: 1
🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪
How can you check if two arrays are equal in JavaScript?
You can check if two arrays are equal by converting them to strings and comparing the strings. However, 
  this method works only for simple arrays without nested objects or arrays.

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];

let areEqual = JSON.stringify(arr1) === JSON.stringify(arr2);
🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪
What is a shallow copy of an array?
A shallow copy of an array is a new array that contains references to the same objects or values as the original array. 
  Changes made to the objects or values inside the new array will affect the original array and vice versa.
🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪
How do you remove duplicate elements from an array?
You can remove duplicate elements from an array using a loop or by converting the array to a Set and then back to an array:

Using a loop:

let arr = [1, 2, 2, 3, 4, 4, 5];
let uniqueArr = [];

for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
        uniqueArr.push(arr[i]);
    }
}
Using a Set:

let arr = [1, 2, 2, 3, 4, 4, 5];
let uniqueArr = [...new Set(arr)];
🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪
How do you sort an array in JavaScript?
You can sort an array using the sort() method, which sorts the elements alphabetically by default.
  You can provide a custom sorting function for more complex sorting:

Alphabetical sorting:
let arr = ['apple', 'banana', 'cherry', 'date'];
arr.sort(); // Sorts the array alphabetically
Custom sorting (numeric):

let arr = [5, 2, 9, 1, 5];
arr.sort((a, b) => a - b); // Sorts the array numerically
🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪
For Loop:

It is one of the original ways of iterating over an array.
It typically involves specifying an iterator, counter, and incrementor to control the loop.
It can be faster in performance due to its direct control over iterations.
It allows you to use the break statement to exit the loop when a certain condition is met.
  
forEach Loop:

It is a newer way with less code to iterate over an array.
It simplifies the iteration process by abstracting away the iterator, counter, and incrementor, making the code more concise.
It can be slower in performance compared to a for loop because it uses a callback function for each element.
It doesn't allow the use of the break statement to exit the loop because of the callback function-based approach.
🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫
1. Iterate and Print Array Elements:

Question: How do you print each element of an array using forEach()?
Answer:
array.forEach(function(element) {
  console.log(element);
});
🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫
2. Modify Array Elements:

Question: Update each element of an array by adding 10 to each using forEach().
Answer:
array.forEach(function(element, index, arr) {
  arr[index] = element + 10;
});
🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫
3. Sum of Array Elements:

Question: Calculate the sum of all elements in an array using forEach().
Answer:
let sum = 0;
array.forEach(function(element) {
  sum += element;
});
🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫
4. Filter Array Elements:

Question: Use forEach() to create a new array containing only even numbers from an existing array.
Answer:
const evenNumbers = [];
array.forEach(function(element) {
  if (element % 2 === 0) {
    evenNumbers.push(element);
  }
});
🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫
5. Counting Elements:

Question: Count how many times a specific element appears in an array using forEach().
Answer:
let count = 0;
const elementToCount = 42;
array.forEach(function(element) {
  if (element === elementToCount) {
    count++;
  }
});
🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫
6. Removing Elements:

Question: Remove all occurrences of a specific element from an array using forEach().
Answer:
const elementToRemove = 7;
array.forEach(function(element, index, arr) {
  if (element === elementToRemove) {
    arr.splice(index, 1);
  }
});
🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫
7. Finding Maximum Element:

Question: Find the maximum element in an array using forEach().
Answer:
let max = Number.NEGATIVE_INFINITY;
array.forEach(function(element) {
  if (element > max) {
    max = element;
  }
});
🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫
8. Finding Minimum Element:

Question: Find the minimum element in an array using forEach().
Answer:
let min = Number.POSITIVE_INFINITY;
array.forEach(function(element) {
  if (element < min) {
    min = element;
  }
});
🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫
9. Checking for Element Existence:

Question: Check if a specific element exists in an array using forEach().
Answer:
let exists = false;
const elementToCheck = 99;
array.forEach(function(element) {
  if (element === elementToCheck) {
    exists = true;
  }
});
🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫
10. Removing Duplicates:

Question: Remove duplicate elements from an array using forEach().
Answer:
const uniqueArray = [];
array.forEach(function(element) {
  if (!uniqueArray.includes(element)) {
    uniqueArray.push(element);
  }
});
🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫
11. Array Manipulation:

Question: Use forEach() to create a new array where each element is squared.
Answer:
const squaredArray = [];
array.forEach(function(element) {
  squaredArray.push(element * element);
});
🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫
12. Finding the Index of an Element:

Question: Find the index of a specific element in an array using forEach().
Answer:
let foundIndex = -1;
const elementToFind = 55;
array.forEach(function(element, index) {
  if (element === elementToFind) {
    foundIndex = index;
  }
});
🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫
13. Capitalizing Strings:

Question: Use forEach() to capitalize each string element in an array.
Answer:
array.forEach(function(element, index, arr) {
  if (typeof element === 'string') {
    arr[index] = element.toUpperCase();
  }
});
🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫
14. Array Filtering:

Question: Create a new array with elements that pass a certain condition using forEach().
Answer:
const filteredArray = [];
array.forEach(function(element) {
  if (element > 50) {
    filteredArray.push(element);
  }
});
🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫
15. Modifying Array Elements Conditionally:

Question: Use forEach() to double each element if it's greater than 20.
Answer:
array.forEach(function(element, index, arr) {
  if (element > 20) {
    arr[index] = element * 2;
  }
});
🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫
16. Removing Elements Based on a Condition:

Question: Remove all elements less than 10 from an array using forEach().
Answer:
array.forEach(function(element, index, arr) {
  if (element < 10) {
    arr.splice(index, 1);
  }
});
🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫
17. Converting to Different Data Types:

Question: Convert all elements to strings using forEach().
Answer:
array.forEach(function(element, index, arr) {
  arr[index] = String(element);
});
🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫
18. Checking for Empty Strings:

Question: Check for and remove empty string elements from an array using forEach().
Answer:
array.forEach(function(element, index, arr) {
  if (element === '') {
    arr.splice(index, 1);
  }
});
🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫
19. Counting Positive Numbers:

Question: Count the number of positive elements in an array using forEach().
Answer:
let count = 0;
array.forEach(function(element) {
  if (element > 0) {
    count++;
  }
});
🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫
20. Array Transformation:

Question: Transform each element of an array by adding 5 to it using forEach().
Answer:
array.forEach(function(element, index, arr) {
  arr[index] = element + 5;
});
These coding questions and answers should help you practice and understand how to use the forEach() method effectively 
  in various scenarios when working with arrays in JavaScript.
🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫
Double each element in an array:

const originalArray = [1, 2, 3, 4];
const doubledArray = originalArray.map((element) => element * 2);
🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
Convert an array of strings to uppercase:

const words = ['hello', 'world'];
const uppercasedWords = words.map((word) => word.toUpperCase());
🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
Square each element in an array:

const numbers = [1, 2, 3, 4];
const squaredNumbers = numbers.map((number) => number ** 2);
🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
Extract values of a specific property from an array of objects:

const people = [{ name: 'Alice' }, { name: 'Bob' }];
const names = people.map((person) => person.name);
🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
Add a prefix to each string in an array:

const fruits = ['apple', 'banana', 'cherry'];
const prefixedFruits = fruits.map((fruit) => 'delicious ' + fruit);
🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
Calculate the length of each string in an array:

const words = ['apple', 'banana', 'cherry'];
const lengths = words.map((word) => word.length);
🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
Convert Fahrenheit temperatures to Celsius:

const fahrenheitTemperatures = [32, 68, 104];
const celsiusTemperatures = fahrenheitTemperatures.map((fahrenheit) =>
  ((fahrenheit - 32) * 5) / 9
);
🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
Filter out even numbers from an array and double the remaining ones:

const numbers = [1, 2, 3, 4, 5];
const filteredAndDoubled = numbers
  .filter((number) => number % 2 !== 0)
  .map((number) => number * 2);
🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
Convert an array of numbers to strings:

const numbers = [1, 2, 3, 4];
const numberStrings = numbers.map((number) => String(number));
🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
Extract the first letter from each word in an array:

const words = ['apple', 'banana', 'cherry'];
const firstLetters = words.map((word) => word.charAt(0));
🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
Find the square root of each element in an array:

const numbers = [9, 16, 25];
const squareRoots = numbers.map((number) => Math.sqrt(number));
🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
Create an array of HTML elements from an array of data:

const data = ['apple', 'banana', 'cherry'];
const elements = data.map((item) => `<li>${item}</li>`);
🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
Calculate the area of rectangles using width and height values:

const rectangles = [
  { width: 5, height: 10 },
  { width: 3, height: 7 },
];
const areas = rectangles.map((rectangle) => rectangle.width * rectangle.height);
🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
Capitalize the first letter of each word in an array of strings:

const words = ['hello', 'world'];
const capitalizedWords = words.map((word) =>
  word.charAt(0).toUpperCase() + word.slice(1)
);
🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
Calculate the sum of digits in a number:

const numbers = [123, 456, 789];
const digitSums = numbers.map((number) =>
  String(number).split('').reduce((acc, digit) => acc + parseInt(digit), 0)
);
🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
Convert an array of words to sentence case:

const words = ['hello', 'world'];
const sentenceCase = words.map(
  (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
);
🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
Remove duplicates from an array:

const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = [...new Set(numbers)];
🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
Convert an array of Fahrenheit temperatures to Kelvin:

const fahrenheitTemperatures = [32, 68, 104];
const kelvinTemperatures = fahrenheitTemperatures.map((fahrenheit) =>
  ((fahrenheit - 32) * 5) / 9 + 273.15
);
🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
Calculate the total price of items in a shopping cart:

const cart = [
  { name: 'item1', price: 10 },
  { name: 'item2', price: 20 },
  { name: 'item3', price: 30 },
];
const totalPrice = cart.map((item) => item.price).reduce((acc, price) => acc + price, 0);
🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
Reverse the strings in an array:

const words = ['apple', 'banana', 'cherry'];
const reversedWords = words.map((word) => word.split('').reverse().join(''));
These examples demonstrate various use cases of the map() function in JavaScript, which is a powerful tool 
  for transforming and processing data in arrays.
  🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
Filter out even numbers from an array:

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((number) => number % 2 === 0);
🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
Filter names starting with 'A' from an array of names:

const names = ['Alice', 'Bob', 'Anna', 'David'];
const filteredNames = names.filter((name) => name.startsWith('A'));
🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
Filter out negative numbers from an array:

const numbers = [-1, 2, -3, 4, -5];
const positiveNumbers = numbers.filter((number) => number >= 0);
🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
Filter objects with a specific property value from an array of objects:

const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 },
];
const adults = people.filter((person) => person.age >= 30);
🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
Filter out duplicate values from an array:

const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = numbers.filter((value, index, self) => self.indexOf(value) === index);
🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
Filter strings longer than a specific length from an array:

const words = ['apple', 'banana', 'cherry', 'date'];
const longWords = words.filter((word) => word.length > 5);
🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
Filter out empty strings from an array:

const strings = ['apple', '', 'banana', '', 'cherry'];
const nonEmptyStrings = strings.filter((str) => str !== '');
🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
Filter objects containing a specific key from an array of objects:

const products = [
  { name: 'apple', price: 1 },
  { price: 2 },
  { name: 'banana', price: 3 },
];
const productsWithName = products.filter((product) => 'name' in product);
🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
Filter prime numbers from an array of numbers:

function isPrime(number) {
  if (number <= 1) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const primeNumbers = numbers.filter((number) => isPrime(number));
🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
Filter objects based on a range of values from an array of objects:

const products = [
  { name: 'apple', price: 1 },
  { name: 'banana', price: 2 },
  { name: 'cherry', price: 3 },
];
const affordableProducts = products.filter((product) => product.price <= 2);
🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
Filter out null and undefined values from an array:

const values = [1, null, 2, undefined, 3, 4];
const filteredValues = values.filter((value) => value !== null && value !== undefined);
🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
Filter words containing a specific substring from an array:

const words = ['apple', 'banana', 'cherry', 'date'];
const filteredWords = words.filter((word) => word.includes('an'));
🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
Filter objects with multiple conditions from an array of objects:

const products = [
  { name: 'apple', price: 1, inStock: true },
  { name: 'banana', price: 2, inStock: false },
  { name: 'cherry', price: 3, inStock: true },
];
const affordableInStockProducts = products.filter(
  (product) => product.price <= 2 && product.inStock
);
🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
Filter out elements at odd indices from an array:

const numbers = [1, 2, 3, 4, 5, 6];
const evenIndexedNumbers = numbers.filter((_, index) => index % 2 === 0);
🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
Filter objects based on a date range from an array of objects:

const events = [
  { name: 'Event1', date: '2023-01-15' },
  { name: 'Event2', date: '2023-02-20' },
  { name: 'Event3', date: '2023-03-25' },
];
const upcomingEvents = events.filter((event) => new Date(event.date) > new Date());
🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
Filter out elements greater than a specified value from an array:

const numbers = [10, 20, 30, 40, 50];
const numbersLessThan30 = numbers.filter((number) => number < 30);
🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
Filter out non-numeric values from an array:

const mixedValues = [1, 'two', 3, 'four', 5];
const numericValues = mixedValues.filter((value) => typeof value === 'number');
🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
Filter objects with specific key-value pairs from an array of objects:

const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 },
];
const youngAlices = people.filter((person) => person.name === 'Alice' && person.age < 30);
🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
Filter out elements not matching a regular expression from an array:

const words = ['apple', 'banana', 'cherry', 'date'];
const matchingWords = words.filter((word) => /a/.test(word));
🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
Filter objects with a specific property value from an array of objects:

const products = [
  { name: 'apple', category: 'fruit' },
  { name: 'carrot', category: 'vegetable' },
  { name: 'banana', category: 'fruit' },
];
const fruitProducts = products.filter((product) => product.category === 'fruit');
🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨

Sum of Array Elements using reduce():
🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧
Question: Write a JavaScript code snippet to find the sum of all elements in an array using the reduce() function.
Answer:
const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // Output: 15
🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧
Find Maximum Element using reduce():

Question: Write a code snippet to find the maximum element in an array using the reduce() function.
Answer:
const arr = [12, 5, 27, 8, 16];
const max = arr.reduce((accumulator, current) => Math.max(accumulator, current), arr[0]);
console.log(max); // Output: 27
🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧
Flatten an Array using reduce():

Question: Write a code snippet to flatten a nested array into a single array using reduce().
Answer:
const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flattenedArray = nestedArray.reduce((accumulator, current) => accumulator.concat(current), []);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]
🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧
Counting Occurrences using reduce():

Question: Write a code snippet to count the occurrences of each element in an array using reduce().
Answer:
const arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
const countOccurrences = arr.reduce((accumulator, current) => {
  accumulator[current] = (accumulator[current] || 0) + 1;
  return accumulator;
}, {});
console.log(countOccurrences); // Output: {1: 1, 2: 2, 3: 3, 4: 4}
🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧
Concatenate Array of Strings using reduce():

Question: Write a code snippet to concatenate an array of strings into a single string using reduce().
Answer:
const strArray = ['Hello', ' ', 'World', '!'];
const concatenatedString = strArray.reduce((accumulator, current) => accumulator + current, '');
console.log(concatenatedString); // Output: 'Hello World!'
🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧
Product of Array Elements using reduce():

Question: Write a code snippet to find the product of all elements in an array using reduce().
Answer:
const arr = [2, 3, 4, 5];
const product = arr.reduce((accumulator, current) => accumulator * current, 1);
console.log(product); // Output: 120
🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧
Custom Reduce Function:

Question: Implement a custom reduce() function that works like the built-in reduce() function.
Answer:
Array.prototype.customReduce = function(callback, initialValue) {
  let accumulator = initialValue === undefined ? this[0] : initialValue;
  for (let i = initialValue === undefined ? 1 : 0; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  return accumulator;
};
🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧
Find Average using reduce():

Question: Write a code snippet to find the average of elements in an array using reduce().
Answer:
const arr = [10, 20, 30, 40, 50];
const average = arr.reduce((accumulator, current, index, array) => {
  accumulator += current;
  if (index === array.length - 1) {
    return accumulator / array.length;
  } else {
    return accumulator;
  }
}, 0);
console.log(average); // Output: 30
🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧
Remove Duplicate Elements using reduce():

Question: Write a code snippet to remove duplicate elements from an array using reduce().
Answer:
const arr = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = arr.reduce((accumulator, current) => {
  if (!accumulator.includes(current)) {
    accumulator.push(current);
  }
  return accumulator;
}, []);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧
Calculate Factorial using reduce():

Question: Write a code snippet to calculate the factorial of a number using reduce().
Answer:
const n = 5;
const factorial = Array.from({ length: n }, (_, i) => i + 1).reduce((accumulator, current) => accumulator * current, 1);
console.log(factorial); // Output: 120
🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧
Find Longest Word in Array using reduce():

Question: Write a code snippet to find the longest word in an array of strings using reduce().
Answer:
const words = ['apple', 'banana', 'cherry', 'date', 'fig'];
const longestWord = words.reduce((accumulator, current) => (current.length > accumulator.length ? current : accumulator), '');
console.log(longestWord); // Output: 'banana'
🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧
Grouping Elements by Property using reduce():

Question: Write a code snippet to group an array of objects by a specific property using reduce().
Answer:
const data = [
  { category: 'Fruit', name: 'Apple' },
  { category: 'Fruit', name: 'Banana' },
  { category: 'Vegetable', name: 'Carrot' },
  { category: 'Fruit', name: 'Cherry' },
];

const groupedData = data.reduce((accumulator, current) => {
  const key = current.category;
  if (!accumulator[key]) {
    accumulator[key] = [];
  }
  accumulator[key].push(current);
  return accumulator;
}, {});

console.log(groupedData);
// Output: { Fruit: [ { category: 'Fruit', name: 'Apple' }, { category: 'Fruit', name: 'Banana' }, { category: 'Fruit', name: 'Cherry' } ],
//           Vegetable: [ { category: 'Vegetable', name: 'Carrot' } ] }
🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧
Find the First Occurrence of an Element using reduce():

Question: Write a code snippet to find the index of the first occurrence of a specific element in an array using reduce().
Answer:
const arr = [10, 20, 30, 40, 50];
const target = 30;
const firstIndex = arr.reduce((accumulator, current, index) => {
  if (accumulator === -1 && current === target) {
    return index;
  }
  return accumulator;
}, -1);
console.log(firstIndex); // Output: 2 (Index of the first occurrence of 30)
🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧
Remove Falsy Values using reduce():

Question: Write a code snippet to remove falsy values (e.g., false, null, 0, "") from an array using reduce().
Answer:
const arr = [0, 1, false, true, '', 'hello', null];
const filteredArray = arr.reduce((accumulator, current) => {
  if (current) {
    accumulator.push(current);
  }
  return accumulator;
}, []);
console.log(filteredArray); // Output: [1, true, 'hello']
🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧
Find Common Elements in Arrays using reduce():

Question: Write a code snippet to find the common elements between two arrays using reduce().
Answer:
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];
const commonElements = arr1.reduce((accumulator, current) => {
  if (arr2.includes(current)) {
    accumulator.push(current);
  }
  return accumulator;
}, []);
console.log(commonElements); // Output: [3, 4, 5]
🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧
Calculate the Power of Numbers using reduce():

Question: Write a code snippet to calculate the result of raising each element in an array to a specific power using reduce().
Answer:
const arr = [2, 3, 4, 5];
const power = 3;
const poweredArray = arr.reduce((accumulator, current) => {
  accumulator.push(Math.pow(current, power));
  return accumulator;
}, []);
console.log(poweredArray); // Output: [8, 27, 64, 125]
🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧
Implement map() using reduce():

Question: Implement a custom map() function that works like the built-in map() function using reduce().
Answer:
Array.prototype.customMap = function(callback) {
  return this.reduce((accumulator, current, index, array) => {
    accumulator.push(callback(current, index, array));
    return accumulator;
  }, []);
};
🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧
Calculate the Fibonacci Sequence using reduce():

Question: Write a code snippet to generate the Fibonacci sequence up to a given number of terms using reduce().
Answer:
const n = 8;
const fibonacciSequence = Array.from({ length: n }, (_, index) =>
  index < 2 ? index : null
).reduce((accumulator, _, index) => {
  if (index < 2) {
    accumulator.push(index);
  } else {
    const nextFibonacci = accumulator[index - 1] + accumulator[index - 2];
    accumulator.push(nextFibonacci);
  }
  return accumulator;
}, []);
console.log(fibonacciSequence); // Output: [0, 1, 1, 2, 3, 5, 8, 13]
🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧
Group Words by Length using reduce():

Question: Write a code snippet to group an array of words by their length using reduce().
Answer:
const words = ['apple', 'banana', 'cherry', 'date', 'fig'];
const groupedByLength = words.reduce((accumulator, current) => {
  const length = current.length;
  if (!accumulator[length]) {
    accumulator[length] = [];
  }
  accumulator[length].push(current);
  return accumulator;
}, {});
console.log(groupedByLength);
// Output: { '5': ['apple'], '6': ['banana', 'cherry'], '4': ['date', 'fig'] }
🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧
Calculate the Exponential Average using reduce():

Question: Write a code snippet to calculate the exponential moving average of an array of values using reduce().
Answer:
const values = [10, 20, 30, 40, 50];
const smoothingFactor = 0.2;
const exponentialMovingAverage = values.reduce((accumulator, current, index) => {
  if (index === 0) {
    return current;
  }
  return (1 - smoothingFactor) * accumulator + smoothingFactor * current;
}, 0);
console.log(exponentialMovingAverage); // Output: 26 (rounded to the nearest integer)
These coding interview questions and answers should help you understand and practice the reduce() function in various contexts.
🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧
Find First Even Number using find():

Question: Write a JavaScript code snippet to find the first even number in an array using the find() method.
Answer:
javascript
Copy code
const numbers = [1, 3, 5, 4, 7, 8, 9];
const firstEven = numbers.find((number) => number % 2 === 0);
console.log(firstEven); // Output: 4
🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲
Find Object by Property using find():

Question: Write a code snippet to find an object in an array of objects based on a specific property using the find() method.
Answer:
javascript
Copy code
const students = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];
const targetId = 2;
const student = students.find((student) => student.id === targetId);
console.log(student); // Output: { id: 2, name: 'Bob' }
🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲
Find First String with Length Greater Than 5 using find():

Question: Write a code snippet to find the first string in an array with a length greater than 5 characters using the find() method.
Answer:
javascript
Copy code
const words = ['apple', 'banana', 'cherry', 'date', 'fig'];
const longWord = words.find((word) => word.length > 5);
console.log(longWord); // Output: 'banana'
🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲
Find Prime Number using find():

Question: Write a code snippet to find the first prime number in an array of numbers using the find() method.
Answer:
javascript
Copy code
const numbers = [4, 9, 15, 7, 11, 22, 29];
const isPrime = (number) => {
  if (number <= 1) return false;
  if (number <= 3) return true;
  if (number % 2 === 0 || number % 3 === 0) return false;
  let i = 5;
  while (i * i <= number) {
    if (number % i === 0 || number % (i + 2) === 0) return false;
    i += 6;
  }
  return true;
};
const firstPrime = numbers.find((number) => isPrime(number));
console.log(firstPrime); // Output: 7
🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲
Find Missing Element in Array using find():

Question: Write a code snippet to find the missing element in an array of consecutive integers using the find() method.
Answer:
javascript
Copy code
const numbers = [1, 2, 3, 5, 6, 7, 8];
const findMissing = (arr) => {
  const n = arr.length + 1;
  const sumOfNumbers = (n * (n + 1)) / 2;
  const sumOfArray = arr.reduce((accumulator, current) => accumulator + current, 0);
  return sumOfNumbers - sumOfArray;
};
const missingNumber = findMissing(numbers);
console.log(missingNumber); // Output: 4
🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲🔲
