// Case Insensitive Comparison
// Write a function that validates whether two strings are identical. Make it case insensitive.

// Examples
function match(str1, str2) {
  //   let lowerString = str2.toLowerCase();
  //   return str1.includes(lowerString);
  if (str1.length !== str2.length) {
    return false;
  }
  for (let i = 0; i < str1.length; i++) {
    if (str1.toLowerCase().charCodeAt(i) === str2.toLowerCase().charCodeAt(i)) {
      return true;
    }
  }
  return false;
}
console.log(match("hello", "hELLo")); //➞ true
console.log(match("motive", "emotive")); //➞ false
console.log(match("venom", "VENOM")); //➞ true
console.log(match("mask", "mAskinG")); //➞ false
// Notes
// N/A
