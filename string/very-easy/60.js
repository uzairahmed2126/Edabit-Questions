// Cleaning Up Messy Arrays
// Create a function that takes an array. This array will contain numbers represented as strings.

// Your function should split this array into two new arrays. The first array should contain only even numbers. The second only odd. Then, wrap these two arrays in one main array and return it.

// Return an empty array if there are no even numbers, or odd.

// Examples
function cleanUpArray(arr) {
  return arr.reduce(
    (acc, cur) => {
      if (cur % 2 === 0) {
        acc[0].push(+cur);
      } else {
        acc[1].push(+cur);
      }
      return acc;
    },
    [[], []]
  );
}
console.log(cleanUpArray(["8"])); //➞ [[8], []]
console.log(cleanUpArray(["11"])); //➞ [[], [11]]
console.log(cleanUpArray(["7", "4", "8"])); //➞ [[4, 8], [7]]
console.log(cleanUpArray(["9", "4", "5", "8"])); //➞ [[4, 8], [9, 5]]
// Notes
// All numbers will be positive integers.
