// Case Insensitive Comparison
// Write a function that validates whether two strings are identical. Make it case insensitive.

// Examples
function match(str1, str2) {
  let lowerString = str2.toLowerCase();
  return str1.includes(lowerString);
}
console.log(match("hello", "hELLo")); //➞ true
console.log(match("motive", "emotive")); //➞ false
console.log(match("venom", "VENOM")); //➞ true
console.log(match("mask", "mAskinG")); //➞ false
// Notes
// N/A
