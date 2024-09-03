// Flatten the Curve
// Given an array of integers, replace every number with the mean of all numbers.

// Examples
// function flattenCurve(arr) {
//   let result = [];
//   let index = Math.trunc(arr.length / 2);
//   for (let i = 0; i < arr.length; i++) {
//     if (index !== i) {
//       result.push(arr[index]);
//     }else {
//         result.push(arr[i])
//     }
//   }
//   return result;
// }
function flattenCurve(arr) {
  let index = Math.trunc(arr.length / 2);
  return arr.map((item, ind) => {
    if (ind !== index) {
      return arr[index];
    }
    return item;
  });
}
console.log(flattenCurve([1, 2, 3, 4, 5])); //➞ [3, 3, 3, 3, 3]
console.log(flattenCurve([0, 0, 0, 2, 7, 3])); //➞ [2, 2, 2, 2, 2, 2]
console.log(flattenCurve([4])); //➞ [4]
console.log(flattenCurve([])); //➞ []
// Notes
// Round averages to 1 decimal point.
// Return an empty array if given an empty array (see example #4).
