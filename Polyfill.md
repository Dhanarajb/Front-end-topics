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

---

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

#### Reduce

> Method execute the provide the function for each value of the array. The return value of the function is stored in an accumulator.

```
let arr = [1, 2, 3, 4, 5];

Array.prototype.MyReduce = function (cb, init) {
  let acc = init;
  for (let i = 0; i < this.length; i++) {
    acc = acc ? cb(acc, this[i]) : this[i];
  }
  return acc;
};
const acc = arr.MyReduce((acc, value) => acc + value, 0);
console.log(acc);
```

> Reduce processes the elements of an array to produce a single value, such as the sum of all elements, the maximum value, or a custom accumulation.

---

#### Call

> Invoke the function with a this context and argument provided individual

```
Function.prototype.MyCall = function (obj = {}, ...args) {
  obj.fn = this;
  obj.fn(...args);
};

const Person = {
  fname: 'dhanu',
  lname: 'Tom',
  fullName: function () {
    console.log(`${this.fname} ${this.lname}`);
  },
};

Person.fullName();

const Person2 = {
  fname: 'tom',
  lname: 'sweet',
};

Person.fullName.MyCall(Person2);
```

---

#### Apply

> Invoke the function with a this context and argument pass as an array

```
Function.prototype.MyApply = function (obj = {}, args = []) {
  obj.fn = this;
  obj.fn(...args);
};

const Person = {
  fname: 'dhanu',
  lname: 'Tom',
  fullName: function (age) {
    console.log(`${this.fname} ${this.lname} ${age}`);
  },
};

Person.fullName();

const Person2 = {
  fname: 'tom',
  lname: 'sweet',
};

Person.fullName.MyApply(Person2, [26]);
```

#### Bind

> Bind create new function and return the function with newly bound this context. If attaches the value of this passed as an argument to the function and return the function

```
Function.prototype.MyBind = function (...args) {
  const obj = this;
  return function () {
    obj.call(args[0]);
  };
};

const Person = {
  fname: 'dhanu',
  lname: 'Tom'
};

const Details =function () {
  console.log(`${this.fname} ${this.lname}`);
},

const printDetails = Details.MyBind(Person)
console.log(printDetails(26))
```

---

#### Find

> Returns the first element of the given array that satisfies the provided function condition.

```
let arr = [1, 2, 3, 4, 5];

Array.prototype.Myfind = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i]),index,this) {
      return this[i];
    }
  }
};
const res = arr.Myfind((el) => el < 3);
console.log(res);
```

---
