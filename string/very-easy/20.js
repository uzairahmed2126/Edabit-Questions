// Check String for Spaces
// Create a function that returns true if a string contains any spaces.

// Examples
function hasSpaces(str) {
  // return str.includes(' ');
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      return true;
    }
  }
  return false;
}
console.log(hasSpaces("hello")); //➞ false
console.log(hasSpaces("hello, world")); //➞ true
console.log(hasSpaces(" ")); //➞ true
console.log(hasSpaces("")); //➞ false
console.log(hasSpaces(",./!@#")); //➞ false
// Notes
// An empty string does not contain any spaces.
// Try doing this without RegEx.
