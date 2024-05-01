// Concatenate Variable Number of Input Arrays
// Create a function that concatenates n input arrays, where n is variable.

// Examples
function concat(...n) {
  //   if (typeof n === "object") return n;
  //   return n.reduce((acc, cur) => {
  //     return acc.concat(cur);
  //   });
  //   recursion
  //   if (n.length === 0) return [];
  //   return n[0].concat(concat(...n.slice(1)));
}
console.log(concat([1, 2, 3], [4, 5], [6, 7])); //➞ [1, 2, 3, 4, 5, 6, 7]
console.log(concat([1], [2], [3], [4], [5], [6], [7])); //➞ [1, 2, 3, 4, 5, 6, 7]
console.log(concat([1, 2], [3, 4])); //➞ [1, 2, 3, 4]
console.log(concat([4, 4, 4, 4, 4])); //➞ [4, 4, 4, 4, 4]
