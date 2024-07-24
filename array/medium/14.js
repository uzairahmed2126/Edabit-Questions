// Total Volume of All Boxes
// Given an array of boxes, create a function that returns the total volume of all those boxes combined together. A box is represented by an array with three elements: length, width and height.

// For instance, totalVolume([2, 3, 2], [6, 6, 7], [1, 2, 1]) should return 266 since (2 x 3 x 2) + (6 x 6 x 7) + (1 x 2 x 1) = 12 + 252 + 2 = 266.

// Examples
function totalVolume(...arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let [length, width, height] = arr[i];
    count += length * width * height;
  }
  return count;
  //   return arr.reduce((acc, item) => {
  //     let [length, width, height] = item;
  //     acc += length * width * height;
  //     return acc;
  //   }, 0);
  //   return arr.reduce((acc, cur, index) => {
  //     return acc + cur;
  //   }, index);
}
console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1])); //➞ 63

console.log(totalVolume([2, 2, 2], [2, 1, 1])); //➞ 10

console.log(totalVolume([1, 1, 1])); //➞ 1
// Notes
// You will be given at least one box.
// Each box will always have three dimensions included.
