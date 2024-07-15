// Check if a String Contains only Identical Characters
// Write a function that returns true if all characters in a string are identical and false otherwise.

// Examples
function isIdentical(str) {
  //   for (let i = 0; i < str.length; i++) {
  //     if (str[0] !== str[i]) {
  //       return false;
  //     }
  //   }
  //   return true;
  let uniqueChars = new Set(str);
  return uniqueChars.size === 1;
}
console.log(isIdentical("aaaaaa")); //➞ true
console.log(isIdentical("aabaaa")); //➞ false
console.log(isIdentical("ccccca")); //➞ false
console.log(isIdentical("kk")); //➞ true
// Notes
// N/A
