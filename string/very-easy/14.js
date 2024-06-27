// String and Number Conversions
// You need to create two functions to substitute toString() and parseInt(); A function called intToString() that converts integers into strings and a function called stringToInt() that converts strings into integers.

// Examples:
function intToString(val) {
  // return ""+val
  return `${val}`;
}
function stringToInt(val) {
  // return +val
  return Number(val);
}
console.log(intToString(4)); //➞ "4"
console.log(stringToInt("4")); //➞ 4
console.log(intToString(29348)); //➞ "29348"
// Notes
// You will get bonus points if you manage to solve this without using toString, parseInt or parseFloat.
