// Geometry 1: Length of Line Segment
// Write a function that takes coordinates of two points on a two-dimensional plane and returns the length of the line segment connecting those two points.

// Examples
function lineLength(point1, point2) {
  const [x1, y1] = point1;
  const [x2, y2] = point2;

  const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  return Math.round(distance * 100) / 100;
}
console.log(lineLength([15, 7], [22, 11])); //➞ 8.06
console.log(lineLength([0, 0], [0, 0])); //➞ 0
console.log(lineLength([0, 0], [1, 1])); //➞ 1.41
// Notes
// The order of the given numbers is X, Y.
// This challenge is easier than it looks.
// Round your result to two decimal places.
