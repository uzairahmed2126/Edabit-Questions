// Sum Fractions
// Create a function that takes an array containing nested arrays as an argument. Each subarray has 2 elements. The first element is the numerator and the second element is the denominator. Return the sum of the fractions rounded to the nearest whole number.

// Examples
// function sumFractions(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     const [numerator, denominator] = arr[i];
//     sum += numerator / denominator;
//   }
//   return Math.round(sum);
// }
function sumFractions(arr) {
  let sum = 0;
  return arr.reduce((acc, cur) => {
    const [numerator, denominator] = cur;
    acc += numerator / denominator;
    return Math.round(acc);
  }, 0);
  // const [numerator, denominator] = arr[i];
  // sum += numerator / denominator;

  //   return Math.round(sum);
}
console.log(
  sumFractions([
    [18, 13],
    [4, 5],
  ])
); //➞ 2
console.log(
  sumFractions([
    [36, 4],
    [22, 60],
  ])
); //➞ 9
console.log(
  sumFractions([
    [11, 2],
    [3, 4],
    [5, 4],
    [21, 11],
    [12, 6],
  ])
); //➞ 11
// Notes
// Your result should be a number not string.
