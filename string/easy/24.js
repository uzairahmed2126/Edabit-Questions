// Most Left Digit
// Write a function that takes a string as an argument and returns the left most digit in the string.

// Examples
function leftDigit(str) {
  const match = str.match(/\d/);
  return +match[0];
}
console.log(leftDigit("TrAdE2W1n95!")); //➞ 2
console.log(leftDigit("V3r1ta$")); //➞ 3
console.log(leftDigit("U//DertHe1nflu3nC3")); //➞ 1
console.log(leftDigit("J@v@5cR1PT")); //➞ 5
// Notes
// Each string will have at least two numbers.
// Return the result as an integer.
