// Perfect Square Patch
// Create a function that takes an integer and outputs an n x n square solely consisting of the integer n.

// Examples
// function squarePatch(num) {
//   let outerArr = [];
//   for (let i = 0; i < num; i++) {
//     let innerArr = [];
//     for (let j = 0; j < num; j++) {
//       innerArr.push(num);
//     }
//     outerArr.push(innerArr);
//   }
//   return outerArr;
// }
// with recursion
function squarePatch(num) {
  if (num == 0) {
    return [];
  }
  function buildPatch(size, result = []) {
    if (size === 0) return result;
    result.push(new Array(num).fill(num));
    return buildPatch(size - 1, result);
  }
  return buildPatch(num);
}
console.log(squarePatch(3)); //➞ [[3, 3, 3],[3, 3, 3],[3, 3, 3]]
console.log(squarePatch(5)); //➞ [[5, 5, 5, 5, 5],[5, 5, 5, 5, 5],[5, 5, 5, 5, 5],[5, 5, 5, 5, 5],[5, 5, 5, 5, 5]]
console.log(squarePatch(1)); //➞ [[1]]
console.log(squarePatch(0)); //➞ []
// Notes
// n >= 0.
// If n === 0, return an empty array.
squarePatch(5);
