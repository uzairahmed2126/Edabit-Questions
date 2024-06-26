// Summing a Slice
// Given an array and an integer n, return the sum of the first n numbers in the array.

// Worked Example
// console.log(sliceSum([9, 8, 7, 6], 3)) //➞ 24
// // The parameter n is specified as 3.
// // The first 3 numbers in the list are 9, 8 and 7.
// // The sum of these 3 numbers is 24 (9 + 8 + 7).
// // Return the answer.
// Examples
function sliceSum(arr, n) {
  let result = 0;
  //   let sliced = arr.slice(0, n);
  //   for (let i = 0; i < sliced.length; i++) {
  //     result += sliced[i];
  //   }
  for (let i = 0; i < n; i++) {
    result += arr[i];
  }
  return result;
}
console.log(sliceSum([1, 3, 2], 2)); //➞ 4

console.log(sliceSum([4, 2, 5, 7], 4)); //➞ 18

console.log(sliceSum([3, 6, 2], 0)); //➞ 0
// Notes
// If n is larger than the length of the array, return the sum of the whole array.
