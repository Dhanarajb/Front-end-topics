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
