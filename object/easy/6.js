// Printer Levels
// Given an object of how many more pages each ink color can print, output the maximum number of pages the printer can print before any of the colors run out.

// Examples
function inkLevels(obj) {
  let arr = Object.values(obj);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr[0];
  //   return arr.sort()[0];
  //   return Math.min(...arr);
}
console.log(
  inkLevels({
    cyan: 23,
    magenta: 12,
    yellow: 10,
  })
); //➞ 10

console.log(
  inkLevels({
    cyan: 432,
    magenta: 543,
    yellow: 777,
  })
); //➞ 432

console.log(
  inkLevels({
    cyan: 700,
    magenta: 700,
    yellow: 0,
  })
); //➞ 0
// Notes
// A single printed page requires each color once, so printing is not possible if any of the slots lack ink (see example #3).
