### Debouncing
> Debouncing in JavaScript is a way to make sure a function is only called after a certain delay,  especially useful for handling repeated user inputs like button clicks.

HTML
```
    <input type="text" onkeyup="betterFunction()" />
```

Javascript
```
// Debouncing in Javascript
let counter = 0;
const getData = () => {
  // calls an API and gets Data
  console.log("Fetching Data ..", counter++);
};

const debounce = function (fn, d) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      getData.apply(this, arguments);
    }, d);
  };
};

const betterFunction = debounce(getData, 300);
```
