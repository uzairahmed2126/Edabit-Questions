// Concatenate Variable Number of Input Arrays
// Create a function that concatenates n input arrays, where n is variable.

// Examples
function concat(...arr) {
  //   return arr.flat();
  //   let result = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     result.push(...arr[i]);
  //   }
  //   return result;
  return arr.reduce((acc, cur) => {
    acc.push(...cur);
    return acc;
  }, []);
}
console.log(concat([1, 2, 3], [4, 5], [6, 7])); //➞ [1, 2, 3, 4, 5, 6, 7]

console.log(concat([1], [2], [3], [4], [5], [6], [7])); //➞ [1, 2, 3, 4, 5, 6, 7]

console.log(concat([1, 2], [3, 4])); //➞ [1, 2, 3, 4]

console.log(concat([4, 4, 4, 4, 4])); //➞ [4, 4, 4, 4, 4]
// Notes
// Arrays should be concatenated in order of the arguments.
