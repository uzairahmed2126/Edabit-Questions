// Largest Numbers
// Create a function that takes two arguments of an array of numbers arr and a constant number n and returns the n largest numbers from the given array.

// Examples
function largestNumbers(n, arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    if (n === 0) {
      return [];
    } else {
      return sortedArr.slice(-n);
    }
}
console.log(largestNumbers(2, [4, 3, 2, 1])); //➞ [3, 4]
console.log(largestNumbers(1, [7, 19, 4, 2])); //➞ [19]
console.log(largestNumbers(3, [14, 12, 57, 11, 18, 16])); //➞ [16, 18, 57]
console.log(largestNumbers(0, [1, 3, 4, 2])); //➞ []
// Notes
// The returned array must be sorted in ascending order.
