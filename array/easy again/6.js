// Filter out Strings from an Array
// Create a function that takes an array of non-negative integers and strings and return a new array without the strings.

// Examples
function filterArray(arr) {
  //   return arr.filter((elements) => typeof elements === "number");
  return arr.reduce((acc, cur) => {
    if (typeof cur === "number") {
      acc.push(cur);
    }
    return acc;
  }, []);
  //   let result = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (typeof arr[i] === "number") result.push(arr[i]);
  //   }
  //   return result;
}
console.log(filterArray([1, 2, "a", "b"])); //➞ [1, 2]
console.log(filterArray([1, "a", "b", 0, 15])); //➞ [1, 0, 15]
console.log(filterArray([1, 2, "aasf", "1", "123", 123])); //➞ [1, 2, 123]
// Notes
// Zero is a non-negative integer.
// The given array only has integers and strings.
// Numbers in the array should not repeat.
// The original order must be maintained.
