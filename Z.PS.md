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
---
