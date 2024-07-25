// Geometry 1: Length of Line Segment
// Write a function that takes coordinates of two points on a two-dimensional plane and returns the length of the line segment connecting those two points.

// Examples
function lineLength(arr1, arr2) {
  let x = ([x1, x2] = arr1);
  let y = ([y1, y2] = arr2);
  let a = x1 - y1;
  let b = y2 - x2;
  let c = a ** 2 + b ** 2;
  return Number(Math.sqrt(c) === 0 ? 0 : Math.sqrt(c).toFixed(2));
}
console.log(lineLength([15, 7], [22, 11])); //➞ 8.06

console.log(lineLength([0, 0], [0, 0])); //➞ 0

console.log(lineLength([0, 0], [1, 1])); //➞ 1.41
// Notes
// The order of the given numbers is X, Y.
// This challenge is easier than it looks.
// Round your result to two decimal places.
