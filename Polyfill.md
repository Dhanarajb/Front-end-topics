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
