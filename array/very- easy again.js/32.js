// Fix the Bug: Simple Array Manipulation
// Help fix all the bugs in the function incrementItems! It is intended to add 1 to every element in the array!

// Examples
function incrementItems(arr) {
  //   return arr.map((element) => {
  //     return ++element;
  //   });
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] + 1);
  }
  return result;
}
console.log(incrementItems([0, 1, 2, 3])); //➞ [1, 2, 3, 4]
console.log(incrementItems([2, 4, 6, 8])); //➞ [3, 5, 7, 9]
console.log(incrementItems([-1, -2, -3, -4])); //➞ [0, -1, -2, -3]
// Notes
// Make sure to read every line carefully.
