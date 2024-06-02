// Convert All Array Items to String
// Create a function that takes an array of integers and strings. Convert integers to strings and return the new array.

// Examples
function parseArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    typeof arr[i] !== "string"
      ? result.push(String(arr[i]))
      : result.push(arr[i]);
  }
  return result;
  //   return arr.map((element) =>
  //     typeof element !== "string" ? String(element) : element
  //   );
}
console.log(parseArray([1, 2, "a", "b"])); //➞ ["1", "2", "a", "b"]
console.log(parseArray(["abc", 123, "def", 456])); //➞ ["abc", "123", "def", "456"]
console.log(parseArray([1, 2, 3, 17, 24, 3,"a", "123b"])); //➞ ["1", "2", "3", "17", "24", "3", "a", "123b"]
console.log(parseArray([])); //➞ []
// Notes
// Return [] if array is empty.
