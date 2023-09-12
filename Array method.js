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

filter(): Creates a new array with all elements that pass the test implemented by a provided function.

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
