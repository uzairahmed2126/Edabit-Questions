// Find the Index (Part #2)
// Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return -1.

// Examples
function search(arr, item, index = 0) {
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] === num) {
  //       return i;
  //     }
  //   }
  //   return -1;
  //   return arr.indexOf(num);
  if (arr.length === 0) {
    return -1;
  }
  // Base case: if the first element is the item we are looking for, return the current index
  if (arr[0] === item) {
    return index;
  }
  // Recursive case: check the rest of the array
  return search(arr.slice(1), item, index + 1);
}
console.log(search([1, 2, 3, 4], 3)); //➞ 2
console.log(search([2, 4, 6, 8, 10], 8)); //➞ 3
console.log(search([1, 3, 5, 7, 9], 11)); //➞ -1
// Notes
// If the item is not present, return -1.
// The given array is ordered.
