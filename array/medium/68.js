// Scalable Mountain?
// Given an array of numbers, representing the height of a mountain in certain intervals, return whether this mountain is scalable.

// A mountain can be considered scalable if each number is within 5 units of the next number in either direction.

// Examples
// function isScalable(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     if (Math.abs(arr[i] - arr[i - 1]) > 5) {
//       return false;
//     }
//   }
//   return true;
// }
function isScalable(arr) {
  return arr.reduce((acc, cur, index) => {
    if (Math.abs(cur - arr[index - 1]) > 5) {
      acc = false;
    }
    return acc;
  }, true);
}
console.log(isScalable([1, 2, 4, 6, 7, 8])); //➞ true
console.log(isScalable([40, 45, 50, 45, 47, 52])); //➞ true
console.log(isScalable([2, 9, 11, 10, 18, 21])); //➞ false
// Notes
// The array may start at any number and can be any length.
