// Find the Index (Part 1)
// Create a function that finds the index of a given item.

// Examples
function search(arr, findIndex) {
  //   return arr[findIndex];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] === findIndex) {
  //       return i;
  //     }
  //   }
  //   return -1;
    return arr.indexOf(findIndex);
}
console.log(search([1, 5, 3], 5)); //➞ 1
console.log(search([9, 8, 3], 3)); //➞ 2
console.log(search([1, 2, 3], 4)); //➞ -1
// Notes
// If the item is not present, return -1.
