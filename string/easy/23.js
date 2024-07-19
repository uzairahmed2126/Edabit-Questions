// Transforming Words into Binary Strings
// Write a function that transforms all letters from [a, m] to 0 and letters from [n, z] to 1 in a string.

// Examples
function convertBinary(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 109) {
      result += 0;
    } else if (str.charCodeAt(i) >= 109 && str.charCodeAt(i) <= 122) {
      result += 1;
    } else {
      result += 0;
    }
  }
  return result;
}
console.log(convertBinary("house")); //➞ "01110"

console.log(convertBinary("excLAIM")); //➞ "0100000"

console.log(convertBinary("moon")); //➞ "0111"
// Notes
// Conversion should be case insensitive (see example #2).
