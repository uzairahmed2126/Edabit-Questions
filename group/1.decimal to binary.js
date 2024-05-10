// try this convert a decimal number into binary then reverse it and then make reversed number to decimal.
// Let's see how strong your JS fundamental is.
function reversedBinaryInteger(decimal) {
  let binary = decimal.toString(2);
  let reverseBinary = binary.split("").reverse().join("");
  let converReverse = parseInt(reverseBinary, 2);
  return converReverse;
}
console.log(reversedBinaryInteger(10)); //➞ 5
// 10 = 1010 -> 0101 = 5
console.log(reversedBinaryInteger(12)); //➞ 3
// 12 = 1100 -> 0011 = 3
console.log(reversedBinaryInteger(25)); //➞ 19
// 25 = 11001 -> 10011 = 19
console.log(reversedBinaryInteger(45)); //➞ 45
// 45 = 101101 -> 101101 = 45
