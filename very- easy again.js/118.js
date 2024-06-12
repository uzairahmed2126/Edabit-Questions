// Hurdle Jump
// Create a function that takes an array of hurdle heights and a jumper's jump height, and determine whether or not the hurdler can clear all the hurdles.

// A hurdler can clear a hurdle if their jump height is greater than or equal to the hurdle height.

// Examples
function hurdleJump(hurdleHeight, jumpHeight) {
    return hurdleHeight.every((element) => element <= jumpHeight);
}
console.log(hurdleJump([1, 2, 3, 4, 5], 5)); //➞ true
console.log(hurdleJump([5, 5, 3, 4, 5], 3)); //➞ false
console.log(hurdleJump([5, 4, 5, 6], 10)); //➞ true
console.log(hurdleJump([1, 2, 1], 1)); //➞ false
// Notes
// Return true for the edge case of an empty array of hurdles. (Zero hurdles means that any jump height can clear them).
