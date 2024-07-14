// Smaller String Number
// Create a function that returns the smaller number.

// Examples
function smallerNum(str1, str2) {
  return str1 < str2 ? str1 : str2;
}
console.log(smallerNum("21", "44")); //➞ "21"
console.log(smallerNum("1500", "1")); //➞ "1"
console.log(smallerNum("5", "5")); //➞ "5"
// Notes
// Numbers will be represented as strings, and your output should also be a string.
// If both numbers tie, return either number.
// Numbers will be positive.
// Bonus: See if you can do this without converting to integers.
