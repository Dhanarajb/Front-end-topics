# **Object Manipulation in JavaScript**

## **1. Object Creation in JavaScript**
Objects in JavaScript are used to store key-value pairs. You can create an object in multiple ways.

### **Ways to create an object:**
#### **1. Using Object Literal (Most Common)**
```js
const person = {
  name: "Dhanaraj",
  age: 25,
  city: "Bangalore"
};
```

#### **2. Using `new Object()` (Less Preferred)**
```js
const person = new Object();
person.name = "Dhanaraj";
person.age = 25;
person.city = "Bangalore";
```

#### **3. Using Constructor Function**
```js
function Person(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
}
const person1 = new Person("Dhanaraj", 25, "Bangalore");
```

#### **4. Using Class (ES6)**
```js
class Person {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }
}
const person2 = new Person("Dhanaraj", 25, "Bangalore");
```

#### **5. Using `Object.create()` (Prototype-Based)**
```js
const prototypeObj = {
  greet: function () {
    return `Hello, my name is ${this.name}`;
  }
};
const person3 = Object.create(prototypeObj);
person3.name = "Dhanaraj";
person3.age = 25;
person3.city = "Bangalore";
console.log(person3.greet()); // Hello, my name is Dhanaraj
```

---

## **2. Accessing Object Properties**
JavaScript provides **two ways** to access object properties:

### **1. Dot Notation (`.`)**
- **Use when property names are known and valid identifiers**
```js
const user = { name: "Dhanaraj", age: 25 };
console.log(user.name); // Dhanaraj
console.log(user.age);  // 25
```

### **2. Bracket Notation (`[]`)**
- **Use when property names have spaces, special characters, or are dynamic**
```js
const user = { "full name": "Dhanaraj Bhaskar", age: 25 };
console.log(user["full name"]); // Dhanaraj Bhaskar

const key = "age";
console.log(user[key]); // 25
```

✅ **Best Practice**: Prefer dot notation unless the property name is dynamic.

---

## **3. Object Destructuring**
Destructuring allows extracting properties from objects in a cleaner way.

### **Basic Destructuring**
```js
const person = { name: "Dhanaraj", age: 25, city: "Bangalore" };
const { name, age } = person;

console.log(name); // Dhanaraj
console.log(age);  // 25
```

### **Destructuring with Default Values**
```js
const person = { name: "Dhanaraj", age: 25 };
const { name, city = "Unknown" } = person;

console.log(city); // Unknown (since city was not in the object)
```

### **Destructuring with Renaming**
```js
const person = { name: "Dhanaraj", age: 25 };
const { name: fullName } = person;

console.log(fullName); // Dhanaraj
```

---

## **4. Spread Operator (`...`)**
The spread operator is used to copy, merge, or modify objects.

### **1. Copying an Object (Shallow Copy)**
```js
const person = { name: "Dhanaraj", age: 25 };
const copyPerson = { ...person };

console.log(copyPerson); // { name: "Dhanaraj", age: 25 }
```

### **2. Merging Objects**
```js
const user = { name: "Dhanaraj", age: 25 };
const address = { city: "Bangalore", country: "India" };

const userDetails = { ...user, ...address };
console.log(userDetails); 
// { name: "Dhanaraj", age: 25, city: "Bangalore", country: "India" }
```

### **3. Overriding Properties**
```js
const user = { name: "Dhanaraj", age: 25 };
const updatedUser = { ...user, age: 26 };

console.log(updatedUser); // { name: "Dhanaraj", age: 26 }
```

---

## **5. Interview Questions & Answers**
### **Q1: What is the difference between dot notation (`.`) and bracket notation (`[]`) in object property access?**
✅ **Answer**:  
- Dot notation is preferred when the property name is a valid identifier.  
- Bracket notation is used when property names contain spaces, special characters, or are dynamic.

```js
const obj = { name: "Dhanaraj", "full name": "Dhanaraj Bhaskar" };
console.log(obj.name);         // ✅ Works
console.log(obj["full name"]); // ✅ Required for properties with spaces
```

---

## **6. Use Cases & Scenarios**
🔹 **1. API Response Handling**
```js
fetch("https://api.example.com/user")
  .then(response => response.json())
  .then(({ name, email }) => console.log(name, email));
```

🔹 **2. Updating Object Properties**
```js
const user = { name: "Dhanaraj", age: 25 };
const updatedUser = { ...user, age: 26 };
```

🔹 **3. Dynamic Property Access**
```js
const key = "city";
const user = { name: "Dhanaraj", city: "Bangalore" };

console.log(user[key]); // Bangalore
```

---

## **7. Coding Questions**
### **Q1: Write a function to swap two object properties.**
```js
function swapProperties(obj, key1, key2) {
  [obj[key1], obj[key2]] = [obj[key2], obj[key1]];
}

const person = { name: "Dhanaraj", age: 25 };
swapProperties(person, "name", "age");
console.log(person); // { name: 25, age: "Dhanaraj" }
```

---
