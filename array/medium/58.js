// Positive Count / Negative Sum
// Create a function that takes an array of positive and negative numbers. Return an array where the first element is the count of positive numbers and the second element is the sum of negative numbers.

// Examples
// function countPosSumNeg(arr) {
//   let positive = 0;
//   let negative = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       negative += arr[i];
//     } else {
//       positive++;
//     }
//   }
//   if (positive === 0 && negative === 0) {
//     return [];
//   }
//   return [positive, negative];
// }
// function countPosSumNeg(arr) {
//   return arr.reduce(
//     (acc, cur) => {
//       if (cur < 0) {
//         acc[1] += cur;
//       } else {
//         acc[0]++;
//       }
//       return acc;
//     },
//     [0, 0]
//   );
// }
function countPosSumNeg(arr) {
  let positive = 0;
  let negative = 0;
  arr.filter((item) => {
    if (item >= 0) {
      positive++;
    } else {
      negative += item;
    }
  });
  return [positive, negative];
}
console.log(
  countPosSumNeg([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])
); //➞ [10, -65]
// There are a total of 10 positive numbers.
// The sum of all negative numbers equals -65.
console.log(countPosSumNeg([92, 6, 73, -77, 81, -90, 99, 8, -85, 34])); //➞ [7, -252]
console.log(countPosSumNeg([91, -4, 80, -73, -28])); //➞ [2, -105]
console.log(countPosSumNeg([])); //➞ []
// Notes
// If given an empty array, return an empty array: []
// 0 is not positive.
