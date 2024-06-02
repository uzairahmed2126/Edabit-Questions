// Squares and Cubes
// Create a function that takes an array of two numbers and checks if the square root of the first number is equal to the cube root of the second number.

// Examples
function checkSquareAndCube(array) {
  const squareRoot = Math.sqrt(array[0]);
  const cubeRoot = Math.cbrt(array[1]);
  return squareRoot === cubeRoot;
}
console.log(checkSquareAndCube([4, 8])); //➞ true
console.log(checkSquareAndCube([16, 48])); //➞ false
console.log(checkSquareAndCube([9, 27])); //➞ true
// Notes
// Remember to return either true or false.
// All arrays contain two positive numbers.
// If you're stuck, check the Resources for a hint.
