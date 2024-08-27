// Sum of Odd and Even Numbers
// Write a function that takes an array of numbers and returns an array with two elements:

// The first element should be the sum of all even numbers in the array.
// The second element should be the sum of all odd numbers in the array.
// Example
// function sumOddAndEven(arr) {
//   let sumOfEven = 0;
//   let sumOfOdd = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       sumOfEven += arr[i];
//     } else {
//       sumOfOdd += arr[i];
//     }
//   }
//   return [sumOfEven, sumOfOdd];
// }
// function sumOddAndEven(arr) {
//   return arr.reduce(
//     (acc, number) => {
//       let [even, odd] = acc;
//       if (number % 2 === 0) {
//         even += number;
//       } else {
//         odd += number;
//       }
//       return [even, odd];
//     },
//     [0, 0]
//   );
// }
function sumOddAndEven(arr) {
  let i = 0;
  let even = 0;
  let odd = 0;
  while (i < arr.length) {
    let number = arr[i];
    if (number % 2 === 0) {
      even += number;
    } else {
      odd += number;
    }
    i++;
  }
  return [even, odd];
}
console.log(sumOddAndEven([1, 2, 3, 4, 5, 6])); //➞ [12, 9]
// 2 + 4 + 6 = 12 and 1 + 3 + 5 = 9
console.log(sumOddAndEven([-1, -2, -3, -4, -5, -6])); //➞ [-12, -9])
console.log(sumOddAndEven([0, 0])); //➞ [0, 0])
// Notes
// Count 0 as an even number.
