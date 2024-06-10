// Next Element in Arithmetic Sequence
// Create a function that returns the next element in an arithmetic sequence. In an arithmetic sequence, each element is formed by adding the same constant to the previous element.

// Examples
function nextElement(arr) {
  let diffrence = arr[1] - arr[0];
  const lastElement = arr[arr.length - 1];
  return lastElement + diffrence;
}
console.log(nextElement([3, 5, 7, 9])); //➞ 11
console.log(nextElement([-5, -6, -7])); //➞ -8
console.log(nextElement([2, 2, 2, 2, 2])); //➞ 2
// Notes
// All input arrays will contain integers only.
