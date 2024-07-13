// Regex Series: String Contains at Least One Digit
// Write a regular expression that matches a string if it contains at least one digit.

// Examples
function reg(str) {
  let reg = /[0-9]/.test(str);
  return reg;
}
console.log(reg("c8")); //➞ true

console.log(reg("23cc4")); //➞ true

console.log(reg("abwekz")); //➞ false

console.log(reg("sdfkxi")); //➞ false
// Notes
// This challenge is designed to use RegEx only.
