// Regex Series: 5-Digit Zip Code
// Write a regular expression that matches a string if and only if it is a valid zip code.

// Examples
function reg(zipCode) {
  const zipCodePattern = /^\d{5}$/;
  return zipCodePattern.test(zipCode);
}
console.log(reg("32554")); //➞ true

console.log(reg("92 342")); //➞ false
// Invalid: contains a whitespace

console.log(reg("9@342")); //➞ false
// Invalid: contains a non-numeric character

console.log(reg("923444")); //➞ false
// Invalid: length is not 5
// Notes
// Zipcodes must be 5 digits long exactly and only contain numbers.
// Not allowed: non-numeric characters or whitespaces.
// This challenge is designed to use Regex only.
