// Purge and Organize
// Given an array of numbers, write a function that returns an array that...

// Has all duplicate elements removed.
// Is sorted from least to greatest value.
// Examples
function uniqueSort(arr) {
  //   let result = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (!result.includes(arr[i])) {
  //       result.push(arr[i]);
  //     }
  //   }
  //   return result.sort((a, b) => a - b);
  //   const uniqueArray = arr.filter((item, index) => arr.indexOf(item) === index);
  //   uniqueArray.sort((a, b) => a - b);
  //   return uniqueArray;
  return [...new Set(arr.sort((a, b) => a - b))];
}
console.log(uniqueSort([1, 2, 4, 3])); //➞ [1, 2, 3, 4]

console.log(uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2])); //➞ [1, 2, 3, 4]

console.log(uniqueSort([6, 7, 3, 2, 1])); //➞ [1, 2, 3, 6, 7]
