// Return the Middle Character(s) of a String
// Create a function that takes a string and returns the middle character(s). If the word's length is odd, return the middle character. If the word's length is even, return the middle two characters.

// Examples
// function getMiddle(str) {
//   let res = "";
//   const length = Math.floor(str.length / 2);
//   const start = str.length - length - 1;
//   for (let i = start; i <= length; i++) {
//     res += str[i];
//   }
//   return res;
// }
function getMiddle(str) {
  const length = Math.floor(str.length / 2);
  const start = str.length - length - 1;
  return str.slice(start, length + 1);
}
console.log(getMiddle("test")); //➞ "es"
console.log(getMiddle("testing")); //➞ "t"
console.log(getMiddle("middle")); //➞ "dd"
console.log(getMiddle("A")); //➞ "A"
// Notes
// All test cases contain a single word (as a string).
