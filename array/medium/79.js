// Puzzle Pieces
// Write a function that takes two arrays and adds the first element in the first array with the first element in the second array, the second element in the first array with the second element in the second array, etc, etc. Return true if all element combinations add up to the same number. Otherwise, return false.

// Examples
// function puzzlePieces(arr1, arr2) {
//   let sum = [];

//   if (arr1.length === arr2.length) {
//     // for (let i = 1; i <= arr1.length; i++) {
//     //   total = arr1[i - 1] + arr1[arr1.length - i];
//     //   sum.push(total);
//     //   total = arr1[i - 1] + arr1[arr1.length - i];
//     //   sum.push(total);
//     //   if (arr1.length / 2 === i) {
//     //     break;
//     //   }
//     // }
// }
// function puzzlePieces(arr1, arr2) {
//   let total1 = 0;
//   let total2 = 0;
//   if (arr1.length === arr2.length) {
//     for (let i = 0; i < arr1.length; i++) {
//       total1 += arr1[i];
//       total2 += arr2[i];
//     }
//   } else {
//     return false;
//   }
//   return total1 === total2;
// }
// function puzzlePieces(arr1, arr2) {
//   let ans = [];
//   if (arr1.length !== arr2.length) return false;
//   let len = arr1.length;
//   for (let i = 0; i < len; i++) {
//     ans.push(arr1[i] + arr2[i]);
//     if (ans[0] != ans[i]) return false;
//   }
//   return true;
// }
function puzzlePieces(arr1, arr2) {
  let result = [];
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    let sum = arr1[i] + arr2[i];
    result.push(sum);
    let firstEl = result[0];
    if (firstEl !== result[i]) return false;
  }
  //   for (let i = 0; i < arr1.length; i++) {
  //     if (result[i] === result[i + 1]) {
  //       return true;
  //     }
  //   }
  return true;
}
console.log(puzzlePieces([1, 2, 3, 4], [4, 3, 2, 1])); //➞ true
// 1 + 4 = 5;  2 + 3 = 5;  3 + 2 = 5;  4 + 1 = 5
// Both arrays sum to [5, 5, 5, 5]
console.log(puzzlePieces([1, 8, 5, 0, -1, 7], [0, -7, -4, 1, 2, -6])); //➞ true
console.log(puzzlePieces([1, 2], [-1, -1])); //➞ false
console.log(puzzlePieces([9, 8, 7], [7, 8, 9, 10])); //➞ false
// Notes
// Each array will have at least one element.
// Return false if both arrays are of different length.
