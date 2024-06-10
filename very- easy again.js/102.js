// Fix the Error: Filtering out Empty Arrays
// I am trying to filter out empty arrays from an array. In other words, I want to transform something that looks like this: ["a", "b", [], [], [1, 2, 3]] to look like ["a", "b", [1, 2, 3]]. My code looks like this:

function removeEmptyArrays(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length !== 0) {
      result.push(arr[i]);
    }
  }
  return result;
  //   return arr.filter((x) => x.length !== 0);
}
// However, somehow, the empty arrays still exist. Fix this incorrect code to remove the empty arrays.

// Examples
// What I want:
console.log(removeEmptyArrays(["a", "b", []])); //➞ ["a", "b"]
console.log(removeEmptyArrays([1, 2, [], 4])); //➞ [1, 2, 4]
// What I am getting:
// console.log(removeEmptyArrays(["a", "b", []])); //➞ ["a", "b", []]
// console.log(removeEmptyArrays([1, 2, [], 4])); //➞ [1, 2, [], 4]
// Notes
// N/A
