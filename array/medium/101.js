// Sum of Array Elements Except Itself
// An array is given. Return a new array having the sum of all its elements except itself. For more clarity, check the examples below.

// Clarification
// [1, 2, 3, 4] = for first element => sum will be 2+3+4 = [9]
// [1, 2, 3, 4] = for second element => sum will be 1+3+4 = [9, 8]
// [1, 2, 3, 4] = for third element => sum will be 1+2+4 = [9, 8, 7]
// [1, 2, 3, 4] = for fourth element => sum will be 1+2+3 = [9, 8, 7, 6]
// Examples
// function arrEleSum(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     let sum = 0;
//     for (let j = 0; j < arr.length; j++) {
//       if (i == j) continue;
//       sum += arr[j];
//     }
//     result.push(sum);
//   }
//   return result;
// }
function arrEleSum(arr) {
  let result = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  for (let i = 0; i < arr.length; i++) {
    result.push(sum - arr[i]);
  }
  return result;
}
console.log(arrEleSum([1, 2, 3, 2, 1])); //➞ [8, 7, 6, 7, 8]
console.log(arrEleSum([1, 2])); //➞ [2, 1]
console.log(arrEleSum([1, 2, 3])); //➞ [5, 4, 3]
console.log(arrEleSum([1, 2, 3, 4, 5])); //➞ [14, 13, 12, 11, 10]
console.log(arrEleSum([10, 20, 30, 40, 50, 60])); //➞ [200, 190, 180, 170, 160, 150]
// Notes
// N/A
