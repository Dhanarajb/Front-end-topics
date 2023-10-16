### Reverse string
----------
```
const rever = (str) => {
  const arr = str.split('').reverse().join('')
  console.log(arr);
};
rever("apple com");
```
> **_DRYRUN:_**
> 
> The rever function is called with the input string "apple com".

> Inside the function:

> str is "apple com".
> - str.split('') splits the string into an array of characters: ['a', 'p', 'p', 'l', 'e', ' ', 'c', 'o', 'm'].
> - The reverse() method is applied to the array, reversing its order: ['m', 'o', 'c', ' ', 'e', 'l', 'p', 'p', 'a'].

> The join('') method is used to join the characters in the reversed array back into a single string, without any spaces between them: "moc elppa".

> The result, "moc elppa", is stored in the arr variable.
---
```
function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev);
}
console.log(reverse('Dhanaraj'));
```
> **_DRYRUN:_**

> str is initially 'Dhanaraj'.

> The split('') method is used to split the string into an array of characters: ['D', 'h', 'a', 'n', 'a', 'r', 'a', 'j'].
Now, the reduce method is applied to this array:

> **rev** is the accumulator that starts as an empty string.
> **char** is the current character in the array.

> - Iteration 1: rev is an empty string, and char is 'D'. The result of the first iteration is 'D' + '' (empty rev), which is 'D'.
> - Iteration 2: rev is 'D', and char is 'h'. The result is 'h' + 'D', which is 'hD'.
> - Iteration 3: rev is 'hD', and char is 'a'. The result is 'a' + 'hD', which is 'ahD'.
> - Iteration 4: rev is 'ahD', and char is 'n'. The result is 'n' + 'ahD', which is 'nahD'.
> - Iteration 5: rev is 'nahD', and char is 'a'. The result is 'a' + 'nahD', which is 'anahD'.
> - Iteration 6: rev is 'anahD', and char is 'r'. The result is 'r' + 'anahD', which is 'ranahD'.
> - Iteration 7: rev is 'ranahD', and char is 'a'. The result is 'a' + 'ranahD', which is 'aranahD'.
> - Iteration 8: rev is 'aranahD', and char is 'j'. The result is 'j' + 'aranahD', which is 'jaranahD'.
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
