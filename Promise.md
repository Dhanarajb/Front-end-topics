# Promises in JavaScript

Promises are used to handle asynchronous operations in JavaScript. Let’s explore how async operations worked before promises and how promises improve the experience.

## Example: E-Commerce

```js
const cart = ["shoes", "pants", "kurta"];

// Below two functions are asynchronous and dependent on each other
const orderId = createOrder(cart);
proceedToPayment(orderId);
```

### Before Promises (Using Callbacks)

In this approach, it is the responsibility of the `createOrder` function to first create the order and then call the callback function.

```js
createOrder(cart, function () {
  proceedToPayment(orderId);
});
// This creates an issue of "Inversion of Control"
```

### Fixing with Promises

Promises address the issue of inversion of control by allowing you to attach a callback function to a promise object.

Now, let’s make `createOrder` return a promise. This promise acts as a placeholder for a future value, such as an `orderId` that will be available after the asynchronous operation completes.

#### Example with Promises

```js
const cart = ["shoes", "pants", "kurta"];

const promiseRef = createOrder(cart);

// Attach a callback to the promise
promiseRef.then(function (orderId) {
  proceedToPayment(orderId);
});
```

#### Why is this better?

In the earlier callback-based solution, we passed a function to `createOrder` and relied on it to execute the callback. With promises, we attach a callback function to a promise object. Promises guarantee that:

1. The attached callback will be executed once the promise is fulfilled.
2. The callback will only be called once.

### Understanding Promises

Promises are more than just objects with empty data. They have three key parts:

1. **PromiseState**: Tracks the state of the promise ("Pending", "Fulfilled", or "Rejected").
2. **PromiseResult**: Holds the value when the promise is fulfilled or rejected.
3. **Prototype**: Contains methods like `.then` and `.catch`.

Here’s a real-world example using the `fetch` API to call a public GitHub API:

```js
const URL = "https://api.github.com/users/alok722";
const user = fetch(URL);

console.log(user); // Promise {<Pending>}

// Attach a callback
user.then(function (data) {
  console.log(data);
});
```

### Key Observations

- Initially, the promise is in the “Pending” state.
- Once fulfilled, the `PromiseResult` contains the data (e.g., API response).
- Promises are immutable; you cannot directly modify the data.

## Solving Callback Hell with Promises

Callback hell (or the “Pyramid of Doom”) occurs when callbacks are nested deeply, making the code difficult to read and maintain.

### Callback Hell Example

```js
createOrder(cart, function (orderId) {
  proceedToPayment(orderId, function (paymentInf) {
    showOrderSummary(paymentInf, function (balance) {
      updateWalletBalance(balance);
    });
  });
});
```

### Promise Chaining

Promises allow chaining, where the output of one `.then` is passed as input to the next `.then`.

```js
createOrder(cart)
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInf) {
    return showOrderSummary(paymentInf);
  })
  .then(function (balance) {
    return updateWalletBalance(balance);
  });
```

### Common Pitfall

One common mistake in promise chaining is forgetting to return a promise:

```js
createOrder(cart)
  .then(function (orderId) {
    proceedToPayment(orderId); // Missing return
  })
  .then(function (paymentInf) {
    showOrderSummary(paymentInf); // Missing return
  });
```

To fix this, always return the promise:

```js
createOrder(cart)
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInf) {
    return showOrderSummary(paymentInf);
  });
```

For better readability, you can use arrow functions:

```js
createOrder(cart)
  .then(orderId => proceedToPayment(orderId))
  .then(paymentInf => showOrderSummary(paymentInf))
  .then(balance => updateWalletBalance(balance));
```

## Interview Guide

### What is a Promise?

- A **Promise** is an object representing the eventual completion or failure of an asynchronous operation.
- It acts as a placeholder for a value that will be available in the future.

### States of a Promise

1. **Pending**: The initial state; neither fulfilled nor rejected.
2. **Fulfilled**: The operation completed successfully.
3. **Rejected**: The operation failed.

### Benefits of Promises

1. Solves the problem of inversion of control.
2. Avoids callback hell using promise chaining.
3. Guarantees immutability of resolved data.
4. Ensures callback execution only once.

---

With promises, handling asynchronous operations becomes cleaner and more maintainable. This paves the way for even better approaches, such as `async/await`, which further simplify the syntax for working with promises.

