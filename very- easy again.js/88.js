// Sum of Even Pairs in Array
// Given an array with an even amount of numbers, return true if the sum of two numbers in the array is even and false if the sum of two numbers in the array is odd.

// To illustrate:

// 11, 15, 6, 8, 9, 10
// 11 + 15 = 26 = true
// 15 + 6 = 21 = false
// 6 + 8 = 14 = true
// 8+ 9 = 17 = false
// 9 + 10 = 19 = false
// Therefore, solution = [true, false, true, false, false]
// Examples
function oddSum(arr) {
  // let evenCount = 0;
  // let oddCount = 0;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.length % 2 === 0) {
      let temp = arr[i];
      let total = temp + arr[i + 1];
      result.push(total % 2 === 0);
    }
  }
  return result;
}
console.log(oddSum([11, 15, 6, 8, 9, 10])); //➞ [true, false, true, false, false]
console.log(oddSum([12, 21, 5, 9, 65, 32])); //➞ [false, true, true, true, false]
console.log(oddSum([1, 2, 3, 4, 5, 6])); //➞ [false, false, false, false, false]
// Notes
// Remember that the length of all the arrays will be an even number, so it is not necessary to measure lengths.
