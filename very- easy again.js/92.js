// Sum of Numbers in an Array
// Create a function that takes an array of numbers nums as an argument. Square each number in the array if the number is even and square root √ the number if it is odd. Return the sum of the new array rounded to two decimal places.

// Example:

// [2, 4, 9]  ➞ 23
// 2 ^ 2 + 4 ^ 2 + √9 = 4 + 16 + 3 = 23
// Examples
function arraySum(arr) {
  let count = 0;
  arr.forEach((element) => {
    if (element % 2 === 0) {
      count += Math.pow(element, 2);
    } else {
      count += Math.sqrt(element);
    }
  });
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] % 2 === 0) {
  //       count += Math.pow(arr[i], 2);
  //     } else {
  //       count += Math.sqrt(arr[i]);
  //     }
  //   }
  return +count.toFixed(2);
}
console.log(arraySum([1, 3, 3, 1, 10])); //➞ 105.46

console.log(arraySum([2, 3, 4, 5])); //➞ 23.97

console.log(arraySum([1, 31, 3, 11, 0])); //➞ 11.62
// Notes
// No empty array in Tests.
// Each array element ≥ 0.
