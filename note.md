
# JavaScript Note

### array
~~~~javascript
//slice() 方法會回傳一個新陣列物件，為原陣列選擇之 begin 至 end（不含 end）部分的淺拷貝（shallow copy）。而原本的陣列將不會被修改
//splice() 方法可以藉由刪除既有元素並／或加入新元素來改變一個陣列的內容。
var x = [1, 3, 2, 5];
console.log(x.slice(1, 4));
console.log(x.splice(1, 1));
//Array(3) [3, 2, 5]
//Array(1) [3]

//How do you get a string to a character array in JavaScript?
"Hello world!".split('');
["H", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d", "!"];
~~~~


## [array useful function](https://wcc723.github.io/javascript/2017/06/29/es6-native-array/#Array-prototype-filter)
* [filter(), find(), forEach(), map(), every(), some(), reduce()]

### set
```javascript
const set1 = new Set([1, 2, 3, 4, 5]);

console.log(set1.has(1));
// expected output: true

console.log(set1.has(5));
// expected output: true

console.log(set1.has(6));
```

### checkType
```javascript

//Array.isArray() 函式會檢查傳入的值是否為一個 Array。
Array.isArray([1, 2, 3]);  // true
Array.isArray({foo: 123}); // false
Array.isArray('foobar');   // false
Array.isArray(undefined);  // false

function isBoolean(arg) {
  return typeof arg === 'boolean';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isString(arg) {
  return typeof arg === 'string';
}

function isFunction(arg) {
  return typeof arg === 'function';
}
```
### function
 ```javascript
var setArray = function (object, arr) {
function setArray(object, arr) {
 ```

 ###  Binary Octal Decimal Hexadecimal

 ```javascript
var x = 100;
var y1 = x.toString(2);
var y2 = x.toString(8);
var y3 = x.toString(16);
function setArray(object, arr) {
 ```

 ###  function default value
  ```javascript
  function foo(a, b, c) {
 
    a = a || "AAA";
    b = b || "BBB";
    c = c || "CCC";
 
    document.write('a: ' + a + ' ');
    document.write('b: ' + b + ' ');
    document.write('c: ' + c + ' ');
    document.write('<br>');
 
}
 ```