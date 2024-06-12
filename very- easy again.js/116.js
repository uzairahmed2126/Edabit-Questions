// Multiply by Length
// Create a function to multiply all of the values in an array by the amount of values in the given array.

// Examples
function multiplyByLength(arr) {
  //   for (let i = 0; i < arr.length; i++) {
  //     arr[i] = arr[i] * arr.length;
  //   }
  //   return arr;
  //   return arr.map((element) => element * arr.length);
  arr.forEach((element, index) => {
    arr[index] = element * arr.length;
    // console.log(element);
  });
  return arr;
}
console.log(multiplyByLength([2, 3, 1, 0])); //➞ [8, 12, 4, 0]
console.log(multiplyByLength([4, 1, 1])); //➞ ([12, 3, 3])
console.log(multiplyByLength([1, 0, 3, 3, 7, 2, 1])); //➞  [7, 0, 21, 21, 49, 14, 7]
console.log(multiplyByLength([0])); //➞ ([0])
// Notes
// All of the values given are numbers.
// All arrays will have at least one element.
// Don't forget to return the result.
