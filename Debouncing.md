### Debouncing
> Debouncing in JavaScript is a way to make sure a function is only called after a certain delay,  especially useful for handling repeated user inputs like button clicks.

HTML
```
    <input type="text" onkeyup="betterFunction()" />
```

Javascript
```
// 1. Counter to track the number of times getData is called
let counter = 0;

// 2. getData function simulates API call and increments the counter
const getData = () => {
  console.log("Fetching Data ..", counter++);
};

// 3. Debounce function takes a function (fn) and a delay (d)
const debounce = function (fn, d) {
  // 4. Timer variable to store the timeout ID
  let timer;

  // 5. Return a new function that can be called
  return function () {
    // 6. Clear any existing timers to prevent immediate execution
    clearTimeout(timer);

    // 7. Set a new timer to execute the provided function after the delay
    timer = setTimeout(() => {
      // 8. Call the provided function (getData) with correct context and arguments
      fn.apply(this, arguments);
    }, d);
  };
};

// 9. Create a debounced function (betterFunction) with getData and a delay of 300 milliseconds
const betterFunction = debounce(getData, 300);

// 10. Now, calling betterFunction ensures getData is executed with at least a 300ms delay between calls.

```
