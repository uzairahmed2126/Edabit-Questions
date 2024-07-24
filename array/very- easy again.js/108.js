// Capture the Rook
// Write a function that returns true if two rooks can attack each other, and false otherwise.

// Examples
function canCapture(rooks) {
  let [rook1, rook2] = rooks;
  return rook1[0] === rook2[0] || rook1[1] === rook2[1];
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[0][i] === arr[1][i]) {
  //     return true;
  //   }
  // }
  // return false;
}
console.log(canCapture(["A8", "E8"])); //➞ true
console.log(canCapture(["A1", "B2"])); //➞ false
console.log(canCapture(["H4", "H3"])); //➞ true
console.log(canCapture(["F5", "C8"])); //➞ false
// Notes
// Assume no blocking pieces.
// Two rooks can attack each other if they share the same row (letter) or column (number).
