// Absolute Sum
// Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.

// Examples
function getAbsSum(arr) {
    return arr.reduce((acc, curr) => acc + Math.abs(curr),0);
//   let result = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       result += Math.abs(arr[i]);
//     } else {
//       result += Math.abs(arr[i]);
//     }
//   }
//   return result;
}
console.log(getAbsSum([2, -1, 4, 8, 10])); //➞ 25
console.log(getAbsSum([-3, -4, -10, -2, -3])); //➞ 22
console.log(getAbsSum([2, 4, 6, 8, 10])); //➞ 30
console.log(getAbsSum([-1])); //➞ 1
// Notes
// The term "absolute value" means to remove any negative sign in front of a number, and to think of all numbers as positive (or zero).
// All the elements in the given array are integers.
