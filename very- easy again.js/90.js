// Array Index
// Given a 2D-list of letters arr and a list of indexes idx, find the letters on given indexes and return as a string.

arr = [
  ["m", "u", "b"],
  ["a", "s", "h"],
  ["i", "r", "1"],
];

idx = [1, 3, 5, 8];
// [
//   // You have to find the characters in these indexes of the given list if you think of the indexes as:

//   ([1, 2, 3], [4, 5, 6], [7, 8, 9])
// ];
function arrIndex() {
  let result = "";
  let flatArray = arr.flat();
  for (let i = 0; i < idx.length; i++) {
    result += flatArray[idx[i] - 1];
  }
  return result;
}
console.log(arrIndex(arr, idx)); //➞ "mbsr"
// Notes
// Remember that the indexes start from one and not zero.
