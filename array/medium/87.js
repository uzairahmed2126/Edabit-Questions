// An Introduction to the Map-Reduce Pattern
// You will be implementing a basic case of the map-reduce pattern in programming. Use the built in JavaScript array functions .map() and .reduce() to solve the following problem.

// Given a vector stored as an array of numbers, find the magnitude of the vector (this is similar to the function Math.hypot()). Use the standard distance formula for n-dimensional Cartesian coordinates.

// Examples
function magnitude(arr) {
  return Math.sqrt(arr.map((x) => x ** 2).reduce((acc, val) => acc + val, 0));
}
console.log(magnitude([3, 4])); //➞ 5
console.log(magnitude([0, 0, -10])); //➞ 10
console.log(magnitude([])); //➞ 0
console.log(magnitude([2, 3, 6, 1, 8])); //➞ 10.677078252031311
// Notes
// The array can have any length.
// The input array will contain integers (except for empty array []) //➞ 0.
// Use both .map() and .reduce().
// Don't use Math.hypot().
