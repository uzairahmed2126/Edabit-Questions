// Balancing Scales
// Given an array with an odd number of elements, return whether the scale will tip "left" or "right" based on the sum of the numbers. The scale will tip on the direction of the largest total. If both sides are equal, return "balanced".

// Examples
// function scaleTip(arr) {
//   let leftSide = 0;
//   let rightSide = 0;
//   for (let i = 0; arr[i] !== "I"; i++) {
//     leftSide += arr[i];
//   }
//   let start = Math.ceil(arr.length / 2);
//   let end = arr.length;
//   for (let i = start; i < end; i++) {
//     rightSide += arr[i];
//   }
//   return leftSide === rightSide
//     ? "balanced"
//     : leftSide > rightSide
//     ? "left"
//     : "right";
// }
function scaleTip(arr) {
  let leftSide = 0;
  let rightSide = 0;
  let start = Math.ceil(arr.length / 2);
  let end = arr.length;
  for (let i = 0; i < end; i++) {
    if (i < start - 1) {
      leftSide += arr[i];
    } else if (i > start - 1) {
      rightSide += arr[i];
    }
  }
  return leftSide === rightSide
    ? "balanced"
    : leftSide > rightSide
    ? "left"
    : "right";

  //   for (let i = start; i < end; i++) {
  //     rightSide += arr[i];
  //   }
  //   return leftSide === rightSide
  //     ? "balanced"
  //     : leftSide > rightSide
  //     ? "left"
  //     : "right";
}
console.log(scaleTip([0, 0, "I", 1, 1])); //➞ "right"
// 0 < 2 so it will tip right
console.log(scaleTip([1, 2, 3, "I", 4, 0, 0])); //➞ "left"
// 6 > 4 so it will tip left
console.log(scaleTip([5, 5, 5, 0, "I", 10, 2, 2, 1])); //➞ "balanced"
// 15 = 15 so it will stay balanced
// Notes
// The middle element will always be "I" so you can just ignore it.
// Assume the numbers all represent the same unit.
// Both sides will have the same number of elements.
// There are no such things as negative weights in both real life and the tests!
