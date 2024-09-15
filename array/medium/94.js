// Pyramid Arrays
// Given a number n, return an array containing several arrays. Each array increments in size, from range 1 to n inclusive, contaning its length as the elements.

// Examples
function pyramidArrays(num) {
  let towDArr = [];
  for (let i = 0; i < num; i++) {
    let oneDArr = [];
    for (let j = 0; j < i + 1; j++) {
      oneDArr.push(i + 1);
    }
    towDArr.push(oneDArr);
  }
  return towDArr;
}
console.log(pyramidArrays(1)); //➞ [[1]]
console.log(pyramidArrays(3)); //➞ [[1], [2, 2], [3, 3, 3]]
console.log(pyramidArrays(5)); //➞ [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5]]
// Notes
// n will be a positive integer.
