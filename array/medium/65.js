// Count Letters in a Word Search
// Create a function that counts the number of times a particular letter shows up in the word search.

// Examples
// function letterCounter(arr, val) {
//   let count = 0;
//   let flated = arr.flat();
//   let len = flated.length;
//   for (let i = 0; i < len; i++) {
//     if (flated[i] === val) {
//       count++;
//     }
//   }
//   return count;
// }
function letterCounter(arr, val) {
  let len = arr.length;
  let count = 0;
  for (let i = 0; i < len; i++) {
    arr[i].forEach((item) => {
      if (val === item) {
        count++;
      }
    });
  }
  return count;
}
console.log(
  letterCounter(
    [
      ["D", "E", "Y", "H", "A", "D"],
      ["C", "B", "Z", "Y", "J", "K"],
      ["D", "B", "C", "A", "M", "N"],
      ["F", "G", "G", "R", "S", "R"],
      ["V", "X", "H", "A", "S", "S"],
    ],
    "D"
  )
); //➞ 3

// "D" shows up 3 times: twice in the first row, once in the third row.

console.log(
  letterCounter(
    [
      ["D", "E", "Y", "H", "A", "D"],
      ["C", "B", "Z", "Y", "J", "K"],
      ["D", "B", "C", "A", "M", "N"],
      ["F", "G", "G", "R", "S", "R"],
      ["V", "X", "H", "A", "S", "S"],
    ],
    "H"
  )
); //➞ 2
// Notes
// You will always be given an array with five sub-arrays.
