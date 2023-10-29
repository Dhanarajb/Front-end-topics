#### ForEach

> when you want to perform some operation on each element of an array without creating new array.

```
let arr = [1, 2, 3, 4, 5];

function printNum(el) {
  console.log(el);
}

Array.prototype.myforEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i]);
  }
};
arr.myforEach(printNum); 
```
> The forEach method doesn't change the original array, and it returns undefined. It's primarily used for iteration and doesn't produce a new array.

----
#### Map 

> When you want to modify each element of an array and create a new array with the modified value.

```
let arr = [1, 2, 3, 4, 5];

Array.prototype.MyMap = function (cb) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(cb(this[i]));
  }
  return res;
};
const res = arr.MyMap((el) => el * 3);
console.log(res);
```
> The map method in JavaScript is chainable and produces a new array, making it an immutable operation.
---
#### Filter

> Get an array of elements that satisfied a conditions.
```
let arr = [1, 2, 3, 4, 5];

Array.prototype.MyMap = function (cb) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      res.push(this[i]);
    }
  }
  return res;
};
const res = arr.MyMap((el) => el < 3);
console.log(res);
```
> The filter method in JavaScript creates a new array without changing the original one and can be used along with other array methods.
---
