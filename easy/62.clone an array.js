// Clone an Array
// The Code tab has a code which attempts to add a clone of an array to itself. There is no error message, but the results are not as expected. Can you fix the code?

// Examples
function clone(arr) {
  //   return [...arr,arr];
  //   return arr.concat([arr]);
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i]);
//   }
//   newArr.push(arr);
//   return newArr;
}
console.log(clone([1, 1])); //➞ [1, 1, [1, 1]]

console.log(clone([1, 2, 3])); //➞ [1, 2, 3, [1, 2, 3]]

console.log(clone(["x", "y"])); //➞ ["x", "y", ["x", "y"]]
// Notes
// N/A
