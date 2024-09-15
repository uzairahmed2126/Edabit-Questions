// Pyramid Arrays
// Given a number n, return an array containing several arrays. Each array increments in size, from range 1 to n inclusive, contaning its length as the elements.

// Examples
// function pyramidArrays(num) {
//   let towDArr = [];
//   for (let i = 0; i < num; i++) {
//     let oneDArr = [];
//     for (let j = 0; j < i + 1; j++) {
//       oneDArr.push(i + 1);
//     }
//     towDArr.push(oneDArr);
//   }
//   return towDArr;
// }
function pyramidArrays(num) {
  if (num === 0) {
    return [];
  }
  function recursion(size, result = []) {
    if (size === 0) return result;
    result.push(new Array(size).fill(size));
    return recursion(size - 1, result);
  }
  return recursion(num).reverse();
}
console.log(pyramidArrays(1)); //➞ [[1]]
console.log(pyramidArrays(3)); //➞ [[1], [2, 2], [3, 3, 3]]
console.log(pyramidArrays(5)); //➞ [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5]]
// Notes
// n will be a positive integer.
