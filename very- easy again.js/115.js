// Eliminate Odd Numbers within an Array
// Create a function that takes an array of numbers and returns only the even values.

// Examples
function noOdds(arr) {
  let result = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] % 2 === 0) {
  //       result.push(arr[i]);
  //     }
  //   }
  //   return result;
  arr.forEach((element) => {
    if (element % 2 === 0) {
      result.push(element);
    }
  });
  return result;
}
console.log(noOdds([1, 2, 3, 4, 5, 6, 7, 8])); //➞ [2, 4, 6, 8]
console.log(noOdds([43, 65, 23, 89, 53, 9, 6])); //➞ [6]
console.log(noOdds([718, 991, 449, 644, 380, 440])); //➞ [718, 644, 380, 440]
// Notes
// Return all even numbers in the order they were given.
// All test cases contain valid numbers ranging from 1 to 3000.
