// Nth Smallest Integer
// Given an unsorted array, create a function that returns the nth smallest integer (the smallest integer is the first smallest, the second smallest integer is the second smallest, etc).

// Examples
function nthSmallest(arr, nth) {
  if (nth >= 1) {
    //   arr.sort((a, b) => a - b);
    //   return arr[nth - 1] ? arr[nth - 1] : null;
      return arr[nth - 1] ? arr[nth - 1] : null;
  }
}
console.log(nthSmallest([1, 3, 5, 7], 1)); //➞ 1
console.log(nthSmallest([1, 3, 5, 7], 3)); //➞ 5
console.log(nthSmallest([1, 3, 5, 7], 5)); //➞ null
console.log(nthSmallest([7, 3, 5, 1], 2)); //➞ 3
// Notes
// n will always be >= 1.
// Each integer in the array will be distinct (there will be a clear ordering).
// Given an out of bounds parameter (e.g. an array is of size k), and you are asked to find the m > k smallest integer, return null.
