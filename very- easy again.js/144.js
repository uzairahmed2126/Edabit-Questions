// Minimum Removals to Make Sum Even
// Create a function that returns the minimum number of removals to make the sum of all elements in an array even.

// Examples
function minimumRemovals(arr) {
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] % 2 === 0) {
  //       return 1;
  //     }
  //   }
  //   return 0;
  return +!arr.every((item) => item % 2 !== 0);
}
console.log(minimumRemovals([1, 2, 3, 4, 5])); //➞ 1

console.log(minimumRemovals([5, 7, 9, 11])); //➞ 0

console.log(minimumRemovals([5, 7, 9, 12])); //➞ 1
// Notes
// If the sum is already even, return 0 (see example #2).
// The output will be either 0 or 1.
