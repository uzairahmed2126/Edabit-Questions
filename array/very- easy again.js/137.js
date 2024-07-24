// Filter by Digit Length
// Create a function that filters out an array to include numbers that only have a certain number of digits.

// Examples
function filterDigitLength(arr, num) {
  //   let result = [];
  //   let finalRes = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     result.push(String(arr[i]));
  //     if (result[i].length === num) {
  //       finalRes.push(+result[i]);
  //     }
  //   }
  //   return finalRes;
  return arr.filter((item) => item.toString().length === num);
}
console.log(filterDigitLength([88, 232, 4, 9721, 555], 3)); //➞ [232, 555]
// Include only numbers with 3 digits.
console.log(filterDigitLength([2, 7, 8, 9, 1012], 1)); //➞ [2, 7, 8, 9]
// Include only numbers with 1 digit.
console.log(filterDigitLength([32, 88, 74, 91, 300, 4050], 1)); //➞ []
// No numbers with only 1 digit exist => return empty array.
console.log(filterDigitLength([5, 6, 8, 9], 1)); //➞ [5, 6, 8, 9]
// All numbers in the array have 1 digit only => return original array.
// Notes
// If no numbers of the specified digit length exist, return an empty array.
// If all numbers in the array have the specified digit length, return the original array.
// The sub-array returned should have the same relative order as the original array.
