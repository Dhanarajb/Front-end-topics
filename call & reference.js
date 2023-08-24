In JavaScript, understanding "pass by value" and "pass by reference" can sometimes be a bit tricky, as the terms themselves might not apply in the exact same way as in 
  other programming languages. JavaScript uses a combination of these concepts when dealing with primitive types and reference types.

Pass by Value:
When you pass a primitive data type (such as a number, string, or boolean) to a function, a copy of the actual value is passed. This means that changes made to the 
  parameter inside the function do not affect the original value outside the function.

  
function modifyValue(x) {
  x = 10; // This modification does not affect the original value
}

let num = 5;
modifyValue(num);
console.log(num); // Output: 5
Pass by Reference (or Sharing):
When you pass an object or array to a function, you are passing a reference to the memory location where the object or array is stored. 
  This reference allows you to access and modify the same object or array inside the function, affecting the original object or array outside the function.

  
function modifyArray(arr) {
  arr.push(4); // This modification affects the original array
}

const myArray = [1, 2, 3];
modifyArray(myArray);
console.log(myArray); // Output: [1, 2, 3, 4]
It's important to note that JavaScript doesn't pass the reference itself but a copy of the reference. So, if you were to reassign the reference inside the function, 
  it wouldn't affect the reference outside the function.


function reassignArray(arr) {
  arr = [7, 8, 9]; // This reassignment does not affect the original array
}

const myArray = [1, 2, 3];
reassignArray(myArray);
console.log(myArray); // Output: [1, 2, 3]
