// Find the Bug: Checking Even Numbers
// Create a function that takes in an array and returns true if all its values are even, and false otherwise.

// Not a big deal, your friend says. He writes the following code:

function checkAllEven(arr) {
  //   return arr.every((x) => x % 2 === 0);
  let countdown = 0;
  while (countdown < arr.length) {
    if (arr[countdown] % 2 !== 0) {
      return false;
    }
    countdown++;
  }
  return true;
}
// The code above leads to a Reference Error, with x being undefined. Fix the code above so that all tests pass:

// Examples
console.log(checkAllEven([1, 2, 3, 4])); //➞ false
console.log(checkAllEven([2, 4, 6])); //➞ true
console.log(checkAllEven([5, 6, 8, 10])); //➞ false
console.log(checkAllEven([-2, 2, -2, 2])); //➞ true
// Notes
// For help, check Resources or ask a question in the Comments.
