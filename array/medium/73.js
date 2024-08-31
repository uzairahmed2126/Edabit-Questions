// Return an Array of Subarrays
// Write a function that takes three arguments (x, y, z) and returns an array containing x subarrays (e.g. [[], [], []]), each containing y number of item z.

// x Number of subarrays contained within the main array.
// y Number of items contained within each subarray.
// z Item contained within each subarray.
// Examples
// function matrix(x, y, z) {
//   let arr = [];
//   for (let i = 0; i < x; i++) {
//     let innerArr = [];
//     for (let j = 0; j < y; j++) {
//       innerArr.push(z);
//     }
//     arr.push(innerArr);
//   }
//   return arr;
// }
// function matrix(x, y, z) {
//   return Array.from({ length: x }, () => Array.from({ length: y }, () => z));
// }
function matrix(x, y, z) {
  return Array(x)
    .fill()
    .map(() => Array(y).fill(z));
}
console.log(matrix(3, 2, 3)); //➞ [[3, 3], [3, 3], [3, 3]]
console.log(matrix(2, 1, "edabit")); //➞ [["edabit"], ["edabit"]]
console.log(matrix(3, 2, 0)); //➞ [[0, 0], [0, 0], [0, 0]]
// Notes
// The first two arguments will always be integers.
// The third argument is either a string or an integer.
