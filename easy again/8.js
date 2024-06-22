// Sum of Cubes
// Create a function that takes in an array of numbers and returns the sum of its cubes.

// Examples
function sumOfCubes(arr) {
  let result = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     result += arr[i] * arr[i] * arr[i];
  //   }
  //   return result;
  return arr.reduce((acc, cur) => acc + cur ** 3, 0);
}
console.log(sumOfCubes([1, 5, 9])); //➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
console.log(sumOfCubes([3, 4, 5])); //➞ 216
console.log(sumOfCubes([2])); //➞ 8
console.log(sumOfCubes([])); //➞ 0
// Notes
// If given an empty array, return 0.
