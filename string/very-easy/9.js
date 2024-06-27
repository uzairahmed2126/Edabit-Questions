// Return a String as an Integer
// Create a function that takes a string and returns it as an integer.

// Examples
function stringInt(str) {
  // return +str
  // return Number(str)
  // return str-0
  return str / 1;
}
console.log(stringInt("6")); //➞ 6
console.log(stringInt("1000")); //➞ 1000
console.log(stringInt("12")); //➞ 12
// Notes
// All numbers will be whole.
// All numbers will be positive.
