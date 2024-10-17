// All Occurrences of an Element in an Array
// Create a function that returns the indices of all occurrences of an item in the array.

// Examples
// function getIndices(arr, searchItem) {
//   let index = [];
//   for (let i = 0; i < arr.length; i++) {
//     let val = arr[i];
//     if (val === searchItem) {
//       index.push(i);
//     }
//   }
//   return index;
// }
// function getIndices(arr, searchItem) {
//   let index = [];
//   let i = 0;
//   while (i < arr.length) {
//     let val = arr[i];
//     if (val === searchItem) {
//       index.push(i);
//     }
//     i++;
//   }
//   return index;
// }
function getIndices(arr, searchItem) {
  //   return arr.reduce((acc, cur, index) => {
  //     if (cur === searchItem) {
  //       acc.push(index);
  //     }
  //     return acc;
  //   }, []);
  return arr
    .map((item, index) => (item === searchItem ? index : -1))
    .filter((item) => item !== -1);
}
console.log(getIndices(["a", "a", "b", "a", "b", "a"], "a")); //➞ [0, 1, 3, 5]
console.log(getIndices([1, 5, 5, 2, 7], 7)); //➞ [4]
console.log(getIndices([1, 5, 5, 2, 7], 5)); //➞ [1, 2]
console.log(getIndices([1, 5, 5, 2, 7], 8)); //➞ []
// Notes
// If an element does not exist in an array, return [].
// Arrays are zero-indexed.
// Values in the array will be value-types (don't need to worry about nested arrays).
