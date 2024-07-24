// Binary Array to Decimal
// In mathematics and digital electronics, a binary number is a number expressed in the base-2 numeral system or binary numeral system. Given an array of ones and zeroes of a binary number, return the equivalent decimal value.
// using chatgpt
// Examples
function binaryToDecimal(binaryArray) {
  let decimal = 0;
  let reversed = binaryArray.reverse();
  for (let i = 0; i < reversed.length; i++) {
    if (binaryArray[i] !== 0) {
      decimal += Math.pow(2, i);
    }
    // decimal += binaryArray[binaryArray.length - 1 - i] * Math.pow(2, i);
  }
  return decimal;
  // return binaryArray
  //   .reverse()
  //   .reduce((acc, cur, index) => acc + cur * Math.pow(2, index));
  // return parseInt(binaryArray.join(""), 2);
}
console.log(binaryToDecimal([0, 0, 0, 1])); //➞ 1
console.log(binaryToDecimal([0, 0, 1, 0])); //➞ 2
console.log(binaryToDecimal([1, 1, 1, 1, 1, 0, 1, 1, 0, 1])); //➞ 1005
// Notes
// N/A
