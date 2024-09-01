// Sum of Two Numbers in Array Equal to Given Number
// Create a function that takes an array of numbers arr and a number n. Return true if the sum of any two elements is equal to the given number. Otherwise, return false.

// Examples
function checkSum(arr, n) {
  //   let sorted = arr.sort((a, b) => a - b);
  //   return sorted;
  //   let sum = 0;
  //   sum = sorted[0] + sorted[sorted.length - 1];
  //   return 98 + 76;
  //   let sum = 0;
  //   let isTrue = false;
  //   for (let i = 0; i < arr.length - 1; i++) {
  //     sum = arr[i] + arr[i + 1];
  //     if (sum === n) {
  //       isTrue = true;
  //       break;
  //     }
  //   }
  //   return isTrue;
}
// function checkSum(arr, n) {
//   const seenNumbers = new Set();
//   for (let i = 0; i < arr.length; i++) {
//     const complement = n - arr[i];
//     if (seenNumbers.has(complement)) {
//       return true;
//     }
//     seenNumbers.add(arr[i]);
//   }
//   return false;
// }
function checkSum(arr, n) {
  return arr.some((num, index) => arr.includes(n - num, index + 1));
}
console.log(checkSum([10, 12, 4, 7, 9, 11], 16)); //➞ true
console.log(checkSum([4, 5, 6, 7, 8, 9], 13)); //➞ true
console.log(checkSum([0, 98, 76, 23], 174)); //➞ true
console.log(checkSum([0, 9, 7, 23, 19, 18, 17, 66], 39)); //➞ false
console.log(checkSum([2, 8, 9, 12, 45, 78], 1)); //➞ false
// Notes
// N/A
