// Check Factors
// Write a function that returns true if all integers in an array are factors of a number, and false otherwise.

// Examples
function checkFactors(arr, num) {
  //   return arr.every((item) => num % item === 0);
  //   for (let i = 0; i < arr.length; i++) {
  //     if (num % arr[i] !== 0) {
  //       return false;
  //     }
  //   }
  //   return true;
  return arr.every((item) => (num % item === 0 ? true : false));
}
console.log(checkFactors([2, 3, 4], 12)); //➞ true
// Since 2, 3, and 4 are all factors of 12.
console.log(checkFactors([1, 2, 3, 8], 12)); //➞ false
// 8 is not a factor of 12.
console.log(checkFactors([1, 2, 50], 100)); //➞ true
console.log(checkFactors([3, 6], 9)); //➞ false
// Notes
// N/A
