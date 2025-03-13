## Deep Copy vs. Shallow Copy in JavaScript

### **1. Concept Breakdown**
In JavaScript, copying objects can be categorized into **shallow copy** and **deep copy** based on how the nested objects are handled.

- **Shallow Copy**: A new object is created, but **nested objects (references) are still shared** between the original and copied object.
- **Deep Copy**: A completely independent object is created, including all nested objects, so changes in the copied object do not affect the original.

---

### **2. Methods of Copying Objects**
#### **(A) Object.assign() – Shallow Copy**
- `Object.assign(target, source)` copies properties from the source object to the target object.
- It only performs a shallow copy, meaning **nested objects remain referenced**.

##### **Example:**
```javascript
const obj1 = { name: "John", address: { city: "Bangalore" } };
const obj2 = Object.assign({}, obj1);

obj2.name = "Doe"; 
obj2.address.city = "Mumbai"; 

console.log(obj1); // { name: "John", address: { city: "Mumbai" } }
console.log(obj2); // { name: "Doe", address: { city: "Mumbai" } }
```
**Issue**: Changing `obj2.address.city` also affects `obj1.address.city` since it's still referencing the same object.

---

#### **(B) Spread Operator (`...`) – Shallow Copy**
- Using `{ ...obj }` creates a new object with the same properties.
- However, nested objects are **still referenced**, making it a **shallow copy**.

##### **Example:**
```javascript
const obj1 = { name: "John", address: { city: "Bangalore" } };
const obj2 = { ...obj1 };

obj2.name = "Doe";
obj2.address.city = "Mumbai";

console.log(obj1); // { name: "John", address: { city: "Mumbai" } }
console.log(obj2); // { name: "Doe", address: { city: "Mumbai" } }
```

---

#### **(C) JSON.stringify() + JSON.parse() – Deep Copy**
- Converts the object into a JSON string and then parses it back to an object.
- This breaks all references, achieving a **deep copy**.

##### **Example:**
```javascript
const obj1 = { name: "John", address: { city: "Bangalore" } };
const obj2 = JSON.parse(JSON.stringify(obj1));

obj2.name = "Doe";
obj2.address.city = "Mumbai";

console.log(obj1); // { name: "John", address: { city: "Bangalore" } }
console.log(obj2); // { name: "Doe", address: { city: "Mumbai" } }
```
**Limitations**:
- It **does not support functions** or `undefined` values.
- If an object contains methods, they will be lost after serialization.

---

### **3. Use Cases**
| Method | Type | Use Case |
|---------|------|-----------|
| `Object.assign()` | Shallow | When object has primitive properties and no nested structures. |
| Spread Operator `{ ...obj }` | Shallow | Quick copying of objects with simple structures. |
| `JSON.stringify() + JSON.parse()` | Deep | When you need a full deep copy and the object does not contain functions or `undefined` values. |
| Lodash `cloneDeep()` | Deep | When working with deeply nested objects (recommended for production). |

---

### **4. Real-World Scenario**
#### **Scenario: Employee Records in a Web App**
- Consider a **React application** where employee details are stored in a state.
- If we need to duplicate an employee record and allow modifications without affecting the original, we must ensure a **deep copy**.

```javascript
import { cloneDeep } from 'lodash'; // Using Lodash for deep copy

const employee = {
  name: "Alice",
  department: { name: "Engineering" },
};

const newEmployee = cloneDeep(employee);
newEmployee.department.name = "Marketing";

console.log(employee.department.name); // "Engineering"
console.log(newEmployee.department.name); // "Marketing"
```
Here, `cloneDeep()` ensures the new object does not affect the original.

---

### **5. Interview Questions and Answers**
#### **Q1: What is the difference between shallow and deep copy?**
**Answer**:  
A **shallow copy** creates a new object but retains references to nested objects, meaning changes to nested properties affect the original.  
A **deep copy** creates a completely independent object, ensuring changes in the copied object do not affect the original.

#### **Q2: How does `Object.assign()` work, and does it perform a deep copy?**
**Answer**:  
`Object.assign()` copies properties from one object to another, but it only performs a **shallow copy**. If the source object has nested objects, they will still be **referenced** in the new object.

#### **Q3: Why is JSON.stringify() + JSON.parse() not always a good deep copy method?**
**Answer**:  
While it creates a **deep copy**, it has limitations:
- It **removes functions, `undefined` values, and special objects like `Date`**.
- It does not handle **circular references**.

#### **Q4: What is the best way to create a deep copy in production?**
**Answer**:  
Using `lodash.cloneDeep()` is recommended because it properly handles nested objects, functions, and complex structures.

#### **Q5: When would you prefer a shallow copy over a deep copy?**
**Answer**:  
- If the object structure is **flat** (no nested objects).
- If performance is critical and we don’t need to copy deeply.

---

### **6. Coding Questions**
#### **Q1: Fix the issue in the following code where modifying `obj2` should not affect `obj1`**
```javascript
const obj1 = { name: "Alice", details: { age: 25, city: "Delhi" } };
const obj2 = Object.assign({}, obj1);

obj2.details.city = "Mumbai"; 

console.log(obj1.details.city); // Expected: "Delhi", but outputs "Mumbai"
```
**Solution**:
```javascript
const obj2 = JSON.parse(JSON.stringify(obj1));
```

#### **Q2: How would you make a deep copy without using JSON or Lodash?**
**Solution**:
Using recursion:
```javascript
function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") return obj;
  let copy = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    copy[key] = deepCopy(obj[key]); // Recursively copy nested objects
  }
  return copy;
}

const obj1 = { name: "Alice", details: { age: 25, city: "Delhi" } };
const obj2 = deepCopy(obj1);
obj2.details.city = "Mumbai";

console.log(obj1.details.city); // "Delhi"
console.log(obj2.details.city); // "Mumbai"
```

---

### **7. Summary**
- Use **shallow copy** for simple objects.
- Use **deep copy** for nested structures to avoid unintended modifications.
- For production, prefer **Lodash `cloneDeep()`**.
