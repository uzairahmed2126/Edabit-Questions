// Mirror Array
// Given an integer array, transform that array into a mirror.

// Examples
function mirror(arr) {
  //   let result = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     result.push(arr[i]);
  //   }
  //   let reversed = arr.reverse();
  //   result.pop();
  //   return result.concat(reversed);
  let filtered = arr.reduce((acc, cur) => {
    if (arr[arr.length - 1] !== cur) {
      acc.push(cur);
    }
    return acc;
  }, []);
  let reversed = arr.reduce((acc, cur) => {
    acc.unshift(cur);
    return acc;
  }, []);
  return filtered.concat(reversed);
}
console.log(mirror([0, 2, 4, 6])); //➞ [0, 2, 4, 6, 4, 2, 0]

console.log(mirror([1, 2, 3, 4, 5])); //➞ [1, 2, 3, 4, 5, 4, 3, 2, 1]

console.log(mirror([3, 5, 6, 7, 8])); //➞ [3, 5, 6, 7, 8, 7, 6, 5, 3]
// Notes
// Do not repeat the last item of the given array.