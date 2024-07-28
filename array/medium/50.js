// Negative Image
// Suppose an image can be represented as a 2D array of 0s and 1s. Write a function to reverse an image. Replace the 0s with 1s and vice versa.

// Examples
function reverseImage(binary) {
  for (let i = 0; i < binary.length; i++) {
    for (let j = 0; j < binary.length; j++) {
      if (binary[i][j] === 1) {
        binary[i][j] = 0;
      } else {
        binary[i][j] = 1;
      }
    }
  }
  return binary;
}
console.log(
  reverseImage([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ])
); //➞ [  [0, 1, 1],[1, 0, 1],[1, 1, 0]]

console.log(
  reverseImage([
    [1, 1, 1],
    [0, 0, 0],
  ])
); //➞ [[0, 0, 0],[1, 1, 1]]

console.log(
  reverseImage([
    [1, 0, 0],
    [1, 0, 0],
  ])
); //➞ [[0, 1, 1],[0, 1, 1]]
// Notes
// N/A
