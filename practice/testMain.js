var result;
var myLogModule = require('./UniqueInOrder');
result = myLogModule.exec('AAAABBBCCDAABBB');
result += " ||||| " + myLogModule.exec([1, 2, 5, 4, 4, 4, 4, 12, 12, 1, 1, 1]);
console.log(result);

var BinaryAddition = require('./BinaryAddition');
console.log(BinaryAddition.exec(5, 8));

var GetSum = require('./GetSum');
console.log(GetSum.exec(5, 8));

var deleteNth = require('./deleteNth');
console.log(deleteNth.exec([1, 2, 3, 1, 2, 2, 2], 1));
console.log(deleteNth.exec([1, 2, 3, 1, 2, 2, 2], 2));