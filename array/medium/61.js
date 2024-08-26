// Even Index Elements in Array
// Create a function that takes an array of integers and returns the sum of all the integers that have an even index, multiplied by the integer at the last index.

// For example:

// console.log([2, 3, 4, 5]) //➞ 30
// console.log((2 + 4) * 5) //➞ 30

// console.log([1, 4, 5, 6, 7, 2, 3]) //➞ 48
// console.log((1 + 5 + 7 + 3) * 3) //➞ 48
// Examples;
// function evenLast(arr) {
//   let sum = 0;
//   let lastIndex = arr[arr.length - 1];
//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 0) {
//       sum += arr[i] * lastIndex;
//     }
//   }
//   return sum;
// }
function evenLast(arr) {
  let lastIndex = arr[arr.length - 1];
  return arr.reduce((acc, cur, index) => {
    if (index % 2 == false) {
      acc += cur * lastIndex;
    }
    return acc;
  }, 0);
}
console.log(evenLast([])); //➞ 0

console.log(evenLast([1, 3, 3, 1, 10])); //➞ 140

console.log(evenLast([-11, 3, 3, 1, 10])); //➞ 20
// Notes
// If the array is empty, return 0.
