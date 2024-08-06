// Parity Bit Validation
// Parity bits are used as very simple checksum to ensure that binary data isn't corrupted during transit. Here's how they work:

// If a binary string has an odd number of 1's, the parity bit is a 1.
// If a binary string has an even number of 1's, the parity bit is a 0.
// The parity bit is appended to the end of the binary string.
// Create a function that validates whether a binary string is valid, using parity bits.

// Worked Example
function validateBinary(bits) {
  let count1 = 0;
  let count0 = 0;
  for (let i = 0; i < bits.length; i++) {
    if (bits[i] === "1") {
      count1++;
    } else {
      count0++;
    }
  }
  return count0 % 2 === 0 && count1 % 2 === 0;
}
console.log(validateBinary("10110010")); //➞ true
// The last digit is the parity bit.
// 0 is the last digit.
// 0 means that there should be an even number of 1's.
// There are four 1's.
// Return true.
// Examples;
console.log(validateBinary("00101101")); //➞ true
console.log(validateBinary("11000000")); //➞ true
console.log(validateBinary("11000001")); //➞ false
console.log(validateBinary("111000")); //➞ false

// Notes
// All inputs will be a byte long (8 characters).
// You can find another parity bit involved challenge via this link.
