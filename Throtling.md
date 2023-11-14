#### Throtling
> Throttling in JavaScript is a technique that limits the number of times a function can be called within a given time interval, to improve performance and user experience.
>
> HTML
> ```
 <button onclick="getData()">click Throtle</button>
> ```
> Javascript
```
let count = 0;

let aplicalled;
const throttle = (fn, d) => {
  if (aplicalled) return;
  aplicalled = true;
  setTimeout(() => {
    fn();
    aplicalled = false;
  }, d);
};

const getData = () => {
  throttle(() => {
    console.log("email sent...", count++), 500;
  }, 500);
};

```
