### Reverse string
----------
```
const rever = (str) => {
  const arr = str.split('').reverse().join('')
  console.log(arr);
};
rever("apple com");
```
---
```
function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev);
}
console.log(reverse('Dhanaraj'));
```
---
```

(function (str) {
  let rever = '';
  for (let charavter of str) {
    rever = charavter + rever;
  }
  console.log(rever);
})('dhanaraj');
```

> **_DRYRUN:_**
> The code defines an immediately invoked function expression (IIFE) that takes one argument str. It's an anonymous function that reverses the input string.
> Inside the function, it declares a variable rever and initializes it as an empty string.
> It then enters a for...of loop to iterate through each character in the input string str.
> - Iteration 1: charavter is 'd'. rever becomes 'd'.
> - Iteration 2: charavter is 'h'. rever becomes 'hd'.
> - Iteration 3: charavter is 'a'. rever becomes 'ahd'.
> - Iteration 4: charavter is 'n'. rever becomes 'nahd'.
> - Iteration 5: charavter is 'a'. rever becomes 'anahd'.
> - Iteration 6: charavter is 'r'. rever becomes 'ranahd'.
> - Iteration 7: charavter is 'a'. rever becomes 'aranahd'.
> - Iteration 8: charavter is 'j'. rever becomes 'jaranahd'.
> After the loop completes, it logs the value of rever to the console, which is the reversed string: 'jaranahd'.


---
### Reverse Integer
```
const reverInt=(n)=>{
  return (n.toString().split('').reverse().join(''))
}
console.log({
  testcase1:reverInt(51),
  testcase2:reverInt(-342),
  testcase2:reverInt(500)
})
```
