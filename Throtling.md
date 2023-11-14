#### Throtling
> Throttling in JavaScript is a technique that limits the number of times a function can be called within a given time interval, to improve performance and user experience.
>
> HTML
```
 <button onclick="getData()">click Throtle</button>
```
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
```
The count variable is used to keep track of the number of emails that have been sent.
The apicalled variable is used to track whether the throttle function is currently running.
The throttle() function takes two arguments: the function to be throttled and the interval in milliseconds.
The throttle() function sets the apicalled flag to true to indicate that it is currently running.
The throttle() function uses a setTimeout() function to schedule the execution of the throttled function for the specified interval.
If the function is called again before the interval has elapsed, the throttle() function simply returns.
The getData() function is a wrapper around the throttle() function that is used to send an email every 500 milliseconds.
The getData() function works by calling the throttle() function with a callback function that sends the email.
```
