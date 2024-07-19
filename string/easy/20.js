// Valid Zip Code
// Zip codes consist of 5 consecutive digits. Given a string, write a function to determine whether the input is a valid zip code. A valid zip code is as follows:

// Must only contain numbers (no non-digits allowed).
// Must not contain any spaces.
// Must not be greater than 5 digits in length.
// Examples
function isValid(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.length === 5 && !str[i].includes(" ") && !str.match(/[a-z]/gi)) {
      return true;
    }
  }
  return false;
}
console.log(isValid("59001")); //➞ true

console.log(isValid("853a7")); //➞ false

console.log(isValid("732 32")); //➞ false

console.log(isValid("393939")); //➞ false
// Notes
// N/A
