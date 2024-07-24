// Difference of Volumes of Cuboids
// Create a program that will take two arrays of integers, a and b. Each array will consist of 3 positive integers, representing the dimensions of cuboids a and b. Find the difference of the cuboids' volumes.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Examples
function findDifference(volume1, volume2) {
  //   const a = volume1.reduce((acc, cur) => acc * cur);
  //   const b = volume2.reduce((acc, cur) => acc * cur);
  //   return a > b ? a - b : b - a;
  const a = volume1[0] * volume1[1] * volume1[2];
  const b = volume2[0] * volume2[1] * volume2[2];
  return Math.abs(a-b)
}
console.log(findDifference([28, 16, 29], [7, 8, 17])); //➞ 12040
console.log(findDifference([9, 22, 18], [16, 24, 10])); //➞ 276
console.log(findDifference([1, 9, 25], [10, 7, 9])); //➞ 405
console.log(findDifference([7, 6, 16], [26, 9, 26])); //➞ 5412
// Notes
// Each array element is greater than 0.
