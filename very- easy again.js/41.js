// Is the String in Order?
// Create a function that takes a string and returns true or false, depending on whether the characters are in order or not.

// Examples
function isInOrder(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > str.charCodeAt(i + 1)) {
      return false;
    }
  }
  return true;
}
console.log(isInOrder("abc")); //➞ true
console.log(isInOrder("edabit")); //➞ false
console.log(isInOrder("123")); //➞ true
console.log(isInOrder("xyzz")); //➞ true
