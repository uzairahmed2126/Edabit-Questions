// Check if String Ending Matches Second String
// Create a function that takes two strings and returns true if the first string ends with the second string; otherwise return false.

// Examples
function checkEnding(str1, str2) {
  //   let splited = str1.split(str2);
  //   if (splited.includes("")) {
  //     return true;
  //   }
  //   return false;
  return str1.endsWith(str2);
}
console.log(checkEnding("abc", "bc")); //➞ true
console.log(checkEnding("abc", "d")); //➞ false
console.log(checkEnding("samurai", "zi")); //➞ false
console.log(checkEnding("feminine", "nine")); //➞ true
console.log(checkEnding("convention", "tio")); //➞ false
// Notes
// All test cases are valid one word strings.
