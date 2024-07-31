// ReverseAndNot
// Write a function that takes an integer i and returns an integer with the integer backwards followed by the original integer.

// To illustrate:

// 123
// We reverse 123 to get 321 and then add 123 to the end, resulting in 321123.

// Examples
function reverseAndNot(num) {
  //   let reversed = "";
  //   let str = String(num);
  //   for (let i = str.length - 1; i >= 0; i--) {
  //     reversed += str[i];
  //   }
  //   return reversed + num;
  const reversedNum = num.toString().split("").reverse().join("") + num;
  return reversedNum;
}
console.log(reverseAndNot(123)); //➞ 321123

console.log(reverseAndNot(152)); //➞ 251152

console.log(reverseAndNot(123456789)); //➞ 987654321123456789
// Notes
// i is a non-negative integer.
