// Is the String Odd or Even?
// Given a string, return true if its length is even or false if the length is odd.

// Examples
function oddOrEven(str) {
  return str.length % 2 === 0;
}
console.log(oddOrEven("apples")); //➞ true
// The word "apples" has 6 characters.
// 6 is an even number, so the program outputs true.
console.log(oddOrEven("pears")); //➞ false
// "pears" has 5 letters, and 5 is odd.
// Therefore the program outputs false.
console.log(oddOrEven("cherry")); //➞ true
// Notes
// N/A
